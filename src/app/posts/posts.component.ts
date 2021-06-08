import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  options: any[] = [];
  edited: any = '';
  activeData: any = {};
  uname: any;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.uname = localStorage.getItem("uname");
    this.apiService.getdata().subscribe((res) => {
      this.options = res;
    });
  }

  postdata() {
    if (this.activeData.id) {
      this.apiService.editdata(this.activeData.id, { title: this.edited, author: this.activeData.author }).subscribe(data => {
        this.edited = "";
        this.activeData = {};
        this.ngOnInit();
      })
    } else {
      this.apiService.postdata({ title: this.edited, author: this.uname }).subscribe(data => {
        this.edited = "";
        this.ngOnInit();
      })
    }
  }

  editdata(data: any) {
    this.activeData = data;
    this.edited = data.title;
  }

  deletedata(id: number) {
    this.apiService.deletedata(id).subscribe(() => {
      this.ngOnInit();
    })
  }
}
