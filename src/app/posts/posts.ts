import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../services/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [CommonModule,FormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {

  posts: any[] = []; 
  showform=false

  newpost={
    title:'',
    body:''
  }
  constructor(private postService: Post) {} 

  ngOnInit(): void {
    this.fetchpost();
  }

  fetchpost() {
    this.postService.getPosts().subscribe(data => {
      this.posts=data
    });
  }

  openform(){
    this.showform=true

}

submit(){
  this.postService.addPost(this.newpost).subscribe(response=>{
    this.posts.push(response)
    this.newpost={title:'',body:''}
    this.showform=false
  })
}


}