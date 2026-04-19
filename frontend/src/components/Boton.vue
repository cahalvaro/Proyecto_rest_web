<template>
  <button class="btn btn-primary" @click="$emit('click')">
    {{ texto }}
  </button>
</template>

<script>
export default {
  name: 'Boton',
  props: {
    texto: { type: String, default: 'Aceptar' }
  }
}
</script>
