<template>
  <SplashScreen v-if="showSplash" :duration="1500" @finished="onSplashFinished" />

  <HomeNavbar />

  <main>
    <transition name="fade-content">
      <div v-show="!showSplash">
        <router-view />
      </div>
    </transition>
  </main>
</template>

<script>
import SplashScreen from './components/SplashScreen.vue';
import HomeNavbar from './components/HomeNavbar.vue';

export default {
  name: 'App',
  components: {
    SplashScreen,
    HomeNavbar
  },
  data() {
    return {
      // Impostiamo a true di default, così non c'è un "flash" di contenuto
      showSplash: true 
    };
  },
  mounted() {
    // BUG FIX: la chiave che controlli deve essere la stessa che imposti.
    // Usiamo 'splashSeen' in entrambi i casi.
    const seen = sessionStorage.getItem('splashSeen');

    if (seen) {
      this.showSplash = false;
    } else {
      this.showSplash = true;
    }
  },
  methods: {
    onSplashFinished() {
      this.showSplash = false;
      // BUG FIX: Usa la stessa chiave 'splashSeen'
      sessionStorage.setItem('splashSeen', 'true');
    }
  }
};
</script>

<style scoped>
/* Lo stile per la transizione del contenuto va bene com'è, 
   Vue gestisce le transizioni anche con v-show */
.fade-content-enter-active {
  transition: opacity 0.8s ease;
}
.fade-content-enter-from {
  opacity: 0;
}
.fade-content-enter-to {
  opacity: 1;
}
</style>