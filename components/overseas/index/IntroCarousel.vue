<template>
    <div class="relative mx-4 lg:container lg:px-10 lg:mx-auto">

        <div class="flex carousel mt-20" @scroll='handleCarouselScroll'>
            <div v-for="(item, index) in items" :key="index" :id="`item${index + 1}`" 
                class="carousel-item w-full relative box-border flex-col lg:flex-row-reverse lg:items-start"
            >
                <img :src="item.imgSrc" class="w-full rounded-2xl lg:ml-14" />
                <div class="mt-6 lg:mt-0">
                    <div class="text-5xl font-light text-primary">{{ (index + 1).toString().padStart(2, '0') }}</div>
                    <h3 class="text-3xl font-medium text-black mt-5">{{ item.title }}</h3>
                    <p class="text-base text-black mt-3">{{ item.description }}</p>
                </div>

            </div>
        </div>

        <div class="flex justify-center w-full py-2 gap-2 mt-3 lg:absolute lg:bottom-0 lg:left-10 lg:w-auto">
            <a v-for="(item, index) in items" :key="index" :href="`#item${index + 1}`" :id="`#item${index + 1}`" 
                :data-active="activeIndex === index"
                class="w-7 h-2 rounded-full bg-gray-2 border-0 data-[active=true]:bg-primary data-[active=true]:w-12 transition-all"
            ></a>
        </div>

    </div>
</template>

<script lang="ts" setup>

const { activeIndex, handleCarouselScroll } = useCarousel();

// TODO: 需要更換為真實資料
const items = ref([
    {
        imgSrc: '/img/fake-img-index-carousel-1.jpg',
        title: '債券主要組成部分',
        description: '債券由全球政府、跨國銀行或知名企業發行。定期付息，到期返還 100% 面額的資金，非常適合強調穩健收益的投資人。',
    },
    {
        imgSrc: '/img/fake-img-index-carousel-1.jpg',
        title: '債券主要組成部分',
        description: '債券由全球政府、跨國銀行或知名企業發行。定期付息，到期返還 100% 面額的資金，非常適合強調穩健收益的投資人。',
    },
]);

</script>

<style scoped></style>
