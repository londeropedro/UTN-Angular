import { Component } from '@angular/core';
import { CharactersService } from '../characters/characters.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  characters: any = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters().then(data => {
      this.characters = data;
    })
  }
}
