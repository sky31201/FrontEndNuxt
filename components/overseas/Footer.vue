<!-- 頁面置底說明 -->
<template>
    <div class="w-full">
        <div class="bg-[#f0f4f7] w-full">
            <p class="px-10 py-5 text-center">
                本網頁之報價資訊係由嘉實提供，其提供之資訊，僅係一般性參考用途，且不保證正確性，請勿視為買賣有價證券等金融商品之投資建議。
            </p>
        </div>
        <div :class="`bg-dark-blue px-4 py-14 ${needPaddingBottom ? 'pb-28 md:pb-14' : ''}`">
            <!-- 電話客服 -->
            <div class="flex flex-wrap text-base flex-col leading-6 md:flex-row md:justify-center">
                <h4 class="text-white text-xl mb-4 md:text-base md:mb-0">凱基證券股份有限公司</h4>
                <div class="w-[20px] h-[20px] text-white px-4 hidden md:block">|</div>
                <span class="text-white">客服專線：
                    <a class="text-white" href="tel:0223890088">(02)2389-0088</a>
                </span>
                <div class="w-[20px] h-[20px] text-white px-4 hidden md:block">|</div>
                <a class="text-white" href="tel:0800085005">0800-085-005</a>
            </div>
            <!-- 地址 -->
            <div class="flex justify-center text-base py-2 flex-col md:flex-row md:justify-center">
                <p class="text-white">地址：台北市明水路700號</p>
                <div class="w-[20px] h-[20px] text-white px-4 hidden md:block">|</div>
                <span class="text-white">107年金管證總字第0051號</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute();
    const needPaddingBottom = computed(() => route.matched[0]?.path !== '/overseas');
</script>

<style scoped></style>
