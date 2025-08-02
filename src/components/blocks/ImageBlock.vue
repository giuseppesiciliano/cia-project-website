<template>
  <img class="image-block" :src="getImageUrl(content)" alt="Slide Image">
</template>

<script>
// il tuo script rimane invariato
export default {
  name: 'ImageBlock',
  props: {
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    getImageUrl(name) {
      if (!name) return '';
      return new URL(`../../assets/${name}`, import.meta.url).href;
    }
  }
};
</script>

<style lang="scss" scoped>
/* Stile del componente figlio */
.image-block {
  /* STATO INIZIALE (nascosto) */
  display: block;
  flex-shrink: 0;
  margin-left: 20px;
  overflow: hidden;
  opacity: 0;
  max-height: 0;
  width: 0;

  /* TRANSIZIONE (definita qui, senza ritardo) */
  transition:
    max-height 0.6s ease-in-out,
    width 0.6s ease-in-out,
    opacity 0.4s ease-in-out;
}

/* STATO FINALE (quando il genitore passa la classe .is-active) */
.image-block.is-active {
  opacity: 1;
  max-height: var(--altezza-iniziale-desktop);
  width: auto;
  object-fit: cover;
}
</style>