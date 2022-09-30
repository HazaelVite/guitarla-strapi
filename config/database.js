module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '51.81.107.178'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'wkhxnefv_guitarla'),
      user: env('DATABASE_USERNAME', 'wkhxnefv_guitarla'),
      password: env('DATABASE_PASSWORD', 'V7OBmt+^ghW?i=9S#p'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
