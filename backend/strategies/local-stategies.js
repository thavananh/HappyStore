import passport from 'passport'

import {Strategy} from 'passport-local'
import { mockUsers } from '../routes/constant.js'

passport.serializeUser((user, done) => {
    done(null, user.id)
})

export default passport.use(
    new Strategy((username, password, done) => {
        try {
            console.log(`username: ${username}`)
            console.log(`password: ${password}`)
            const findUser = mockUsers.find((user) => user.username === username)
            if (!findUser) {
                throw new Error('User not found')
            }
            if (findUser.password !== password) {
                throw new Error('Invalid Credentials')
            }
            done(null, findUser)
        }
        catch (err) {
            done(err, null)
        }

    })
)
