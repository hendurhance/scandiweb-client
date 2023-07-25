<template>
    <div>
        <BaseHeader :title="'Product List'" :button-mode="'list'" @mass-delete="massDelete()" />
        <section>
            <div v-if="isLoading" class="loading-indicator">Loading...</div>
            <div v-else class="product-grid">
                <ProductItem v-for="product in products" :key="product.id" :product="product" />
            </div>
        </section>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import BaseHeader from "../components/base/BaseHeader.vue";
import ProductItem from "../components/products/ProductItem.vue";
import config from '../config/index';
import Product from "../types/product.type";

export default defineComponent({
    components: {
        BaseHeader,
        ProductItem,
    },
    setup() {
        const apiURL = config.api.baseUrl;
        const products = ref<Product[]>([]);
        const isLoading = ref(true);

        const fetchProducts = async () => {
            try {
                const response = await fetch(`${apiURL}/products`);
                const data = await response.json();
                products.value = data.data as Product[];
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                isLoading.value = false;
            }
        };

        const massDelete = async () => {
            const checkboxes = document.querySelectorAll('.delete-checkbox');
            const skus: string[] = [];

            checkboxes.forEach((checkbox) => {
                const inputElement = checkbox as HTMLInputElement;
                if (inputElement.checked) {
                    skus.push(inputElement.dataset.skuid as string);
                }
            });

            try {
                const response = await fetch(`${apiURL}/products/delete?sku=${skus.join(',')}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "text/plain",
                    },
                });
                const data = await response.json();
                if (data.status === 'success') {
                    await fetchProducts();
                }
            } catch (error) {
                console.error("Error deleting products:", error);
            }
        };

        onMounted(async () => {
            await fetchProducts();
        });

        return {
            products,
            massDelete,
            isLoading,
        };
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

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.loading-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>