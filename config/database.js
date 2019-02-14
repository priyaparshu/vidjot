if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://priya:priya1@ds037478.mlab.com:37478/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}