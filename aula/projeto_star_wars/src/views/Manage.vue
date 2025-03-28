// src/views/Manage.vue
<template>
  <div class="manage">
    <h1>Gerenciar Favoritos</h1>
    <div class="character-list">
      <div
        class="character"
        v-for="character in characters"
        :key="character.name"
      >
        <div class="character-info">
          <h3>{{ character.name }}</h3>
          <p>{{ character.height }} cm | {{ character.mass }} kg</p>
          <p>Ano de Nascimento: {{ character.birth_year }}</p>
          <input type="text" v-model="character.image" placeholder="Adicionar Imagem" />
          <button @click="toggleFavorite(character)">
            {{ isFavorite(character) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useCharacterStore } from '@/stores/store';
import { fetchCharacters } from '@/services/api';

export default defineComponent({
  setup() {
    const characterStore = useCharacterStore();

    const toggleFavorite = (character: any) => {
      if (isFavorite(character)) {
        characterStore.removeFavorite(character);
      } else {
        characterStore.addFavorite(character);
      }
    };

    const isFavorite = (character: any) => {
      return characterStore.favorites.some((fav) => fav.name === character.name);
    };

    onMounted(async () => {
      const characters = await fetchCharacters();
      characterStore.setCharacters(characters);
    });

    return {
      characters: characterStore.characters,
      toggleFavorite,
      isFavorite,
    };
  },
});
</script>

<style lang="scss" scoped>
.manage {
  .character-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .character {
      background: #fff;
      padding: 1rem;
      width: 200px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      .character-info {
        text-align: center;

        input {
          margin: 0.5rem 0;
          padding: 0.5rem;
          width: 100%;
        }

        button {
          background-color: #007bff;
          color: white;
          padding: 0.5rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
