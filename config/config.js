module.exports = function (env) {
  var config = {
    "development": {
      "username": "root",
      "password": "",
      "database": "calendar_db",
      "host": "localhost",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "",
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