// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';  // Importando o Vue Router

const app = createApp(App);

app.use(createPinia()); 
app.use(router); 

app.mount('#app');
