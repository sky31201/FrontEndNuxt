<template>
    <div class="mt-20 relative z-0">

        <h2 class="text-3xl text-center font-medium text-black">海外債券自選申購</h2>

        <div class="container mt-5  px-4 max-w-4xl mx-auto grid grid-cols-2 gap-5 lg:grid-cols-4">
            <!-- TODO: 需補上轉跳 -->
            <button v-for='(item, index) of buttons'
                @click="navigateTo(item.link !== '' ? item.link : '/overseas')"
                class="group/button flex flex-col items-center justify-center py-5 px-6 bg-white rounded-2xl shadow-lg text-center 
                    lg:py-8 lg:px-7
                    hover:bg-primary
                "
            >
                <div class="relative flex justify-center items-center w-20 h-20 bg-blue-grey rounded-full lg:w-28 lg:h-28">
                    <img class="w-full h-full" :src='item.icon' :alt='item.label'/>
                </div>
                <span class="text-lg font-medium text-primary mt-4 group-hover/button:text-white">{{ item.label }}</span>
            </button>
        </div>


    </div>
</template>

<script lang="ts" setup>
    import icon1 from '@/assets/img/icon-overseas-my-choice.svg';
    import icon2 from '@/assets/img/icon-overseas-purchase.svg';
    import icon3 from '@/assets/img/icon-overseas-view-all-bonds.svg';
    import icon4 from '@/assets/img/icon-overseas-open-account.svg';

    const buttons = [
        { label: '自選', icon: icon1, link: '' },
        { label: '申購', icon: icon2, link: '' },
        { label: '查看所有債券標的', icon: icon3, link: '/overseas/find' },
        { label: '立即開戶', icon: icon4, link: '' },
    ];



</script>

<style scoped></style>
