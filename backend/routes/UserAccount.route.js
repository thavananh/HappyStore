import { Router } from 'express'
import { checkSchema, matchedData, query, validationResult } from 'express-validator'
import {mockUsers} from './constant.js'
import { createUserValidationSchema } from '../ultis/validationSchema.js'
import {resolveIndexByUserId, loggingMiddleWare} from '../middleware/middleware.js'
import userModel from '../models/UserAccount.model.js'
import {hashPassword} from '../strategies/helper.js'

const router = Router()

router.get('/api/users',
    query('filter')
        .isString()
        .notEmpty()
        .isLength({
            min: 3,
            max: 10,
        })
        .withMessage('Must be at least 3-10 char'),
    (req, res) => {
        req.sessionStore.get(req.session.id, (err, sessionData) => {
            if (err) {
                console.log(err)
                throw err
            }
            console.log(sessionData)
        })

        const {
            query: { filter, value },
        } = req
        if (filter && value)
            return res.send(mockUsers.filter((user) => user[filter].includes(value)))
        return res.send(mockUsers)
    },
)
//
// vue_router.get('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
//     const { findUserIndex } = req
//     return res.send(mockUsers[findUserIndex])
// })
//
// vue_router.post(
//     '/api/users',
//     checkSchema(createUserValidationSchema),
//     loggingMiddleWare,
//     (req, res) => {
//         const result = validationResult(req)
//         console.log(result)
//         if (!result.isEmpty()) return res.status(404).send({ errors: result.array() })
//         const data = matchedData(req)
//         const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data }
//         mockUsers.push(newUser)
//         return res.status(201).send(newUser)
//     },
// )
//
//
//
// vue_router.put('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
//     const { body, findUserIndex } = req
//     mockUsers[findUserIndex] = { findUserIndex, ...body }
//     return res.sendStatus(200)
// })
//
// vue_router.patch('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
//     const { body, findUserIndex } = req
//     mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body }
//     return res.sendStatus(200)
// })
//
// vue_router.delete('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
//     const { findUserIndex } = req
//     mockUsers.splice(findUserIndex, 1)
//     return res.sendStatus(200)
// })



router.post('/api/users', checkSchema(createUserValidationSchema), async (req, res) => {
    const result = validationResult(req)

    if (!result.isEmpty()) return res.status(404).send({ errors: result.array() })
    const data = matchedData(req)
    console.log(data.password)
    data.password = hashPassword(data.password)
    try {
        const newUser = await userModel.create(data)
        console.log(`Create new user successfully`)
        return res.status(201).send(newUser)
    }
    catch (err) {
        console.log(`Error while creating new Users ${err}`)
        return res.sendStatus(400)
    }
})

export async function getUser(username){
    try {
        const findUser = await userModel.findOne({
            where: { username }
        })
        if (!findUser) throw new Error('User not found');
        return findUser
    }
    catch (err) {
        console.log(`Error while getting users ${err}`)
        return null
    }
}



export default router
