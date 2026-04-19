<template>
  <div id="app">
    <Navbar />
    <router-view/> <!-- Aquí se cargan las vistas -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar }
}
</script>
