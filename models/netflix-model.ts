import { FilmsComponent } from "../films/films.component";
import { HeroComponent } from "../hero/hero.component";

export interface NetflixModel {
    nav:Nav;
    hero:Hero;
    films:Films;
    filmsTwo:FilmsTwo;
   

}
export interface Nav{
    logo:Img;
    name:string;
    inicio:string;
    search:string;
}
export interface Hero{
    title:string;
    fotos:Img[];
}
export interface Films{
    title:string;
    fotos:Img[];
    

}
export interface Img{
    src:string;
    alt:string;
}

export interface FilmsTwo{
    title:string;
    fotos:Img[];

}



