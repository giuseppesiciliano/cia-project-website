<template>
  <div class="project-slide-one">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.text-block {
  white-space: pre-line;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Stili per diverse dimensioni */
@media (min-width: 1025px) {
  .text-block {
    width: 400px; /* Larghezza fissa per il testo su desktop */
    font-size: 15px;
  }
}

@media (max-width: 1024px) {
  .text-block {
    width: 85vw; /* Larghezza responsiva su mobile */
    font-size: 14px;
  }
}
</style>