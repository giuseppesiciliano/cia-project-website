<template>
  <div class="details-block">
    <!-- {{ content }} -->
    <h3>ANNO</h3>
    <span>2024</span>
    <h3>LUOGO</h3>
    <span>Milano, LODI</span>
    <h3>TIPOLOGIA</h3>
    <span>Residenziale</span>
  </div>
</template>

<script>
export default {
  name: 'DetailBlock',
  props: {
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
h3, span {
   font-family: 'Benton Sans', Arial, sans-serif; 
}

h3 {
    color: gray;
    margin-bottom: 4px;
    padding-top: 10px;
}
span {
    margin-bottom: 50px;
}



.details-block {
//   font-family: 'Big John PRO', sans-serif;
  text-align: left;
  display: flex;
  flex-direction: column;


  margin-top: 50px;
  flex-shrink: 0;
  white-space: pre-line;
  
  opacity: 0;
  max-height: 0;
  width: 0;
  margin-left: 20px;
  overflow: hidden; /* Nasconde il contenuto durante la transizione */
  
//   line-height: 1.6;  
  /* Definiamo qui la transizione, così è auto-contenuta */
  transition:
    max-height 0.6s ease-in-out,
    opacity 0.4s ease-in-out 0.2s; /* Un leggero ritardo sull'opacità */
}

/*
  Quando il componente ha la classe .is-active (passata dal genitore),
  diventa visibile e occupa il suo spazio.
*/
.details-block.is-active {
  opacity: 1;
  max-height: 500px; /* Un valore abbastanza grande da contenere tutto */
}


/* Stili per Mobile e Tablet */
@media (max-width: 1024px) {
  .details-block.is-active {
    width: 150px; /* Larghezza su mobile quando attivo */
    font-size: 14px;
  }
}

/* Stili per Desktop: lo nascondiamo completamente */
@media (min-width: 1025px) {
  .details-block {
    display: none;
  }
}
</style>