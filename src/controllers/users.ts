import { type Request, type Response } from 'express'

export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body
  if (username !== 'admin' || password !== '888888') {
    res.status(400).json({ messagae: '用户名或密码错误' })
    return
  }
  req.session.user = {
    username
  }

  res.json({ message: '登陆成功' })
}

export const logout = (req: Request, res: Response): void => {
  // 销毁会话
  req.session.destroy(() => {
    res.json({ message: '登出成功' })
  })
}
