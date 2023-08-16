export default function useCartVisible() {
    const route = useRoute();
    const cartVisible = computed(() => route.matched[0]?.path.startsWith('/overseas/'));
    return cartVisible;
}