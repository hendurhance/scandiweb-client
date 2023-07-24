export default interface Product {
    id: number;
    sku: string;
    name: string;
    price: number;
    type: string;
    size?: number;
    weight?: number;
    width?: number;
    height?: number;
    length?: number;
}