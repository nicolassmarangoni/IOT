// src/views/Home.vue
<template>
  <div class="home">
    <h1>Star Wars: Personagens Favoritos</h1>
    <div class="card-container">
      <div
        class="card"
        v-for="character in favorites"
        :key="character.name"
        @click="expandCard(character)"
      >
        <div class="card-body">
          <h3>{{ character.name }}</h3>
          <p><strong>Altura:</strong> {{ character.height }} cm</p>
          <p><strong>Peso:</strong> {{ character.mass }} kg</p>
          <p><strong>Ano de Nascimento:</strong> {{ character.birth_year }}</p>
          <img v-if="character.image" :src="character.image" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCharacterStore } from '@/stores/store';

export default defineComponent({
  setup() {
    const characterStore = useCharacterStore();
    
    const favorites = computed(() => characterStore.favorites);

    const expandCard = (character: any) => {
      // Função para expandir o card ou abrir um modal
      console.log(character);
    };

    return {
      favorites,
      expandCard,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .card {
      background: #fff;
      padding: 1rem;
      width: 200px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      cursor: pointer;

      .card-body {
        text-align: center;
        h3 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
