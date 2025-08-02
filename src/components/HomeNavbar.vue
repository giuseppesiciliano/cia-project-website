<template>
  <div>
    <header class="main-header">
      <button @click="toggleNav" class="burger-menu-btn" aria-label="Apri menù di navigazione" ref="burgerBtn">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="header-filters" role="toolbar" aria-label="Filtri categoria progetto">
        <button @click="changeFilter('all')" :class="{ active: activeFilter === 'all' }" class="filter-btn">All</button>
        <button @click="changeFilter('interiors')" :class="{ active: activeFilter === 'interiors' }" class="filter-btn">Interiors</button>
        <button @click="changeFilter('restauro')" :class="{ active: activeFilter === 'restauro' }" class="filter-btn">Restauro</button>
        <button @click="changeFilter('hospitality')" :class="{ active: activeFilter === 'hospitality' }" class="filter-btn">Hospitality</button>
        <button @click="changeFilter('residential')" :class="{ active: activeFilter === 'residential' }" class="filter-btn">Residential</button>
        <button @click="changeFilter('retail')" :class="{ active: activeFilter === 'retail' }" class="filter-btn">Retail</button>
      </div>

      <button @click="toggleFilterNav" class="filter-toggle-btn" aria-label="Apri filtri" ref="filterToggleBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </button>
    </header>

    <nav :class="{ open: isNavOpen }" class="side-nav" aria-label="Navigazione laterale" ref="sideNav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Filosofia</a></li>
        <li><a href="#">Servizi</a></li>
        <li><a href="/contatti">Contatti</a></li>
      </ul>
    </nav>

    <nav :class="{ open: isFilterNavOpen }" class="filter-nav" aria-label="Navigazione filtri" ref="filterNav">
      <div class="header-filters" role="toolbar" aria-label="Filtri categoria progetto">
        <button @click="changeFilter('all')" :class="{ active: activeFilter === 'all' }" class="filter-btn">All</button>
        <button @click="changeFilter('interiors')" :class="{ active: activeFilter === 'interiors' }" class="filter-btn">Interiors</button>
        <button @click="changeFilter('restauro')" :class="{ active: activeFilter === 'restauro' }" class="filter-btn">Restauro</button>
        <button @click="changeFilter('hospitality')" :class="{ active: activeFilter === 'hospitality' }" class="filter-btn">Hospitality</button>
        <button @click="changeFilter('residential')" :class="{ active: activeFilter === 'residential' }" class="filter-btn">Residential</button>
        <button @click="changeFilter('retail')" :class="{ active: activeFilter === 'retail' }" class="filter-btn">Retail</button>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'HomeNavbar',
  data() {
    return {
      isNavOpen: false,
      isFilterNavOpen: false,
      activeFilter: 'all'
    };
  },
  // NUOVO: Computed property per monitorare lo stato di apertura dei pannelli
  computed: {
    isPanelOpen() {
      return this.isNavOpen || this.isFilterNavOpen;
    }
  },
  // NUOVO: Watcher per aggiungere/rimuovere l'event listener
  watch: {
    isPanelOpen(isOpen) {
      if (isOpen) {
        // Aggiunge l'listener quando un pannello si apre
        document.addEventListener('click', this.handleClickOutside);
      } else {
        // Rimuove l'listener quando entrambi i pannelli sono chiusi
        document.removeEventListener('click', this.handleClickOutside);
      }
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      if (this.isNavOpen) {
        this.isFilterNavOpen = false;
      }
    },
    toggleFilterNav() {
      this.isFilterNavOpen = !this.isFilterNavOpen;
      if (this.isFilterNavOpen) {
        this.isNavOpen = false;
      }
    },
    changeFilter(filter) {
      if (this.activeFilter === filter) return;
      this.activeFilter = filter;
      this.$emit('filter-changed', filter);
      this.isFilterNavOpen = false;
    },
    // NUOVO: Metodo per gestire i click esterni
    handleClickOutside(event) {
      // Controlla se il pannello di navigazione è aperto
      if (this.isNavOpen) {
        // Verifica che l'elemento cliccato non sia il pannello stesso o un suo discendente,
        // E non sia il pulsante che lo apre
        if (this.$refs.sideNav && !this.$refs.sideNav.contains(event.target) && !this.$refs.burgerBtn.contains(event.target)) {
          this.isNavOpen = false;
        }
      }

      // Controlla se il pannello dei filtri è aperto
      if (this.isFilterNavOpen) {
        // Verifica che l'elemento cliccato non sia il pannello stesso o un suo discendente,
        // E non sia il pulsante che lo apre
        if (this.$refs.filterNav && !this.$refs.filterNav.contains(event.target) && !this.$refs.filterToggleBtn.contains(event.target)) {
          this.isFilterNavOpen = false;
        }
      }
    }
  },
  // NUOVO: Lifecycle hook per pulire l'event listener
  beforeUnmount() {
    // Rimuove l'listener quando il componente viene distrutto per sicurezza
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style lang="scss" scoped>
/* --- Stili CSS (invariati rispetto alla versione precedente) --- */
/* --- HEADER PRINCIPALE --- */
.main-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    width: 100%;
    background-color: rgba(244, 244, 244, 0.8);
    backdrop-filter: blur(5px);
    transition: opacity 0.4s;
}

/* --- ELEMENTI DELL'HEADER --- */
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

.filter-toggle-btn {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 101;
    line-height: 0;
    transition: opacity 0.3s, visibility 0.3s;
}

.filter-toggle-btn svg {
    width: 25px;
    height: 25px;
    stroke: #1a1a1a;
}

/* --- FILTRI NELL'HEADER (VISIBILI SU DESKTOP) --- */
.header-filters {
    display: flex;
    justify-content: center;
    gap: 8px;
    transition: opacity 0.3s, visibility 0.3s;
}

.filter-btn {
    background: none;
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 0.9em;
    padding: 5px 50px;
    cursor: pointer;
    color: #888;
    position: relative;
    transition: color 0.3s;
}

.filter-btn:hover {
    color: #1a1a1a;
}

.filter-btn.active {
    color: #1a1a1a;
    font-weight: 700;
}

.filter-btn.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 12px;
    width: calc(100% - 24px);
    height: 1px;
    background-color: #1a1a1a;
}

/* --- PANNELLI LATERALI A SCOMPARSA --- */
.side-nav, .filter-nav {
    position: fixed;
    top: 0;
    width: 280px;
    height: 100%;
    background-color: #e9e9e9;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 99;
    padding-top: 100px;
}

.side-nav {
    left: 0;
    transform: translateX(-100%);
}
.side-nav.open {
    transform: translateX(0);
}
.side-nav ul {
    list-style: none;
}
.side-nav li a {
    display: block;
    padding: 15px 40px;
    font-size: 1.2em;
    font-weight: 300;
    color: #1a1a1a;
    text-decoration: none;
}

.filter-nav {
    right: 0;
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
}
.filter-nav.open {
    transform: translateX(0);
}

.filter-nav .header-filters {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
}
.filter-nav .filter-btn {
    width: 100%;
    text-align: left;
    padding: 15px 40px;
    font-size: 1.2em;
    font-weight: 300;
}
.filter-nav .filter-btn.active::after {
    display: none;
}

/* --- MEDIA QUERY PER TABLET E MOBILE --- */
@media (max-width: 992px) {
    .main-header .header-filters {
        display: none;
    }

    .filter-toggle-btn {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
    }
}
</style>