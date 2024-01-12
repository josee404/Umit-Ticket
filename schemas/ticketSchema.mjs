import zod from 'zod';

const ticketSchema = zod.object({
  SOLICITANTE: zod.string({
     invalid_type_error: "solicitante no es un string"
  }),
  CARGO: zod.string({
    invalid_type_error: "cargo no es un string"
  }),
  SEDE: zod.number({
    invalid_type_error: "sede no es un numero"
  }),
  SERVICIO: zod.number({
    invalid_type_error: "servicio no es un numero"
  }),
  UBICACION: zod.string({
    invalid_type_error: "Ubicacion no es un string"
  }), 
  AREA: zod.number({
    invalid_type_error: "Area no es un numero"
  }),
  PRIORIDAD: zod.string({
    invalid_type_error: "Prioridad no es un string"
  }),
  DESCRIPCION: zod.string({
    invalid_type_error: "Descripcion no es un string"
  })
}
)

export function validarTicket(object){
  return ticketSchema.safeParse(object);
}

