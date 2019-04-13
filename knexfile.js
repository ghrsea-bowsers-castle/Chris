module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'database',
      port: '3306',
      user: 'root',
      password: 'password',
      database: 'reviews'
    },
    migrations: {
      directory: __dirname + `/migrations`
    },
    seeds: {
      directory: __dirname + `/seeds`
    }
  }
}