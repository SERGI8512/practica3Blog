import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post.interface';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  newPosts: Post;

  constructor(private serviciosService: ServiciosService) {
    this.newPosts = {
      titulo: '',
      texto: '',
      autor: '',
      imagen: '',
      fecha: '',
      categoria: ''
    };
  }

  ngOnInit(): void {
  }

  /*  onClick(pNewPost) {
     this.newPosts = this.serviciosService.addPosts(pNewPost)
   } */

}
