module.exports = {
       //mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
       mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
       google: {
              clientID: '505024346753-r8gf74affu3c3rjfe31lloivn9r5nded.apps.googleusercontent.com',
              clientSecret: 'UMBes4Zv0bHjgXgARwR6Xkny',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }

}