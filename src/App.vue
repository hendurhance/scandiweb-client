<script lang="ts">
import { defineComponent } from "vue";
import BaseFooter from "./components/base/BaseFooter.vue";
export default defineComponent({
  components: {
    BaseFooter,
  },
});
</script>

<template>
  <div>
    <main>
      <router-view />
      <BaseFooter />
    </main>
  </div>
</template>

<style scoped>

</style>
