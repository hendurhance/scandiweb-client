import { ref } from "vue";

export default function useProductTypeHandler() {
  const selectedProductType = ref("dvd");
  const productTypeMessage = ref("Please provide size in MB as decimal number.");

  const handleProductTypeChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedProductType.value = target.value;

    switch (target.value) {
      case "dvd":
        productTypeMessage.value = "Please, provide size in MB as decimal number.";
        break;
      case "book":
        productTypeMessage.value = "Please, provide weight in KG as decimal number.";
        break;
      case "furniture":
        productTypeMessage.value = "Please, provide dimensions in HxWxL format.";
        break;
      default:
        productTypeMessage.value = ""; // Add a default case to handle other values if needed
    }
  };

  return {
    selectedProductType,
    handleProductTypeChange,
    productTypeMessage,
  };
}