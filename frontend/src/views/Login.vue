<template>
  <div class="container mt-5">
    <h2 class="mb-4">Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          class="form-control" 
          placeholder="ejemplo@correo.com" 
          required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          class="form-control" 
          placeholder="********" 
          required>
      </div>
      <Boton texto="Ingresar" @click="login"/>
    </form>
  </div>
</template>

<script>
import Boton from '@/components/Boton.vue'

export default {
  name: 'Login',
  components: { Boton },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        alert(`Login con: ${this.email}`)
      }
    }
  }
}
</script>
