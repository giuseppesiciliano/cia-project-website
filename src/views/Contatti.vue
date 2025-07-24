<template>
  <div class="contact-page">
    <h1>Contattaci</h1>
    <p>Questa è la pagina dei contatti.</p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="message">Messaggio:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Invia Messaggio</button>
    </form>


    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYabPJpE99Jxm3cZ6bJpaGKCGhkjtCd6D-jeY6cFuOnaHTTg/viewform?embedded=true" width="640" height="684" frameborder="0" marginheight="0" marginwidth="0">Caricamento…</iframe>

    
  </div>
</template>

<script>
export default {
  name: 'PaginaContatti',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Qui gestirai la logica di invio del form
      alert(`Grazie ${this.form.name}! Il tuo messaggio è stato inviato.`);
      // Resetta il form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>