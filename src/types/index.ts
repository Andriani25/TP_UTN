// El id sera el DNI del usuario, para confirmar como dato unico por cada uno

export interface User {
    name: string,
    email: string,
    cellPhone: number,
    id: string
}

export interface Game {
   name: string,
   genere: string,
   developers: string,
   rating: number
}