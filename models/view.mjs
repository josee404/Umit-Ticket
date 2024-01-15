import crypto from 'node:crypto';
import { db } from "../database/db.mjs"
import { date } from 'zod';

export class ticketPublic {
   static async getSedes(){
      const [sede] = await db.query(
         'select * from sede'
       )
      return sede;
   }

   static async getAreas(){
      const [area] = await db.query(
         'select * from area'
       )
      return area;
   }

   static async getServicio(){
      const [servicio] = await db.query(
         'select * from servicio'
       )
      return servicio;
   }

   static async postTicket(input) {
      const date = new Date();
      const FECHA = date.toLocaleDateString();
      const HORA = `${date.getHours()}:${date.getMinutes()}`;
      const ID_TICKET = Math.round(Math.random() * 1000);
    
      const {
        SOLICITANTE,
        CARGO,
        SEDE,
        SERVICIO,
        UBICACION,
        AREA,
        PRIORIDAD,
        DESCRIPCION,
      } = input;
    
      const newTicket = {
        ID_TICKET,
        SOLICITANTE,
        CARGO,
        SEDE,
        SERVICIO,
        UBICACION,
        AREA,
        PRIORIDAD,
        DESCRIPCION,
        ESTADO: 'Abierto',
        ETIQUETA: 1,
        FECHA,
        HORA,
      };
    
      try {
        const ticket = await db.query(
          `INSERT INTO tickets (id_ticket,solicitante,cargo,id_sede,id_serv,id_etiq,id_area,prioridad,descrip,fecha,hora,estado)
           VALUES(?,?,?,?,?,?,?,?,?,?,?,?);`,
          [
            newTicket.ID_TICKET,
            newTicket.SOLICITANTE,
            newTicket.CARGO,
            newTicket.SEDE,
            newTicket.SERVICIO,
            newTicket.ETIQUETA,
            newTicket.AREA,
            newTicket.PRIORIDAD,
            newTicket.DESCRIPCION,
            newTicket.FECHA,
            newTicket.HORA,
            newTicket.ESTADO,
          ]
        );
        console.log(ticket);
      } catch (error) {
        // Manejar el error aquí
        console.error(error);
      }
    }

}