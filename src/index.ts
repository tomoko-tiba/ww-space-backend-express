import express, { type NextFunction, type Request, type Response } from 'express'
import * as works from './controllers/works'
// import birds from './bird'
import cors from 'cors'
import session from 'express-session'
import * as users from './controllers/users'
import { checkLogin } from './middlewares/checkLogin'
import * as files from './controllers/files'
import multer from 'multer'
import * as path from 'path'

const app = express()

// 上传中间件
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/') // 上次文件保存的目标文件夹
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop()) // 上传文件的命名规则
  }
})
const upload = multer({ storage })

// 处理全局异常
/*
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const httpStatus = error.httpStatusCode || 500;
  res.status(httpStatus).json({message: error.message})
  next()
}) */

// 允许跨域请求
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:8080', 'http://localhost:8000'],
  credentials: true
}))

app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json({ limit: '10mb' }))

app.use(session({
  secret: 'your-secret-key', // 替换为您自己的秘密密钥
  resave: false,
  saveUninitialized: true
}))

const router = express.Router()

// 将 "uploads" 目录下的资源公开为静态文件
router.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// 上传文件
router.post('/files/upload', checkLogin, upload.single('file'), files.upload)

/*
// 路由定义，get 方法，路径为根目录路径（'/'），回调函数是打印通过 res.send 输出 Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 练习1 方法1
app.get('/works', works.getWorks)
app.post('/works', works.createWork)
app.get('/works/:id', works.getWorkById)
app.put('/works/:id', works.updateWork)
app.delete('/works/:id', works.deleteWork)
*/

/* 练习2 方法2
app.use('/birds', birds) */

// app.get('/works', checkLogin, works.getWorks)
router.get('/works/pages', works.getWorksByPages)
router.get('/works/:id', works.getWorkById)

router.post('/works', checkLogin, works.createWork)
router.put('/works/:id', checkLogin, works.updateWork)

// 点赞
router.put('/works/:id/like', works.like)

// 登陆
router.post('/users/login', users.login)
router.post('/users/logout', checkLogin, users.logout)
router.get('/users/currentUser', checkLogin, users.currentUser)

router.post('/users', users.createOne)
router.get('/users', checkLogin, users.getAll)
router.get('/users/:id', checkLogin, users.getOneById)
router.put('/users/:id', checkLogin, users.updateOneById)
router.delete('/users/:id', checkLogin, users.deleteOneById)

app.use('/backend', router)

// 处理未定义接口
app.use((req, res) => {
  res.status(404).json({message: `接口未定义: ${req.originalUrl}`})
})

// 处理全局异常 写在所有路由定义的后面
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const httpStatus = error.httpStatusCode || 500;
  res.status(httpStatus).json({message: error.message});
  next();
});

app.listen(3000, () => {
  console.log('示例应用正在监听 3000 端口 !')
})

/*

// 导入 Express 模块，并创建了一个 Express 应用
import express, { type NextFunction, type Request, type Response } from 'express'
import * as works from './controllers/works'
import cors from 'cors'
const app = express()

// 允许跨域请求
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:8080']
}))

app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json({ limit: '10mb' }))

// 定义中间件
const handleLog = function (req: Request, res: Response, next: NextFunction): void {
  console.log('There is a requesting.')
  next()
}

// 使用中间件
app.use(handleLog)

// 路由定义，get 方法，路径为根目录路径（'/'），回调函数是打印通过 res.send 输出 Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/zoos/:id/animals/:animalId', function (req, res) {
  console.log(req.params) // { id: '1', animalId: '62' }
  res.send(`id:${req.params.id}; animalId:${req.params.animalId}`)
})

app.get('/works', works.getWorks)
app.get('/works/pages', handleLog, works.getWorksByPages)
app.post('/works', works.createWork)
app.get('/works/:id', works.getWorkById)

// 在3000端口启动服务器
app.listen(3000, () => {
  console.log('示例应用正在监听 3000 端口 !')
})
*/
