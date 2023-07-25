<template>
    <div>
        <BaseHeader :title="'Product List'" :button-mode="'list'" @mass-delete="massDelete()" />
        <section>
            <div class="product-grid">
                <ProductItem v-for="product in products" :key="product.id" :product="(product as Product)" />
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

        const massDelete = () => {
            const checkboxes = document.querySelectorAll('.delete-checkbox');
            const skusToDelete: string[] = [];
            checkboxes.forEach((checkbox) => {
                const checked = checkbox.getAttribute('value');
                if (checked === 'true') {
                    skusToDelete.push(checkbox.getAttribute('data-skuid') as string);
                }
            });
            const skusToDeleteString = skusToDelete.join(',');

            fetch(`${apiURL}/products/delete?sku=${skusToDeleteString}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "text/plain",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 'success') {
                        window.location.reload();
                    }
                });
        };
        onMounted(() => {
            fetch(`${apiURL}/products`)
                .then((response) => response.json())
                .then((data) => {
                    products.value = data.data as Product[];
                });
        });
        return {
            products,
            massDelete,
        }
    }
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