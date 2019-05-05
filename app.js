const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const router = require('./routers/router')
const logger = require('koa-logger')
const {join} = require('path')


const app = new Koa
app.use(logger())
app.use(static(join(__dirname,'public')))
app.use(views(join(__dirname, 'views'),{
    extension: 'pug'
}))

app.use(router.routes()).use(router.allowedMethods())


app.listen(3000,()=>{
    
    console.log('项目启动成功，端口 3000')
})