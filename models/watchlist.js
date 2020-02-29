module.exports = function (sequelize, DataTypes) {
    let Watchlist = sequelize.define("Watchlist", {
        ticker: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        }
    });
    // ADD ASSOCIATIONS HERE
    Watchlist.associate = function (models) {
        Watchlist.belongsTo(models.Group, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Watchlist;
}