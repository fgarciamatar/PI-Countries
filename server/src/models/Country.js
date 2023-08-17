const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true
    },
    nombre:{
      type: DataTypes.STRING,
      allowNUll: false,
      unique: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue:"Sin Capital",
      allowNull: false,
    },
    subRegion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.FLOAT,
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {timestamps: false}
  );
};

// ID (Código de tres letras). *
// Nombre. *
// Imagen de la bandera. *
// Continente. *
// Capital. *
// Subregión.
// Área.
// Población. *