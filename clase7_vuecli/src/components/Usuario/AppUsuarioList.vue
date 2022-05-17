<template>
  <div>
    <div class="list-group">
      <a
        href="#"
        class="list-group-item list-group-item-action active"
        aria-current="true"
        v-for="usuario in usuarios"
        :key="usuario.index"
      >
        Usuario {{ usuario.id }}
      </a>

      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
};
</script>

<style></style>
