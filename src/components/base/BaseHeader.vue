<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'BaseHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonMode: {
      type: String,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    const handleAddClick = () => {
      router.push('/add-product');
    };
    const handleCancelClick = () => {
      router.push('/');
    };

    return {
      handleAddClick,
      handleCancelClick,
    };
  },
});
</script>

<template>
  <header>
    <h1>
      {{ title }}
    </h1>
    <div v-if="buttonMode === 'list'" class="button-grid">
      <button @click="handleAddClick">ADD</button>
      <button @click="$emit('massDelete')" id="delete-product-btn">MASS DELETE</button>
    </div>
    <div v-else-if="buttonMode === 'add'" class="button-grid">
      <button @click="$emit('submitForm')">Save</button>
      <button @click="handleCancelClick">Cancel</button>
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

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
</style>
