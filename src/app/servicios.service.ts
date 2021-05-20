import { Injectable } from '@angular/core';
import { Post } from 'src/app/interface/post.interface'

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      {
        titulo: 'Post 1',
        texto: 'Texto 1',
        autor: 'Autor 1',
        imagen: 'Imagen 1',
        fecha: '01/01/01',
        categoria: 'Categoría 1'
      },
      {
        titulo: 'Post 2',
        texto: 'Texto 2',
        autor: 'Autor 2',
        imagen: 'Imagen 2',
        fecha: '02/02/02',
        categoria: 'Categoría 2'
      },
      {
        titulo: 'Post 3',
        texto: 'Texto 3',
        autor: 'Autor 3',
        imagen: 'Imagen 3',
        fecha: '03/03/03',
        categoria: 'Categoría 3'
      }
    ];
  }

  addPosts(pNewPost: Post) {
    this.arrPosts.push(pNewPost);
  }

  getAllPosts() {
    return this.arrPosts;
  }

  getPostsByCategory(pCategory: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === pCategory);

  }

}
