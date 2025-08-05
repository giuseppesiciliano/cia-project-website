<template>
  <div class="project-container" :class="{ 'is-expanded': isExpanded }" ref="projectContainer">
    <div class="project-wrapper">
      <div class="details">
        <img class="logo" :src="getLocalImageUrl(projectData.logo)" alt="Logo">
        <div class="title">{{ projectData.title }}</div>
        <!-- <div class="place">{{ projectData.place }}</div> -->
        <!-- <div class="year">{{ projectData.year }}</div> -->
      </div>
      <img class="project-cover" :src="getLocalImageUrl(projectData.coverImage)" alt="Cover" @click="toggleExpand">
    </div>

  <div
    v-for="(slide, index) in projectData.slides"
    :key="index"
    class="project-slide"
  >
    <component
      :is="componentMap[slide.type]"
      :content="slide.content"
      :class="{ 'is-active': isExpanded }"
    />
  </div>

  </div>
</template>

<script>
import DetailBlock from './blocks/DetailBlock.vue';
import TextBlock from './blocks/TextBlock.vue';
import ImageBlock from './blocks/ImageBlock.vue';

export default {
  name: 'Project',
  components: {
    DetailBlock,
    TextBlock,
    ImageBlock
  },
  props: {
    projectData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false,
      // 3. Mappa i tipi di slide ai componenti
      componentMap: {
        details: 'DetailBlock',
        text: 'TextBlock',
        image: 'ImageBlock'
      }
    };
  },
  methods: {
    // La tua logica per espandere/collassare non cambia
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      const container = this.$refs.projectContainer;

      if (this.isExpanded) {
        container.style.setProperty('--altezza-iniziale-desktop', '90vmin');

        const checkAndScroll = () => {
          const topPos = container.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: topPos - 70,
            behavior: 'smooth'
          });
        };

        if (window.innerWidth <= 1024) {
          setTimeout(checkAndScroll, 50);
        } else {
          const cover = container.querySelector('.project-cover');
          cover.addEventListener('transitionend', checkAndScroll, { once: true });
        }
      } else {
        container.style.setProperty('--altezza-iniziale-desktop', '300px');
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    },
    
    // Questa funzione serve solo per le immagini locali al componente (logo, cover)
    getLocalImageUrl(name) {
      if (!name) return '';
      return new URL(`../assets/${name}`, import.meta.url).href;
    }
  }
};
</script>

<style lang="scss" scoped>
/* Stili generali del progetto */
.project-container {
  display: flex;
  width: 100%;
  margin: 40px 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  justify-content: flex-start;
  transition: padding-left 0.6s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
  &.is-expanded {
    padding-left: 20px !important;
  }
}

.project-cover {
  aspect-ratio: 16/9;
  transition: all 0.8s ease-in-out;
  flex-shrink: 0;
  cursor: pointer;
  color: white;
  display: grid;
  place-content: center;
}




// SLIDE ONE
.project-slide-one {
  flex-shrink: 0;
  display: none;
  white-space: pre-line;
  margin-left: 20px;
  opacity: 0;
  max-height: 0;
  width: 0;
  font-family: 'Benton Sans', Arial, sans-serif;
  line-height: 1.2;
  text-align: justify;
}
.project-container.is-expanded .project-slide-one {
  display: block;
  opacity: 1;
  max-height: var(--altezza-iniziale-desktop);
  transition:
    max-height 0.6s ease-in-out,
    width 0.6s ease-in-out, // Aggiungi la transizione per la larghezza
    opacity 0.4s ease-in-out;
}

// SLIDE TWO
.image-block {
  background-color: rgb(107, 49, 234);
  flex-shrink: 0;
  color: black;
  display: grid;
  white-space: pre-line;
  margin-left: 20px;
  opacity: 0;
  max-height: 0;
  width: 0;
  transition:
    max-height 0.6s ease-in-out,
    height 0.6s ease-in-out,
    width 0.6s ease-in-out, // E la transizione per la larghezza
    opacity 0.4s ease-in-out;
}
.project-container.is-expanded .image-block {
  opacity: 1;
  max-height: var(--altezza-iniziale-desktop); // ✅ Usa la stessa altezza della cover
  width: auto;
  object-fit: cover; 
}





.project-container.is-expanded .place {
  font-size: 15px;
}
.project-container.is-expanded .year {
  font-size: 15px;
  opacity: 1;
}

.details {
  .title {
    font-family: 'Big John PRO', sans-serif;
  }
  .logo {
    height: 40px;
    width: 40px;
    background-color: brown;
  }
  .place {
    transition: font-size 0.5s ease-in-out;
    color: gray;
    font-size: 12px;
  }
  .year {
    transition: font-size 0.5s ease-in-out;
    color: gray;
    opacity: 0;
  }
}





/* Desktop */
@media (min-width: 1025px) {
  .project-wrapper {
    display: flex;
    align-items: stretch;
  }
  .project-container {
    align-items: stretch;
    padding-left: calc((100% - (200px + (var(--altezza-iniziale-desktop) * 16 / 9))) / 2);
  }
  .project-cover {
    height: var(--altezza-iniziale-desktop);
  }
  .project-container.is-expanded .project-slide-one {
    width: 400px;
    font-size: 14px;
  }
  .project-container.is-expanded .image-block {
    // width: 400px;
    // font-size: 15px;
  }
  
  .details {
    height: var(--altezza-iniziale-desktop);
    transition: all 0.8s ease-in-out;
    width: 150px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: end;

    .title {
      margin-top: 20px;
      font-size: 16px;
      text-align: end;
    }
    .place, .year {
      margin-top: 10px;
    }
  }
}




/* Mobile e Tablet */
@media (max-width: 1024px) {
  .project-container {
    align-items: stretch;
    padding-left: calc((100% - 85vw) / 2);
  }
  .project-cover {
    width: 85vw;
  }
  .project-slide-one,
  .image-block {
    margin-top: 50px;
  }
  .project-container.is-expanded .project-slide-one {
    width: 250px;
    font-size: 12px;
  }
  .project-container.is-expanded .image-block {
    height: calc(85vw * 9 / 16); /* Calcola l'altezza in base alla cover */
    object-fit: cover;           /* Assicura che l'immagine non si distorca */
    width: auto;                 /* Lascia che la larghezza si adatti */
  }
  .details {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;

    .title {
      font-size: 18px;
    }
  }
}
</style>