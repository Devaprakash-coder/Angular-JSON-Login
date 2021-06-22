import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {
  uname: any;
  myPosts: any[] = [];
  editing: any = {};
  title = '';
  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {

    this.uname = localStorage.getItem("uname")
    this.apiService.myPost(this.uname).subscribe((data => {
      data.forEach((element: any) => {
        console.log('elementt', element.author);
        if (element.author === this.uname) {
          this.myPosts.push(element);
        }
      });

    }))
  }

  update() {
    if (this.title == '') {
      alert("Enter value")
    } else {
      this.apiService.editdata(this.editing._id, { title: this.title, author: this.editing.author }).subscribe(data => {
        this.title = "";
        this.editing = {};
        this.ngOnInit();
      })
    }
  }

  editdata(post: any) {
    this.editing = post;
    this.title = post.title;
  }

  deletedata(id: number) {
    this.apiService.deletedata(id).subscribe(() => {
      this.ngOnInit();
    })
  }
}
