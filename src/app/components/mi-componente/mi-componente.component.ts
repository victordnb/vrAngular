import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente', //esta es la etiqueta o selector que cargaremos en la vista.
    //template: // Si metes aqui el codigo html... -Vistas - es ijmportante usar las comillas invertidas 
    //`` 
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;
    public tituloBoton: string;

    constructor(){

        this.titulo = "Preacticando Angular";
        this.comentario = "Para un nuevo puesto de trabajo";
        this.year = 2023;
        this.mostrarPeliculas = true;
        this.tituloBoton = "Ocultar Peliculas";
        
        console.log("Componente mi-componente cargado!");
    }

    ocultarPeliculas(){
        if(this.mostrarPeliculas){
            this.mostrarPeliculas = false;
            this.tituloBoton = "Mostrar Peliculas";
        }else{
            this.mostrarPeliculas = true;
            this.tituloBoton = "Ocultar Peliculas";
        }
    }
   

}