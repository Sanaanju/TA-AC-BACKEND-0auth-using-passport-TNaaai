var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;

passport.use(new GithubStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL: '/auth/github/callback'}, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
    
}))