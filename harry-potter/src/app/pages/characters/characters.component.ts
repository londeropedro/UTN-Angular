import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})

export class CharactersComponent implements OnInit {
  characters: any = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters().then(data => {
      this.characters = data;
    })
  }
}
