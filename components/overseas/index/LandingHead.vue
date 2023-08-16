<template>
    <div class="relative lg:h-[600px]">
        
        <img class="absolute z-0 top-i0 left-0 w-full h-full object-cover object-center" src="@/assets/img/landing-bg.jpg" alt="">
        <div class="bg-deco absolute z-0 top-24 left-0 w-full bottom-0 lg:top-0 lg:left-auto lg:right-0 lg:h-full lg:w-3/5 xl:w-1/2 bg-primary opacity-80"></div>

        <div class="container mx-auto px-4 py-10 pb-20 lg:pb-0 lg:py-40 relative z-10 flex flex-col lg:flex-row justify-between text-white">
            <h1 class="text-dark-blue text-4xl lg:text-7xl font-light tracking-widest">海外債券專區</h1>
            <div class="lg:max-w-[360px] mt-24 lg:mt-0 lg:ml-10">
                <img src="@/assets/img/icon-kv-money.svg" alt="凱基債券產品">
                <h2 class="text-2xl font-medium mt-2">凱基債券產品</h2>
                <p class="text-base font-normal leading-6 mt-5">債券由全球政府、跨國銀行或知名企業發行。定期付息，到期返還 100% 面額的資金，非常適合強調穩健收益的投資人。</p>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    .bg-deco {
        clip-path: polygon(0 64px, 100% 0, 100% 100%, 0 100%);

        @media (min-width: 1024px) {
            clip-path: polygon(240px 0, 100% 0, 100% 100%, 0 100%);
        }
    }
</style>
