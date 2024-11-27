import { Router } from 'express'

const router = new Router()

router.get('/api/products', (req, res) => {
    console.log(req.headers.cookies)
    console.log(req.cookies)
    console.log(req.signedCookies)
    if (req.signedCookies.hello && req.signedCookies.hello === "world") {
        return res.send([{ id: 123, name: 'Chicken breast', price: '12,99' }])
    } else {
        return res.send({msg: "You need a right cookie"})
    }
})

export default router
