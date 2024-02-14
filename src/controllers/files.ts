import { type Request, type Response } from 'express'

export const upload = (req: Request, res: Response): void => {
  console.log(req.file, req.body)
  if (req.file == null) {
    res.status(400).json({ message: '上传失败' })
    return
  }
  res.json({ path: req.file.path })
}
