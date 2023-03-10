module.exports = (connection, DataTypes) => {
    const schema = {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 10,
            msg: 'Please provide the user ID'
          },
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 2,
            msg: 'Please enter title',
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: 2,
            msg: 'Please enter category',
          },
        },
      },
      hashtags: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
              args: [true],
              msg: 'hashtag is required',
            },
            notEmpty: {
              args: [true],
              msg: 'hashtag cannot be empty',
            },
          },
      },
    };
  
    const HashtagModel = connection.define('Hashtag', schema);
    return HashtagModel;
  };
  