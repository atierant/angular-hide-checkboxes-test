import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows = [];
  columns = []
  selected = [];

  pageNumber = 1;
  size = 10;
  totalPages = 1;
  totalElements = 10;

  checkboxable: boolean = false;

  constructor() {

    this.fetch((data) => {
      this.rows = [...data];
    });
  }

  isCheckboxable() {
    return this.checkboxable;
  }

  onSelect(row) {
      console.log(row)
  }

  toggle() {
    this.checkboxable = !this.checkboxable;
    console.log('ici '+this.checkboxable);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://unpkg.com/@swimlane/ngx-datatable@6.3.0/assets/data/company.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
