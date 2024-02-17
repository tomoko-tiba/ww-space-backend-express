import { type Request, type Response } from 'express'
import prisma from '../utils/prisma'
import { bhash, bcompare } from '../utils/passwordHash'

export const userFields = {
  id: true,
  userName: true,
  userIntro: true,
  userPhoto: true
}

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body

  const user = await prisma.user.findUnique({
    where: {
      userName: username
    }
    // 需要password传入，所以不需要select: userFields
  })
  // 判断用户存在且密码正确
  if (user == null || !(await bcompare(password as string, user.password))) {
    res.status(400).json({ message: '用户名或密码错误' })
    return
  }
  req.session.userId = user.id
  res.json({ message: '登陆成功' })
}

export const logout = (req: Request, res: Response): void => {
  // 销毁会话
  req.session.destroy(() => {
    res.json({ message: '登出成功' })
  })
}

export const getAll = async (req: Request, res: Response): Promise<void> => {
  const users = await prisma.user.findMany({
    select: userFields
  })
  res.json(users)
}

export const getOneById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  if (+id === req.session.userId) {
    res.status(400).json({ message: '不能删除自己' })
    return
  }
  const user = await prisma.user.findUnique({
    where: {
      id: +id
    },
    select: userFields
  })
  if (user == null) {
    res.status(404).json({ message: '错误！数据不存在' })
  } else {
    res.json(user)
  }
}

export const createOne = async (req: Request, res: Response): Promise<void> => {
  const user = await prisma.user.create({
    data: {
      userName: req.body.userName,
      userIntro: req.body.userIntro,
      userPhoto: req.body.userPhoto,
      password: await bhash(req.body.password as string)
    }
  })
  res.json(user)
}
/*
export const updateOneById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const updateUser = await prisma.user.update({
    where: {
      id: +id
    },
    data: {
      userName: req.body.userName,
      userIntro: req.body.userIntro,
      userPhoto: req.body.userPhoto,
      password: req.body.password
    }
  })
  res.json(updateUser)
} */
export const updateOneById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    where: {
      id: +id
    },
    select: userFields
  })
  if (user == null) {
    res.status(404).json({ message: '错误，数据不存在' })
    return
  }

  const updateUser = await prisma.user.update({
    where: {
      id: +id
    },
    data: {
      // 更改了才传该字段
      userName: user.userName !== req.body.userName ? req.body.userName : undefined,
      userIntro: req.body.userIntro,
      userPhoto: req.body.userPhoto,
      // 提交了新密码才设置
      password: req.body.password != null && req.body.password !== ''
        ? await bhash(req.body.password as string)
        : undefined
    },
    select: userFields
  })
  res.json(updateUser)
}

export const deleteOneById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const deleteUser = await prisma.user.delete({
    where: {
      id: +id
    },
    select: userFields
  })
  res.json(deleteUser)
}
