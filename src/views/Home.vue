<template>
  <div>
    <HomeNavbar @filter-changed="updateFilter" />

    <div class="project-list-container" :class="{ 'is-filtering': isFiltering }">
      <Project
        v-for="project in filteredProjects"
        :key="project.id"
        :project-data="project"
      />
    </div>
  </div>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar.vue';
import Project from '../components/Project.vue';
import projectsData from '../data/projects.json';

export default {
  name: 'Home',
  components: {
    HomeNavbar,
    Project
  },
  data() {
    return {
      allProjects: projectsData,
      currentFilter: 'all',
      isFiltering: false // <-- NUOVO: la variabile di stato per l'animazione
    };
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === 'all') {
        return this.allProjects;
      }
      return this.allProjects.filter(project => 
        project.category.includes(this.currentFilter)
      );
    }
  },
  methods: {
    // SOSTITUISCI il tuo vecchio metodo 'updateFilter' con questo
    updateFilter(newFilter) {
      if (this.currentFilter === newFilter) return;

      this.isFiltering = true; // 1. Inizia l'animazione di uscita (dissolvenza)

      // 2. Aspetta la fine dell'animazione di uscita
      setTimeout(() => {
        this.currentFilter = newFilter; // 3. Aggiorna i dati (la lista cambia mentre è invisibile)
        this.isFiltering = false;      // 4. Inizia l'animazione di entrata (apparizione)
      }, 400); // Deve corrispondere alla durata della transizione CSS
    }
  }
};
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project-list-container {
  padding-top: 100px;
  /* Definiamo la transizione sul contenitore */
  transition: opacity 0.4s ease, transform 0.4s ease;
}

/* Applichiamo lo stile quando la classe 'is-filtering' è attiva */
.project-list-container.is-filtering {
  opacity: 0;
  transform: translateY(15px);
}
</style>