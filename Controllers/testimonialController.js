import { Testimonial } from "../Model/Testimonial_model.js";

const saveTestimoniales = async (req,res)=>{

    //validacion
    const {name, mail, msg} = req.body;
    const errores =[];

    if(name.trim()===''){
        errores.push({msg : 'EL nombre esta vacio'})
    }
    if(mail.trim()===''){
        errores.push({msg:'EL correo esta vacio'})
    }
    if(msg.trim()===''){
        errores.push({msg:'EL mensaje esta vacio'})
    }

    if(errores.length>0){

        //consultar testimonial existente
        const testimoniales= await Testimonial.findAll();

        //mostrar la vista con errores
        res.render('testimoniales',{
            pagina:'Testimoniales',
            errores,
            name, 
            mail, 
            msg,
            testimoniales,
        })
    }else{
        //almacenar en la db
        try {
            await Testimonial.create({
                name,
                mail,
                msg
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    saveTestimoniales,    
}