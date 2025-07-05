<template>
  <div class="project-container" :class="{ 'is-expanded': isExpanded }" ref="projectContainer">
    <div class="project-wrapper">
      <div class="details">
        <img class="logo" :src="getImageUrl(projectData.logo)" alt="Logo">
        <div class="title">{{ projectData.title }}</div>
        <div class="place">{{ projectData.place }}</div>
      </div>
      <img class="project-cover" :src="getImageUrl(projectData.coverImage)" alt="Cover" @click="toggleExpand">
    </div>
    <div class="project-slide-one">{{ projectData.slideContent }}</div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    projectData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      const container = this.$refs.projectContainer;

      if (this.isExpanded) {
        container.style.setProperty('--altezza-iniziale-desktop', '90vmin');

        const checkAndScroll = () => {
          container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };

        if (window.innerWidth <= 1024) {
          setTimeout(checkAndScroll, 50);
        } else {
          const cover = container.querySelector('.project-cover');
          cover.addEventListener('transitionend', checkAndScroll, { once: true });
        }
      } else {
        container.style.setProperty('--altezza-iniziale-desktop', '300px');
      }
    },
    
    // AGGIUNGI QUESTO NUOVO METODO
    getImageUrl(name) {
      // Questa sintassi costruisce un percorso che Vite può interpretare correttamente
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
  margin: 20px 0;
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
  background-color: blueviolet;
  transition: all 0.8s ease-in-out;
  flex-shrink: 0;
  cursor: pointer;
  color: white;
  display: grid;
  place-content: center;
}

.project-slide-one {
  background-color: aquamarine;
  flex-shrink: 0;
  color: black;
  display: grid;
  place-content: center;
  opacity: 0;
  width: 0;
  overflow: hidden;
  transition: width 0.5s ease-in-out, opacity 0.4s ease-in-out 0.2s;
}

.project-container.is-expanded .project-slide-one {
  opacity: 1;
}

.details {
  .logo {
    height: 40px;
    width: 40px;
    background-color: brown;
  }
  .place {
    color: gray;
    font-size: 12px;
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
    width: 600px;
  }
  .details {
    height: var(--altezza-iniziale-desktop);
    transition: all 0.8s ease-in-out;
    width: 170px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: end;
    .title {
      margin-top: 20px;
    }
    .place {
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
  .project-container.is-expanded .project-slide-one {
    width: 600px;
  }
  .details {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>