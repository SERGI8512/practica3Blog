import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post.interface';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  categorias: string[];

  constructor(private serviciosService: ServiciosService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.posts = this.serviciosService.getAllPosts()
  }

  onChange($event: any) {
    if ($event.target.value === 'Todas') {
      this.posts = this.serviciosService.getAllPosts();
    } else {
      this.posts = this.serviciosService.getPostsByCategory($event.target.value);
    }

  }

}
