<template>
  <header>
    <Profile/>
    <Menu/>
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Profile from '@/components/Profile.vue'

export default {
  name: "navigator",
  components: {
    Menu,
    Profile
  },
  data() {
    return {

    }
  },
  methods: {
  }
};
</script>

<style>
</style>
