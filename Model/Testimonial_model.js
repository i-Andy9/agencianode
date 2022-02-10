import Sequelize from 'sequelize';
import db from '../Config/dbConfig.js';

export const Testimonial =db.define('testimoniales', {
    name:{
        type:Sequelize.STRING
    },
    mail:{
        type:Sequelize.STRING
    },
    msg:{
        type:Sequelize.STRING
    },
     
});
