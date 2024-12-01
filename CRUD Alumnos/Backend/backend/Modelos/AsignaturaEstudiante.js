

const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')
const Estudiante = require('../Modelos/Estudiante')
const Asignatura = require('../Modelos/Asignatura')

const AsignaturaEstudiante = sequelize.define('AsignaturaEstudiante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idestudiante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Estudiante',
            key: 'idestudiante'
        }
    },
    idasignatura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Asignatura',
            key: 'idasignatura'
        }


    }
},
    {
        tableName: 'AsignaturaEstudiante',
        timestamps: false
    }
)
AsignaturaEstudiante.belongsTo(Estudiante, { foreignKey: 'idestudiante' });
AsignaturaEstudiante.belongsTo(Asignatura, { foreignKey: 'idasignatura' });

module.exports= AsignaturaEstudiante;