module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'nodeAmive',
            dialect: 'mysql',
            user: 'root',
            password: ''
        }
    },
    production: {
        database: {
            host: 'sql540.main-hosting.eu',
            name: 'u647084545_testes',
            dialect: 'mysql',
            user: 'u647084545_testes',
            password: 'Y6h~a3T=yn'
            //port: process.env.DB_PORT
        }
    }
}

            