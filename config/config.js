module.exports = function (env) {
  var config = {
    "development": {
      "username": "root",
      "password": "root",
      "database": "calendar_db",
      "port": 8889,
      "host": "localhost",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": process.env.DB_PASS,
      "database": "calendar_db",
      "host": "localhost",
      "dialect": "mysql",
      "logging": false
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }
  return config[env];
}