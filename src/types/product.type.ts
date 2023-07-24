export default interface Product {
    id: number;
    sku: string;
    name: string;
    price: number;
    type: string;
    size?: number | null;
    weight?: number | null;
    width?: number | null;
    height?: number | null;
    length?: number | null;
}