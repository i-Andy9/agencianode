import express from "express";
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje} from "../Controllers/paginasController.js";
import { saveTestimoniales } from "../Controllers/testimonialController.js";



const router = express.Router()

router.get('/', paginaInicio);

router.get('/nosotros',paginaNosotros);

router.get('/viajes',paginaViajes);

router.get('/viajes/:slug',paginaDetalleViaje);

router.get('/testimoniales',paginaTestimoniales);

router.post('/testimoniales',saveTestimoniales);

export default router