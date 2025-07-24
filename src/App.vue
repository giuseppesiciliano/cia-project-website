<template>
  <HomeNavbar />


  <main>
    <router-view />
  </main>
</template>

<script>
// 1. Importa il componente della barra di navigazione
//    Assicurati che il percorso sia corretto!
import HomeNavbar from './components/HomeNavbar.vue'; 

export default {
  name: 'App',
  // 2. Registra il componente per poterlo usare nel template
  components: {
    HomeNavbar
  }
};
</script>

<style scoped>
/* Puoi lasciare eventuali stili di layout per App.vue se necessario */
</style>

