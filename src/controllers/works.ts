import { type Request, type Response } from 'express'
// worksMokcData, { type Work } from '../mock/works'
import prisma from '../utils/prisma'
import { userFields } from './users'

type WorkByQuery = {
  user: {
    id: number
    userName: string
    userIntro: string | null
    userPhoto: string | null
  }
} & {
  id: number
  title: string
  content: string
  imgSrc: string
  likes: number
  views: number
  createdAt: Date
  updatedAt: Date
  userId: number
}

// 与前端约定的参数，类型一般叫做“VO”，View Object 的意思
interface WorkVO {
  id: number
  userName: string
  userIntro: string | null
  userPhoto: string | null
  title: string
  content: string
  imgSrc: string
  likes: number
  views: number
  time: string
}

const toFeObj = (o: WorkByQuery): WorkVO => {
  return {
    id: o.id,
    userName: o.user.userName,
    userIntro: o.user.userIntro,
    userPhoto: o.user.userPhoto,
    title: o.title,
    content: o.content,
    imgSrc: o.imgSrc,
    likes: o.likes,
    views: o.views,
    time: o.createdAt.toLocaleString('zh-Hans-CN', { timeZone: 'Asia/Shanghai' })
  }
}
/*
const displayData: Work[] = [...worksMokcData]
let lastSearchText: string | undefined

// 返回所有数据
export const getWorks = (req: Request, res: Response): void => {
  setTimeout(() => {
    res.json(worksMokcData)
  }, 1500)
} */

// 返回分页数据 page=1&pageSize=10`
export const getWorksByPages = async (req: Request, res: Response): Promise<void> => {
  const page = Number(req.query.page)
  const pageSize = Number(req.query.pageSize)
  const searchText = req.query.searchText as string | undefined

  if (isNaN(page) || isNaN(pageSize) || pageSize === 0) {
    res.status(400).json({ message: '分页参数错误错误' })
  }

  const where = searchText != null && searchText !== ''
    ? {
        OR: [
          { title: { contains: searchText } },
          { content: { contains: searchText } }
        ]
      }
    : {}

  const data = await prisma.work.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    where,
    include: {
      user: {
        select: userFields
      }
    },
    orderBy: { createdAt: 'desc' }
  })
  const count = await prisma.work.count({
    where
  })

  res.json({ count, data: data.map(item => toFeObj(item)) })

  /*
  if (searchText !== lastSearchText) {
    if (searchText === undefined || searchText === '') {
      displayData = [...worksMokcData]
    } else {
      displayData = worksMokcData.filter(item => {
        return item.title.toLowerCase().includes(searchText.toLowerCase())
      })
    }
  }
  lastSearchText = searchText

  setTimeout(() => {
    const count = displayData.length
    const data = displayData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
    res.json({ count, data })
  }, 1500) */
}

// 查询单个
export const getWorkById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const flag = req.query.flag
  const work = await prisma.work.findUnique({
    where: {
      id: +id
    },
    include: {
      user: {
        select: userFields
      }
    }
  })

  if (work == null) {
    res.status(404).json({ message: '错误，数据不存在' })
    return
  }

  if (flag === 'client') {
    await prisma.work.update({
      where: {
        id: work.id
      },
      data: {
        views: work.views + 1
      }
    })
    res.json(toFeObj(work))
  }
  /*
  setTimeout(() => {
    const item = worksMokcData.find(item => Number(item.id) === Number(id))
    if (item == null) {
      res.status(404).json({ message: '错误，数据不存在' })
    } else {
      res.json(item)
    } */
}

export const createWork = async (req: Request, res: Response): Promise<void> => {
  const work = await prisma.work.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      imgSrc: req.body.imgSrc,
      userId: res.locals.currentUser.id
    }
  })
  res.json(work)
}

export const updateWork = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const updateWork = await prisma.work.update({
    where: {
      id: +id
    },
    data: {
      title: req.body.title,
      content: req.body.content,
      imgSrc: req.body.imgSrc,
      userId: res.locals.currentUser.id
    }
  })
  res.json(updateWork)
}

export const deleteWork = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const deleteWork = await prisma.work.delete({
    where: {
      id: +id
    }
  })
  res.json(deleteWork)
}

export const like = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const action = req.body.action
  const work = await prisma.work.findUnique({
    where: {
      id: +id
    }
  })

  if (work == null) {
    res.status(404).json({ messagge: '错误！数据不存在' })
    return
  }

  await prisma.work.update({
    where: {
      id: work.id
    },
    data: {
      likes: action === 'unlike' ? work.likes - 1 : work.likes + 1
    }
  })

  res.json({ message: '操作成功' })
}
