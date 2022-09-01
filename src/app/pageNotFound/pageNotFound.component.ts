import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageNotFound',
  templateUrl: './pageNotFound.component.html',
  styleUrls: ['./pageNotFound.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Page Not Found';
  }

  ngOnInit(): void {}
}
