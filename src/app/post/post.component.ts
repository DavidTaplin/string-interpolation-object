import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   person = {
    firstname:"Daivd",
    lastname:"Taplin",


  };




  constructor() {





  }

  ngOnInit(): void {
  }

}
