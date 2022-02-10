import  Sequelize  from 'sequelize';

const db = new Sequelize('agencia','root','AQZAswxsDECD123!',{
    host:'127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases: false
})

export default db
/* import  Sequelize  from 'sequelize'; 

const db = new Sequelize(process.env.BD_NOMBRE,
    process.env.BD_USER,
    process.env.BD_PASS,{
    host: process.env.BD_HOST ,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases: false
})

export default db */