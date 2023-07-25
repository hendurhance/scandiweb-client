
import { ref } from "vue";

interface FormErrors {
  sku?: string | null;
  name?: string | null;
  price?: string | null;
  type?: string | null;
  size?: string | null;
  height?: string | null;
  width?: string | null;
  length?: string | null;
  weight?: string | null;
}

export default function useProductFormValidation() {
  const errors = ref<FormErrors>({});

  const validateForm = (data: any) => {
    errors.value = {};

    if (data.sku === "") {
      errors.value.sku = "SKU is required";
    }

    if (data.name === "") {
      errors.value.name = "Name is required";
    }

    if (data.price === "") {
      errors.value.price = "Price is required";
    }

    if (data.type === "") {
      errors.value.type = "Product type is required";
    }

    if (data.type === "dvd" && data.size === "") {
      errors.value.size = "Size is required";
    }

    if (data.type === "book" && data.weight === "") {
      errors.value.weight = "Weight is required";
    }

    if (data.type === "furniture" && data.height === "") {
      errors.value.height = "Height is required";
    }

    if (data.type === "furniture" && data.width === "") {
      errors.value.width = "Width is required";
    }

    if (data.type === "furniture" && data.length === "") {
      errors.value.length = "Length is required";
    }
  };

  const resetFormEntries = (data: any) => {
    data.sku = "";
    data.name = "";
    data.price = "";
    data.type = "";
    data.size = "";
    data.height = "";
    data.width = "";
    data.length = "";
    data.weight = "";
    errors.value = {};
  }

  return {
    errors,
    validateForm,
    resetFormEntries
  };
}