import { type NextFunction, type Request, type Response } from 'express'

export const checkLogin = (req: Request, res: Response, next: NextFunction): void => {
  // 检查登陆状态的逻辑
  if (req.session.user != null) {
    // 用户已登陆，继续请求处理
    next()
  } else {
    // 用户未登陆，重定向到登陆页面或返回未登陆错误
    res.status(401).send({ message: '未登陆' })
  }
}
