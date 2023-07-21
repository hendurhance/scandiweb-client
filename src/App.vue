<script lang="ts">
import { defineComponent } from "vue";
import BaseHeader from "./components/base/BaseHeader.vue";
import BaseFooter from "./components/base/BaseFooter.vue";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    BaseHeader,
    BaseFooter,
  },
  setup() {
    const route = useRoute();
    const currentRouteName = route.name;
    console.log(currentRouteName);
    return {
      currentRouteName,
    };
  },
});
</script>

<template>
  <div>
    <main>
      <BaseHeader :mode="currentRouteName" />
      <router-view />
      <BaseFooter />
    </main>
  </div>
</template>

<style scoped>

</style>
