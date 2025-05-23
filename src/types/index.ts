// El id sera el email del usuario, para confirmar como dato unico por cada uno

export interface User {
    name: string,
    email: string,
    cellPhone: number,
    password: string
}

export interface Game {
   name: string,
   genere: string,
   developers: string,
   rating: number
}

import "express";

declare module "express-serve-static-core" {
  interface Request {
    session?: {
      userName: string | null;
    };
  }
}
