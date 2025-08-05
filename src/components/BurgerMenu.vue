<template>
  <button @click="$emit('toggle')" class="burger-menu-btn" aria-label="Apri menù di navigazione" ref="burgerBtn">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: 'BurgerMenu',
};
</script>

<style scoped>
.burger-menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;
  flex-shrink: 0;
}

.burger-menu-btn span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #1a1a1a;
  margin: 5px 0;
}
</style>
