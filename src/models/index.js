const Sequelize = require("sequelize");
const UserModel = require('./user');
const HashtagModel = require('./hashtag');

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: 'postgres',
    logging: false,
    define: { timestamps: false },
  });

  const User = UserModel(connection, Sequelize);
  const Hashtag = HashtagModel(connection, Sequelize);

  User.hasMany(Hashtag, {
    foreignKey: {
        allowNull: false,
    }
  });

  connection.sync({ alter: true });
  return { User, Hashtag };
};

module.exports = setupDatabase();