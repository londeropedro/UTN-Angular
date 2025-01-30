import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  async getCharacters() {
    const response = await fetch('https://hp-api.herokuapp.com/api/characters');
    const data = await response.json();
    return data;
  }

}