module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      gitrepo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      deployedapp:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      }
    //   timestamps: {
    //     timestamps: false
    // }
    });
    return Project;
  };
  