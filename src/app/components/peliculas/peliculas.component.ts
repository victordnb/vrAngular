import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{
  
  public titulo: string;
  public listadoPeliculas: string[];

  constructor() {
    this.titulo = "Componente Peliculas";
    this.listadoPeliculas = ["Spiderman", "Los Vengadores", "Batman", "Superman", "DBZ", "Naruto"];
    console.log("constructor Lanzado!!")
  }

  ngOnInit(){
    console.log("Componente Peliculas Cargado!!");
  }

  ngDoCheck(){
    console.log("DoCheck Lanzado");
  }

  cambiarTitulo(){
    
    let nuevoTitulo: string;
    
    //ramdon position listadoPeliculas:
    let ramdon = Math.floor(Math.random() * this.listadoPeliculas.length);
    nuevoTitulo = this.listadoPeliculas[ramdon];

    this.titulo = nuevoTitulo;    

  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar");
  }

}
