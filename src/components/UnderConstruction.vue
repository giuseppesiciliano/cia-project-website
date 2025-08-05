<template>
  <div class="construction-page">
    <div class="content-container">
      
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>

      <h1>Pagina in Costruzione</h1>
      
      <p class="subtitle">
        Stiamo lavorando per rendere questo spazio unico. <br>
        Torna a trovarci presto per scoprire tutte le novità.
      </p>
      
      <div class="contact-info">
        <p>Nel frattempo, puoi contattarci a:</p>
        <a href="mailto:info@tuostudio.com">amministrazione@ciaarchitetti.it</a>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnderConstruction'
};
</script>

<style lang="scss" scoped>
// Usiamo le variabili dei font che abbiamo definito globalmente
// Assicurati che siano disponibili nel tuo progetto
:root {
  --font-headings: 'Big John PRO', sans-serif;
  --font-body: 'Benton Sans', Arial, sans-serif;
}

.construction-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
  color: #1a1a1a;
  font-family: var(--font-body);
}

.content-container {
  text-align: center;
  max-width: 550px;
  padding: 40px 20px;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
  color: #a0a0a0;
  animation: subtlePulse 2.5s infinite ease-in-out;
}

@keyframes subtlePulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

h1 {
  font-family: var(--font-headings);
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 15px 0;
}

.subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 40px;
}

.contact-info p {
  margin-bottom: 5px;
  color: #666;
}

.contact-info a {
  font-weight: bold;
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #1a1a1a;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
}
</style>