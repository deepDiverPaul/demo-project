<template>
  <NavbarComponent />
  <div class="container">
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from '@/components/root/Navbar.component.vue';
</script>
