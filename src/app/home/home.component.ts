import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public name = 'Son';
  public students = [{
    name: "Toan",
    home: "Hai Duong"
  },
  {
    name: "Son",
    home: "Hai Phong"
  },
  {
    name: "Quan",
    home: "Hai Duong"
  }
  ];
  public cities = [{
    name: 'hanoi', temp: 40
  },
  { name: 'TPHCM', temp: -10 }
    ,
  { name: 'HaiDuong', temp: 30 }
  ]
}
