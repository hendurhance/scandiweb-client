<template>
    <div>
        <BaseHeader :title="'Product Add'" :button-mode="'add'" @submit-form="submitForm()" />
        <section>
            <div class="form-wrapper">
                <form id="product_form">
                    <div class="form-group">
                        <label for="sku">SKU</label>
                        <input type="text" id="sku" name="sku" placeholder="Enter product SKU" />
                        <span class="error-message">{{ errors.sku }}</span>
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter product name" />
                        <span class="error-message">{{ errors.name }}</span>
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" id="price" name="price" placeholder="Enter product price" />
                        <span class="error-message">{{ errors.price }}</span>
                    </div>
                    <div class="form-group">
                        <label for="type">Type Switcher</label>
                        <select id="productType" name="type" v-model="selectedProductType" @change="handleProductTypeChange">
                            <option value="dvd">DVD</option>
                            <option value="book">Book</option>
                            <option value="furniture">Furniture</option>
                        </select>
                        <span class="error-message">{{ errors.type }}</span>
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'dvd'">
                        <label for="size">Size</label>
                        <input type="number" id="size" name="size" placeholder="Enter product size in MB" />
                        <span class="error-message">{{ errors.size }}</span>
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'book'">
                        <label for="weight">Weight</label>
                        <input type="number" id="weight" name="weight" placeholder="Enter product weight in KG" />
                        <span class="error-message">{{ errors.weight }}</span>
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'furniture'">
                        <label for="width">Width</label>
                        <input type="number" id="width" name="width" placeholder="Enter product width in CM" />
                        <span class="error-message">{{ errors.width }}</span>
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'furniture'">
                        <label for="length">Length</label>
                        <input type="number" id="length" name="length" placeholder="Enter product length in CM" />
                        <span class="error-message">{{ errors.length }}</span>
                    </div>
                    <div class="form-group" v-if="selectedProductType === 'furniture'">
                        <label for="height">Height</label>
                        <input type="number" id="height" name="height" placeholder="Enter product height in CM" />
                        <span class="error-message">{{ errors.height }}</span>
                    </div>
                    <span>{{ productTypeMessage }}</span>
                </form>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import BaseHeader from "../components/base/BaseHeader.vue";
import useProductFormValidation from "../composables/useProductFormValidation";
import useProductTypeHandler from "../composables/useProductTypeHandler";
import config from "../config";
export default defineComponent({
    components: {
        BaseHeader,
    },
    setup() {
        // Use the useProductFormValidation and useProductTypeHandler composables
        const { errors, validateForm, resetFormEntries } = useProductFormValidation();
        const { selectedProductType, handleProductTypeChange, productTypeMessage } = useProductTypeHandler();

        // Define the API URL
        const apiURL = config.api.baseUrl;
        const router = useRouter();

        const submitForm = () => {
            const form = document.getElementById("product_form") as HTMLFormElement;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            validateForm(data);

            if (Object.keys(errors.value).length === 0) {
                fetch(`${apiURL}/products/store`, {
                    method: "POST",
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status === "success") {
                            resetFormEntries(Object.fromEntries(formData.entries()));
                            router.push('/');
                        } else {
                            errors.value.sku = data.message;
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            } else {
                throw new Error("Form is invalid");
            }
        };

        return {
            selectedProductType,
            handleProductTypeChange,
            submitForm,
            productTypeMessage,
            errors,
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

.error-message {
    margin-top: .25rem;
    font-size: .8rem;
    color: rgb(171, 0, 0);
}
</style>