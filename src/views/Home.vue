<template>
  <main>
    <Project
      v-for="project in projects"
      :key="project.id"
      :project-data="project"
    />
  </main>
</template>

<script>
import Project from '../components/Project.vue';
import projectsData from '../data/projects.json';

export default {
  name: 'App',
  components: {
    Project
  },
  data() {
    return {
      projects: projectsData
    };
  }
};
</script>