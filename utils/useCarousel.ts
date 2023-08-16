
export default function useCarousel(itemsSelector: string = '.carousel-item') {
    const activeIndex = ref(0);
    const isEnd = ref(false);
    const isStart = ref(true);

    function handleCarouselScroll(e: Event) {

        const container = e.currentTarget as HTMLDivElement;
        if (!container) return;

        const items = container.querySelectorAll(itemsSelector) as NodeListOf<HTMLDivElement>;
        const scrollPosition = container.scrollLeft;

        let currentIndex = 0;
        let minDistance = Infinity;

        items.forEach((item, index) => {
            const distance = Math.abs(item.offsetLeft - scrollPosition);
            const align = getComputedStyle(item).scrollSnapAlign;
            const isAligned = align === 'start' || align === 'center' || align === 'end';
            if (distance < minDistance && isAligned) {
                minDistance = distance;
                currentIndex = index;
            }
        });

        if (currentIndex !== activeIndex.value) {
            activeIndex.value = currentIndex;
        }
        if (isStart.value !== (scrollPosition === 0)) {
            isStart.value = scrollPosition === 0;
        }
        if (isEnd.value !== (scrollPosition === container.scrollWidth - container.clientWidth)) {
            isEnd.value = scrollPosition === container.scrollWidth - container.clientWidth;
        }
    }

    return {
        activeIndex, isStart, isEnd, handleCarouselScroll
    }
}