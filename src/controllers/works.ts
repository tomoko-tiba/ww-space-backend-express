import { type Request, type Response } from 'express'
import worksMokcData, { type Work } from '../mock/works'

let displayData: Work[] = [...worksMokcData]
let lastSearchText: string | undefined

/*
export const getWorks = (req: Request, res: Response): void => {
  res.send('GET /works: 返回所有works')
}

export const createWork = (req: Request, res: Response): void => {
  res.send('POST /works: 创建一个新的work')
}

export const getWorkById = (req: Request, res: Response): void => {
  const { id } = req.params
  res.send(`GET /works/${id}: 返回 id 为 ${id} 的 work`)
}

export const updateWork = (req: Request, res: Response): void => {
  const { id } = req.params
  res.send(`PUT /works/${id}: 更新 id 为 ${id} 的 work`)
}

export const deleteWork = (req: Request, res: Response): void => {
  const { id } = req.params
  res.send(`DELETE /works/${id}: 删除 id 为 ${id} 的 work`)
}
*/

// 返回所有数据
export const getWorks = (req: Request, res: Response): void => {
  setTimeout(() => {
    res.json(worksMokcData)
  }, 1500)
}

// 返回分页数据 page=1&pageSize=10`
export const getWorksByPages = (req: Request, res: Response): void => {
  const page = Number(req.query.page)
  const pageSize = Number(req.query.pageSize)
  const searchText = req.query.searchText as string | undefined

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

  if (isNaN(page) || isNaN(pageSize) || pageSize === 0) {
    res.status(400).json({ message: '分页参数错误错误' })
    return
  }

  setTimeout(() => {
    const count = displayData.length
    const data = displayData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
    res.json({ count, data })
  }, 1500)
}

// 查询单个
export const getWorkById = (req: Request, res: Response): void => {
  const { id } = req.params
  setTimeout(() => {
    const item = worksMokcData.find(item => Number(item.id) === Number(id))
    if (item == null) {
      res.status(404).json({ message: '错误，数据不存在' })
    } else {
      res.json(item)
    }
  }, 1500)
}

export const createWork = (req: Request, res: Response): void => {
  console.log(req.body)
  res.json({ message: 'POST /works: 创建一个新的 work' })
}
