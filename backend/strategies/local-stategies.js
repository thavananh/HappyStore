import passport from 'passport'
import {Strategy} from 'passport-local'

passport.serializeUser((user, done) => {
    console.log("Inside serializeUser")
    done(null, user)
})

passport.deserializeUser((user, done) => {

})

export default passport.use(
    new Strategy(async (username, password, done) => {

    })
)
