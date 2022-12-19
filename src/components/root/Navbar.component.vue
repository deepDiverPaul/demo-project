<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <CoffeeIcon />
      </div>
      <a role="button"
         class="navbar-burger"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/"  class="navbar-item">
          Home
        </router-link>
        <router-link :to="{ name: 'forms-list' }"  class="navbar-item">
          Forms
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import CoffeeIcon from '@/components/icons/CoffeeIcon.component.vue';
</script>

<style scoped lang="scss">
.navbar {
  .navbar-brand {
    .navbar-item {
      svg {
        @apply w-6 h-6;
      }
    }
  }
}
</style>
