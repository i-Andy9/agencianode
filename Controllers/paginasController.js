import { Viaje } from "../Model/Viaje_model.js";


const paginaInicio = (req,res) =>{
    res.render('inicio',{
        pagina:'Inicio'
    });
}

const paginaNosotros = (req,res)=>{  // req - lo que enviamos : res - lo que express nos responde
    res.render('nosotros',{
        pagina:'Nosotros'
    });
}
 

const paginaViajes = async (req,res)=>{  // req - lo que enviamos : res - lo que express nos responde
    //acces to db
    const viajes = await Viaje.findAll()

    //console.log(viajes);
    
    res.render('viajes',{
        pagina:'Proximos Viajes',
        viajes,
    });
};

// muestra pagina detalle vijae por slug 
const paginaDetalleViaje= async (req,res)=>{   
     
    const {slug} = req.params

    try{
        const viaje = await Viaje.findOne({
            where:{
               slug 
            }
        })

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje,
        })
    }catch (e){
        console.log(e);
    }
};

const paginaTestimoniales=(req,res)=>{  // req - lo que enviamos : res - lo que express nos responde
    res.render('testimoniales',{
        pagina:'Testimoniales'
    });
};


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
}