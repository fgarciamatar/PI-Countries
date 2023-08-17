const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre:{
      type: DataTypes.STRING,
      allowNUll: false,
      unique: true
    },
    dificultad: {
      type: DataTypes.INTEGER,
      validate:{min:1,max:5},
      allowNull: false
    },
    duracion:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    temporada:{
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
    allowNull: false
    },
    countries:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
    },
  },
  {timestamps: false}
  );
};

// ID. *
// Nombre. *
// Dificultad (número del 1 al 5). *
// Duración (en horas).
// Temporada (Verano, Otoño, Invierno o Primavera). *