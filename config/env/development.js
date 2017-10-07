module.exports = {
       //mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
       mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
       google: {
              clientID: '947692126171-dul0p3op18eiaceencmh57ki6h2rthhf.apps.googleusercontent.com',
              clientSecret: 'cdOK4s3M9kxu8U4jsoIILNrB',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }

}