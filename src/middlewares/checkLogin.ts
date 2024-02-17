import { type NextFunction, type Request, type Response } from 'express'
import prisma from '../utils/prisma'
import { userFields } from '../controllers/users'

export const checkLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.session.userId
  // 检查登陆状态的逻辑
  if (req.session.userId == null) {
    // 用户未登陆，重定向到登陆页面或返回未登陆错误
    res.status(401).send({ message: '未登陆' })
    return
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: userFields
  })

  if (user != null) {
    // 将用户数据存到locals中
    res.locals.currentUser = user
    // 用户已登陆，继续请求处理
    next()
  } else {
    // 存在会话，但已经找不到了
    res.status(401).send({ message: '用户已失效' })
  }
}
