<template>
    <div>
        <BaseHeader :title="'Product Add'" :button-mode="'add'" @submit-form="submitForm()" />
        <section>
            <div class="form-wrapper">
                <form id="product_form">
                    <div class="form-group">
                        <label for="sku">SKU</label>
                        <input type="text" id="sku" name="sku" placeholder="Enter product SKU" />
                        <span>{{ errors.sku }}</span>
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter product name" />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" id="price" name="price" placeholder="Enter product price" />
                    </div>
                    <div class="form-group">
                        <label for="productType">Type Switcher</label>
                        <select id="productType" name="productType" v-model="selectedProductType"
                            @change="handleProductTypeChange">
                            <option value="dvd">DVD</option>
                            <option value="book">Book</option>
                            <option value="furniture">Furniture</option>
                        </select>
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'dvd'">
                        <label for="size">Size</label>
                        <input type="text" id="size" name="size" placeholder="Enter product size in MB" />
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'book'">
                        <label for="height">Height</label>
                        <input type="text" id="height" name="height" placeholder="Enter product height in CM" />
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'furniture'">
                        <label for="width">Width</label>
                        <input type="text" id="width" name="width" placeholder="Enter product width in CM" />
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'furniture'">
                        <label for="length">Length</label>
                        <input type="text" id="length" name="length" placeholder="Enter product length in CM" />
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'furniture'">
                        <label for="weight">Weight</label>
                        <input type="text" id="weight" name="weight" placeholder="Enter product weight in KG" />
                    </div>
                    <span>{{ productTypeMessage }}</span>
                </form>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseHeader from "../components/base/BaseHeader.vue";
// interface FormErrors {
//     [key: string]: string | null;
// }

export default defineComponent({
    components: {
        BaseHeader,
    },
    setup() {
        const selectedProductType = ref("dvd");
        const productTypeMessage = ref("Please provide size in MB as decimal number.");

        const handleProductTypeChange = (event: Event) => {
            const target = event.target as HTMLSelectElement;
            selectedProductType.value = target.value;
            if (target.value === "dvd") {
                productTypeMessage.value = "Please, provide size in MB as decimal number.";
            } else if (target.value === "book") {
                productTypeMessage.value = "Please, provide weight in KG as decimal number.";
            } else if (target.value === "furniture") {
                productTypeMessage.value = "Please, provide dimensions in HxWxL format.";
            }
        };

        const validateForm = () => {
            const form = document.getElementById("product_form") as HTMLFormElement;
        }

        const submitForm = () => {
            const form = document.getElementById("product_form") as HTMLFormElement;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log(data);
        };

        return {
            selectedProductType,
            handleProductTypeChange,
            submitForm,
            productTypeMessage,
        };
    },
});
</script>

<style scoped lang="scss">
.form-wrapper {
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #eaeaea;
    border-radius: 0.25rem;
}

form {
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
}

label {
    font-weight: 400;
    margin-bottom: 0.5rem;
}

input,
select {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #eaeaea;
}
</style>