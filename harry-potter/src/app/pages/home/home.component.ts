import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  principalCharacters: any = "";

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getCharacters().then(data => {
      this.principalCharacters = data[0].image;
    })
  }
}
