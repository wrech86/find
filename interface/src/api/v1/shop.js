const Router = require('koa-router')
const useDb = require('../../mysql/db')
const router = new Router();
 
router.get('/shop',async (ctx, next) => {
    let res = await useDb('SELECT * FROM test.commodity')
    let left = res.slice(0,4)
    let right = res.slice(4,8)
    let all = res
    ctx.body = {
        all,
        left,
        right
    }
})
router.get('/shop/shopContent', async (ctx)=>{
    let iid = ctx.request.query.iid
    let res = await useDb(`SELECT * FROM test.commodity WHERE iid = '${iid}'`)
    ctx.body = res
})
 
module.exports = router;
