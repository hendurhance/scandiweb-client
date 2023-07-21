import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductListing from '../pages/ProductListing.vue'
import CreateProduct from '../pages/CreateProduct.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'ProductListing',
        component: ProductListing
    },
    {
        path: '/add-product',
        name: 'CreateProduct',
        component: CreateProduct
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;