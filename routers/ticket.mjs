import { Router, json } from "express";
import { ticketPublic } from "../models/view.mjs";
import {validarTicket} from "../schemas/ticketSchema.mjs"

export const publicRouter = Router();


publicRouter.get('/', async(req,res)=>{
  res.header('Access-Controll-Allow-Origin', '*');
  //todo este metodo hay que encapsularlo
   const sedeJSON = await ticketPublic.getSedes();
   const servicioJSON = await ticketPublic.getServicio ();
   const areaJSON = await ticketPublic.getAreas()
    const jsons = {
      sedeJSON,
      servicioJSON,
      areaJSON
    }
   
   res.json(jsons)
})

publicRouter.post('/' , async (req, res)=>{
  
  const result = validarTicket(req.body);
  if(result.error){
    res.status(400).end('Bad request')
  }else{
    const postJSON = await ticketPublic.postTicket(result.data);
    res.status(201).end('ok');
  }

})