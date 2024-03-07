import { type Request, type Response } from 'express'
import prisma from '../utils/prisma'

export const categoryFields = {
  id: true,
  name: true,
}

export const getAll = async (req: Request, res: Response): Promise<void> => {
  const categories = await prisma.category.findMany({
    orderBy: [
      { orderIndex: 'asc' }, 
      { id: 'asc' }]
  })
  res.json(categories)
}

export const getOneById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const category = await prisma.category.findUnique({
    where: {
      id: +id
    },
  })
  if (category == null) {
    res.status(404).json({ message: '错误！数据不存在' })
  } else {
    res.json(category)
  }
}

export const createOne = async (req: Request, res: Response): Promise<void> => {
  const category = await prisma.category.create({
    data: {
      name: req.body.name,
    }
  })
  res.json(category)
}



export const updateOneById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const category = await prisma.category.findUnique({
      where: {
        id: +id
      },
    })
    if (category == null) {
      res.status(404).json({ message: '错误，数据不存在' })
      return
    }
  
    const updateCategory = await prisma.category.update({
      where: {
        id: +id
      },
      data: {
        name: req.body.name
      },
    })
    res.json(updateCategory)
  }

export const deleteOneById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const deleteCategory = await prisma.category.delete({
    where: {
      id: +id
    },
  })
  res.json(deleteCategory)
}
