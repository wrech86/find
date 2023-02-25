const Router = require('koa-router')
const useDb = require('../../mysql/db')
const router = new Router();

router.get('/home', async (ctx, next) => {
    let swiper = await useDb('SELECT * FROM test.home where id between 1 and 4 ')
    let classify = await useDb('SELECT * FROM test.home where id between 5 and 8 ')
    ctx.body = {
        swiper,
        classify
    }
})
router.get('/home/findContent', async (ctx) => {
    let res = await useDb(`SELECT * FROM test.findnew where flag = '${ctx.query.flag}'`)
    ctx.body = res
})
router.post('/home/find', async (ctx) => {
    let page
    if (typeof (ctx.request.body.page) == 'number') {
        page = ctx.request.body.page
    } else {
        page = ctx.request.body.page._value
    }
    let num = 4
    let start = num * (page - 1) + 1
    let end = num * page
    let res = await useDb(`SELECT * FROM test.findnew where flag between '${start}' and '${end}'`)
    ctx.body = res
})
router.post('/home/classify/content', async (ctx) => {
    let res = await useDb(`SELECT * FROM test.${ctx.request.body.kind}`)
    let one = res.slice(0, 5)
    let two = res.slice(5, 10)
    let three = res.slice(10, 15)
    let four = res.slice(15, 20)
    ctx.body = {
        one,
        two,
        three,
        four
    }
})
router.get('/home/classify/kind/text',async (ctx)=>{
    let key = ctx.request.query.key
    let flag = ctx.request.query.flag
    let res = await useDb(`SELECT * FROM test.${key} WHERE flag = '${flag}'`)
    ctx.body = res
})
module.exports = router;
