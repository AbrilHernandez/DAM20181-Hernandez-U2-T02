//funciones de agregar, borrar, imprimir, modificar

export interface Alumno{
     control_num:string;
     name:string;
     lastname:string;
     average:number;
     gender:string;
     birthdate:string;
     active:boolean;
    // alumno = Array<Alumno>();
}

    export class student{
     private alumno = Array<Alumno>();
    student(no_control:string, nombre:string, apellido:string, promedio:number, genero:string, fecha:string, activo:boolean):Alumno{
        let alu={
        control_num: no_control,
        name: nombre,
        lastname: apellido,
        average: promedio,
        gender: genero,
        birthdate: fecha,
        active: activo,
        };
        return alu;
    }

    //método de agregar
      addAlumn():void{
         let newStudent:any;
         
    newStudent={
     control_num:`13400430`,
     name: `abril`,
     lastname: `hernandez`,
     average: 85,
     gender: `femenino`,
     birthdate: `1995/4/21`,
     active: true
    };
    this.alumno.push(newStudent)
    this.printAlumn();
 }

     //método de borrar
     dropAlumn(no_control:string):void{
         let pos;
       this.alumno.forEach(control => {
           if(control.control_num==no_control){
           pos = this.alumno.indexOf(control)
            this.alumno.splice(pos,1);
           }
       });
       this.printAlumn();
    }

    //método de imprimir
       printAlumn():void{
         this.alumno.forEach(elemento => {
             console.log(elemento);
         });
     }
    //método de modificar
      modifyAlumn(no_control:string, nombre:string, apellido:string, promedio:number, genero:string, fecha:string, activo:boolean):void{
      let pos;
        this.alumno.forEach(control => {
            if(control.control_num==no_control){
            pos = this.alumno.indexOf(control)
             this.alumno.splice(pos,1);
            }
        });
        this.printAlumn();
     }

     

}