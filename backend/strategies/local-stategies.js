import passport from 'passport'
import {Strategy} from 'passport-local'
import { getUser } from '../routes/UserAccount.route.js'
import {comparePassword} from './helper.js'

passport.serializeUser((user, done) => {
    console.log("Inside serializeUser")
    done(null, user)
})

passport.deserializeUser((user, done) => {
    console.log("Inside deserializeUser")
    try {
        console.log("Deserialize User")
        if (!user) throw new Error('User not found')
        done(null, user)
    } catch (err) {
        console.log(`Có lỗi ở DeserializeUser: ${err}`)
        console.log(`In ra giá trị User ${user}`)
        done(err, null)
    }
})

export default passport.use(
    new Strategy(async (username, password, done) => {
        try {
            const findUser = await getUser(username)
            console.log(findUser)
            if (!findUser) throw new Error('User not found')
            if (findUser.username !== username || comparePassword(findUser.password, password)) throw new Error('BAD CREDENTIALS')
            done(null, findUser)
        } catch (err) {
            done(err, null)
        }
    })
)
