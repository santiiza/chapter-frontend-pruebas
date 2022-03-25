import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../models/personaje';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  //private urlWebService = "https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1"
/*
  private personajes: Personaje[]=
  [
    { 
      _id: "623bb12b12979d2c2b04aad5",
      title: "Captain America",
      body: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
      image:  "https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg",
      category: "main",
      createdAt: "2022-03-03T01:37:01.828Z",
      updatedAt: "2022-03-03T01:37:01.828Z" 
    },    
    { 
      _id: "623bb12b12979d2c2b04aa8f",
      title: "Iron Man",
      body: "Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
      image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg",
      category: "main",
      createdAt: "2022-03-03T01:37:01.828Z",
      updatedAt: "2022-03-03T01:37:01.828Z" 
    }
  ];

  private aux:Personaje[];
*/
  constructor(private http: HttpClient) { }

  getPersonajes():Observable<Personaje []>{
      return this.http.get<Personaje []>('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1');
  }

  postPersonaje(personaje:Personaje):Observable<Personaje> {
    return this.http.post<Personaje>('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1',personaje);
  }

  updatePersonaje(id:(string | undefined), personaje:Personaje):Observable<any>{
    return this.http.post(`http://bp-marvel-api.herokuapp.com/${id}?idAuthor=2`, personaje);    
  }

  deletePersonaje(id:(string | undefined) ):Observable<any>{
    return this.http.delete(`http://bp-marvel-api.herokuapp.com/${id}?idAuthor=2`);    
  }

  /*
  http://bp-marvel-api.herokuapp.com/:id?idAuthor=2

  constructor() {
    console.log ("Se creo");
   }

  getAux(idx: number){
    return this.aux[idx];
  }

  setAux(aux: Personaje[]){
    this.aux = aux;
  }

  getPersonajes(): Personaje[]{
    return this.personajes
  } 

  getPersonaje(idx: number){
    return this.personajes[idx];
  }  
  
  buscarPersonaje(valor: string)
  {
    let personajeAux: Personaje[]=[];
    valor=valor.toLowerCase();
    for(let personaje of this.personajes){
      let nombre = personaje.title.toLocaleLowerCase();
      if (nombre.indexOf(valor)>=0){
        personajeAux.push(personaje)
      }
    }
    return personajeAux;
  }
  */
}
