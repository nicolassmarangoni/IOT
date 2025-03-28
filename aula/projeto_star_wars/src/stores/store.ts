
import { defineStore } from 'pinia';

interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  image?: string;
}

export const useCharacterStore = defineStore('characterStore', {
  state: () => ({
    characters: [] as Character[],
    favorites: [] as Character[],
  }),
  actions: {
    addFavorite(character: Character) {
      this.favorites.push(character);
    },
    removeFavorite(character: Character) {
      this.favorites = this.favorites.filter(fav => fav.name !== character.name);
    },
    setCharacters(characters: Character[]) {
      this.characters = characters;
    }
  }
});
