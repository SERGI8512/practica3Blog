import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  newPosts: FormGroup;

  constructor(private serviciosService: ServiciosService) {
    this.newPosts = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      autor: new FormControl(''),
      imagen: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let newArray = this.serviciosService.addPosts(this.newPosts.value)
    console.log(newArray)
  }

}
