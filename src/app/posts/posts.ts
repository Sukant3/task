import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../services/post';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {

  posts: any[] = []; 

  constructor(private postService: Post) {} 

  ngOnInit(): void {
    this.fetchpost();
  }

  fetchpost() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data
    });
  }

}

