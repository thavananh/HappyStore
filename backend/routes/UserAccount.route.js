import { Router } from 'express'
import { checkSchema, matchedData, query, validationResult } from 'express-validator'
import {mockUsers} from './constant.js'
import { createUserValidationSchema } from '../ultis/validationSchema.js'
import {resolveIndexByUserId, loggingMiddleWare} from '../middleware/middleware.js'



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
        const result = validationResult(req)
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

router.get('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
    const { findUserIndex } = req
    return res.send(mockUsers[findUserIndex])
})

router.post(
    '/api/users',
    checkSchema(createUserValidationSchema),
    loggingMiddleWare,
    (req, res) => {
        const result = validationResult(req)
        console.log(result)
        if (!result.isEmpty()) return res.status(404).send({ errors: result.array() })
        const data = matchedData(req)
        const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data }
        mockUsers.push(newUser)
        return res.status(201).send(newUser)
    },
)



router.put('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
    const { body, findUserIndex } = req
    mockUsers[findUserIndex] = { findUserIndex, ...body }
    return res.sendStatus(200)
})

router.patch('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
    const { body, findUserIndex } = req
    mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body }
    return res.sendStatus(200)
})

router.delete('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
    const { findUserIndex } = req
    mockUsers.splice(findUserIndex, 1)
    return res.sendStatus(200)
})


export default router
