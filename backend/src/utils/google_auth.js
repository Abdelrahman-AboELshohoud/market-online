import passport from "passport";

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/UserSchema.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      // passReqToCallback: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("ewaedawd");
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        console.log(error);
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    console.log(error);
    done(error, null);
  }
});

export default passport;
