<template>
  <div>
    <header class="main-header">
      <button @click="toggleNav" class="burger-menu-btn" aria-label="Apri menù di navigazione">
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

      <div @click="toggleFilterNav" class="logo" aria-label="Logo Studio Architettura - Apri filtri">Y</div>
    </header>

    <nav :class="{ open: isNavOpen }" class="side-nav" aria-label="Navigazione laterale">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Filosofia</a></li>
        <li><a href="#">Servizi</a></li>
        <li><a href="/contatti">Contatti</a></li>
      </ul>
    </nav>

    <nav :class="{ open: isFilterNavOpen }" class="filter-nav" aria-label="Navigazione filtri">
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
      isNavOpen: false,       // Controls the left navigation
      isFilterNavOpen: false, // NEW: Controls the right filter navigation
      activeFilter: 'all'
    };
  },
  methods: {
    // This method now also closes the filter nav if it's open
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      if (this.isNavOpen) {
        this.isFilterNavOpen = false; // Close other nav when opening this one
      }
    },

    // NEW: Method to toggle the filter navigation
    toggleFilterNav() {
      this.isFilterNavOpen = !this.isFilterNavOpen;
      if (this.isFilterNavOpen) {
        this.isNavOpen = false; // Close other nav when opening this one
      }
    },

    // MODIFIED: This method now also closes the filter panel on selection
    changeFilter(filter) {
      if (this.activeFilter === filter) return;

      this.activeFilter = filter;
      this.$emit('filter-changed', filter);

      // Close the filter nav after a selection is made
      this.isFilterNavOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
/* --- HEADER, NAV, FILTRI (Original styles remain unchanged) --- */
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

.logo {
    font-weight: 700;
    letter-spacing: 2px;
    flex-shrink: 0;
    /* Added z-index to ensure it's clickable above other elements if needed */
    z-index: 101;
}

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

.side-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    background-color: #e9e9e9;
    transform: translateX(-100%);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 99;
    padding-top: 100px;
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

.header-filters {
    display: flex;
    justify-content: center;
    gap: 8px;
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


/* --- NEW: STYLES FOR THE RIGHT FILTER PANEL --- */
.filter-nav {
    position: fixed;
    top: 0;
    right: 0; /* Positioned on the right */
    width: 280px;
    height: 100%;
    background-color: #e9e9e9;
    /* Hidden off-screen to the right */
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 99;
    padding-top: 100px;
    display: flex; /* Using flex to easily manage content */
    flex-direction: column;
}

/* Class to show the panel */
.filter-nav.open {
    transform: translateX(0);
}

/* Style the filter container and buttons inside the new panel */
.filter-nav .header-filters {
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
    gap: 0; /* Remove horizontal gap */
}

.filter-nav .filter-btn {
    width: 100%;
    text-align: left; /* Align text to the left */
    padding: 15px 40px; /* Give it more vertical padding */
    font-size: 1.2em;
    font-weight: 300;
}

/* We don't need the underline in the side panel */
.filter-nav .filter-btn.active::after {
    display: none;
}

/* --- NEW: MEDIA QUERY FOR TABLET AND MOBILE --- */
@media (max-width: 992px) {
    /* Hide the original filter bar in the header */
    .main-header .header-filters {
        display: none;
    }

    /* Make the logo behave like a button */
    .logo {
        cursor: pointer;
    }
}
</style>