<script lang="ts">
import { defineComponent, defineEmits } from 'vue';
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
    const emit = defineEmits(['submitForm']);

    const handleAddClick = () => {
      router.push('/add-product');
    };
    const handleCancelClick = () => {
      router.push('/');
    };

    return {
      handleAddClick,
      handleCancelClick,
      emit,
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
      <button @click="handleAddClick">Add</button>
      <button id="delete-product-btn">Mass Delete</button>
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
