<template>
  <transition name="fade">
    <div v-if="visible" class="splash-screen">
      <img src="@/assets/logo.jpeg" alt="Logo" class="logo" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SplashScreen',
  props: {
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      visible: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = false;
      this.$emit('finished'); // comunica al genitore che lo splash è finito
    }, this.duration);
  }
};
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.logo {
  width: 100px;
  height: 100px;
  animation: scaleUp 1.5s ease-in-out forwards;
}

@keyframes scaleUp {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>
