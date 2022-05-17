<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'usuario', params: { id: 1 } }"
          class="nav-link"
          >Usuario 1</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'usuario', params: { id: 2 } }"
          class="nav-link"
          >Usuario 2</router-link
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <button type="button" class="btn btn-primary" @click="navigateToUsuario">
      Ir a usuario
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToUsuario() {
      this.$router.push("/usuario/ 3");
    },
  },
};
</script>

<style></style>
