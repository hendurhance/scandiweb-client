<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseHeader',
  props: ['mode'],
});
</script>

<template>
  <header>
    <h1>
      {{ mode === 'ProductListing' ? 'Product Listing' : 'Create Product' }}
    </h1>
    <div class="button-grid">
      <button>Add</button>
      <button>Mass Delete</button>
    </div>
  </header>
</template>

<style lang="scss" scoped >
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  background-color: var(--color-white);
  border-bottom: 1px solid #eaeaea;
  box-shadow: var(--box-shadow-style);
}

header h1 {
  font-size: 2rem;
  font-weight: 600;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid #eaeaea;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-style);
  cursor: pointer;
}

</style>
