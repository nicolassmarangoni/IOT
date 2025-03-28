// src/services/api.ts
export const fetchCharacters = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    return data.results;
  };
  