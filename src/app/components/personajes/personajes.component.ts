import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NumberValueAccessor } from '@angular/forms';
import { Personaje } from 'src/app/models/personaje';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  nper:boolean;
  personajes: Personaje[] = [];
  personaje: Personaje =  {
                            _id: '',
                            title: '',
                            body: '',
                            image:  '',
                            category: '',
                            createdAt: '',
                            updatedAt: '' 
                          };

                          
  personajeForm:FormGroup = new FormGroup({});
  formBuilder:FormBuilder = new FormBuilder();

  constructor(private servicio: MarvelService) {
    this.nper = false;
   }

  ngOnInit(): void {
    this.servicio.getPersonajes().subscribe((personajes:Personaje [])=>{
      this.personajes = personajes;

    console.log(personajes);
  });

  this.personajeForm = this.formBuilder.group({
    _id: [''],
    title: [''],
    body: [''],
    image: [''],
    category: [''],
    createdAt: [''],
    updatedAt:['']
    });
  }

  nuevo()
  {
    this.nper = false;
  }
  addPersonaje(){
    this.personaje = this.personajeForm.getRawValue();
    this.servicio.postPersonaje(this.personaje).subscribe((nuevoPersonaje:Personaje) => 
      this.personajes.push(nuevoPersonaje));
  }

  editPersonaje(personaje:Personaje){
    this.personaje.title =personaje.title;
    this.personaje.body =personaje.body;
    this.personaje.image =personaje.image;
    this.servicio.postPersonaje(this.personaje).subscribe((nuevoPersonaje:Personaje) => 
      this.personajes.push(nuevoPersonaje));
  }

  deletePersonaje(personaje:Personaje){
    let id:(string | undefined) = personaje._id;
     this.servicio.deletePersonaje(id).subscribe(statusObj => {
       if(statusObj.status){
         let personajeToRemove = this.personajes.filter(c=> c._id === id)[0];
         let index = this.personajes.indexOf(personajeToRemove);
         this.personajes.splice(index,1);
       }
     })
  }

}
