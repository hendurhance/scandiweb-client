<template>
    <div>
      <BaseHeader :title="'Product Add'" :button-mode="'add'" />
        <section>
            <div class="form-wrapper">
                <form id="product_form">
                    <div class="form-group">
                        <label for="sku">SKU</label>
                        <input type="text" id="sku" name="sku" />
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="text" id="price" name="price" />
                    </div>
                    <div class="form-group">
                        <label for="productType">Type Switcher</label>
                        <select id="productType" name="productType">
                            <option value="dvd">DVD</option>
                            <option value="book">Book</option>
                            <option value="furniture">Furniture</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="size">Size</label>
                        <input type="text" id="size" name="size" />
                    </div>
                    <div class="form-group">
                        <label for="height">Height</label>
                        <input type="text" id="height" name="height" />
                    </div>
                    <div class="form-group">
                        <label for="width">Width</label>
                        <input type="text" id="width" name="width" />
                    </div>
                    <div class="form-group">
                        <label for="length">Length</label>
                        <input type="text" id="length" name="length" />
                    </div>
                    <div class="form-group">
                        <label for="weight">Weight</label>
                        <input type="text" id="weight" name="weight" />
                    </div>
                </form>
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
    setup() {}
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

input, select {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #eaeaea;
}


</style>