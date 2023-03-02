module.exports = (connection, DataTypes) => {
    const schema = {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: 8,
            msg: 'Password must have at least 8 characters, please re-enter.',
          },
        },
      },
    };
  
    const UserModel = connection.define('User', schema);
    return UserModel;
  };
  