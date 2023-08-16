<template>

    <div class="-mt-10 px-4 relative grid grid-cols-2 gap-4 md:grid-cols-4 max-w-[1100px] mx-auto md:sticky md:top-4" ref='headerButtons'>
        <button v-for='button of buttons' 
            class="p-4 rounded-2xl bg-white shadow-md text-primary flex items-center
                hover:bg-primary hover:text-white
            "
        >
            <div class="w-[40px] h-[40px] rounded-full bg-blue-grey flex-shrink-0 flex lg:w-[60px] lg:h-[60px]">
                <img :src='button.icon' :alt='button.label' class='lg:w-[60px] lg:h-[60px]'>
            </div>
            <span class="ml-2 text-lg font-bold text-left lg:text-xl lg:font-medium lg:flex-1 lg:text-center">{{ button.label }}</span>
        </button>
    </div>

    <div class='flex pt-2 pb-3 bg-white fixed w-full bottom-0 md:hidden data-[show=false]:translate-y-full transition-transform' ref='mobileBottomButtons' :data-show='mobileBottomButtonsShow'>
        <button v-for='button of buttons' class="flex-1 text-primary flex flex-col items-center">
            <div class="w-[40px] h-[40px] rounded-full bg-blue-grey flex-shrink-0 flex">
                <img :src='button.icon' :alt='button.label'>
            </div>
            <span class="mt-1 text-xs font-bold">{{ button.label }}</span>
        </button>
    </div>
</template>

<script lang="ts" setup>
    import icon1 from '@/assets/img/icon-overseas-find-find-bonds.svg';
    import icon2 from '@/assets/img/icon-overseas-find-trade-order-query.svg';
    import icon3 from '@/assets/img/icon-overseas-find-accounting-query.svg';
    import icon4 from '@/assets/img/icon-overseas-find-market-info.svg';

    const headerButtons = ref<HTMLDivElement>();
    const mobileBottomButtons = ref<HTMLDivElement>();
    const mobileBottomButtonsShow = ref(false);

    const buttons = [
        { label: '找債券', icon: icon1 },
        { label: '交易委託查詢', icon: icon2 },
        { label: '帳務查詢', icon: icon3 },
        { label: '市場資訊', icon: icon4 },
    ]

    const handleScroll = () => {
        const rect = headerButtons.value?.getBoundingClientRect();
        if (!rect) return;

        if (mobileBottomButtonsShow.value !== (rect.top + rect.height < 0)) {
            mobileBottomButtonsShow.value = rect.top + rect.height < 0;
        }   
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<style scoped></style>
