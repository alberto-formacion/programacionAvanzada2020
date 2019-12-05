export class Alumno {
    constructor(public nombre: string,
                public apellidos: string,
                public email: string,
                public telefono: string,
                public cursos: Array<string>) {}
}
