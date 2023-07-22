<template>
    <div>
        <BaseHeader :title="'Product List'" :button-mode="'list'" />
        <section>
            <div class="product-grid">
                <div class="product-item">
                    <div class="item-details">
                        <p>SKU001</p>
                        <p>Product 1</p>
                        <p>15.00 $</p>
                        <p>Size: 70MB</p>
                        <input type="checkbox" class="delete-checkbox">
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-details">
                        <p>SKU001</p>
                        <p>Product 1</p>
                        <p>15.00 $</p>
                        <p>Size: 70MB</p>
                        <input type="checkbox" class="delete-checkbox">
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-details">
                        <p>SKU001</p>
                        <p>Product 1</p>
                        <p>15.00 $</p>
                        <p>Size: 70MB</p>
                        <input type="checkbox" class="delete-checkbox">
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-details">
                        <p>SKU001</p>
                        <p>Product 1</p>
                        <p>15.00 $</p>
                        <p>Size: 70MB</p>
                        <input type="checkbox" class="delete-checkbox">
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-details">
                        <p>SKU001</p>
                        <p>Product 1</p>
                        <p>15.00 $</p>
                        <p>Size: 70MB</p>
                        <input type="checkbox" class="delete-checkbox">
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-details">
                        <p>SKU001</p>
                        <p>Product 1</p>
                        <p>15.00 $</p>
                        <p>Size: 70MB</p>
                        <input type="checkbox" class="delete-checkbox">
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-details">
                        <p>SKU001</p>
                        <p>Product 1</p>
                        <p>15.00 $</p>
                        <p>Size: 70MB</p>
                        <input type="checkbox" class="delete-checkbox">
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseHeader from "../components/base/BaseHeader.vue";

export default defineComponent({
    components: {
        BaseHeader,
    },
});
</script>

<style lang="scss" scoped >
section {
    padding: 2rem 1em;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
}

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
    left: -5rem;
}

.item-details p {
    margin: 0.5rem 0;
}

@media screen and (max-width: 1024px) {
    .product-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 768px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 480px) {
    .product-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>