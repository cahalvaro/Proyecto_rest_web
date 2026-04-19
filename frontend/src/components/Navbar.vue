<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Mi Proyecto</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><router-link class="nav-link" to="/login">Acceso</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
