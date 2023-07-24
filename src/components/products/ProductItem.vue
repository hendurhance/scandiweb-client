<script lang="ts">
import { defineComponent } from 'vue';
import decimalToWholeNumber from '../../composables/decimalToWholeNumber';
import Product from '../../types/product.type';

export default defineComponent({
    name: 'ProductItem',
    props: {
        product: {
            type: Object as () => Product,
            required: true,
        },
    },

    setup(props) {
        return {
            product: props.product,
            decimalToWholeNumber
        }
    }
});
</script>
<template>
    <div class="product-item">
        <div class="item-details">
            <p>{{ product.sku }}</p>
            <p>{{ product.name }}</p>
            <p>{{ decimalToWholeNumber(product.price) }}$</p>
            <p v-if="product.type === 'dvd'">Size: {{ product.size }} MB</p>
            <p v-if="product.type === 'book'">Weight: {{ product.weight }} CM</p>
            <p v-if="product.type === 'furniture'">Dimensions: {{ product.width }}x{{ product.height }}x{{ product.length }}CM</p>
            <input type="checkbox" class="delete-checkbox">
        </div>
    </div>
</template>

<style scoped lang="scss">

.product-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background-color: var(--color-white);
    border-radius: 0.25rem;
    border: 2px solid #0d0d0d;
}

.item-details {
    text-align: center;
    position: relative;
    height: 100%;
}

.delete-checkbox {
    cursor: pointer;
    position: absolute;
    top: 0;
    height: 1rem;
    left: -15rem;
    right: 0;
}

.item-details p {
    margin: 0.5rem 0;
}

.item-details p::nth-child(4) {
    font-size: 0.5rem;
}
</style>