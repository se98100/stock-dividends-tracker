<template>
    <div class="navbar my-nav">
      <div class="navbar-brand">
        <div class="navbar-item">
          <div class="title is-3 brand">{{title}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.my-nav {
  background-color: #00A7E1 !important;
}

.brand {
  color: white !important;
}
</style>