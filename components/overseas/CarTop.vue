<template>
    <div class='sticky top-0 md:top-20 lg:top-24 xl:top-0 h-0 z-50 transition-all 
        data-[hidden=true]:-translate-y-16 data-[hidden=true]:opacity-0 data-[hidden=true]:pointer-events-none' :data-hidden='hidden'
    >
        <button class="absolute top-5 right-4 bg-white rounded-lg cart-button-shadow p-4" @click="showCar" >
            <svg width="26" height="22" viewBox="0 0 26 22" class="relative left-[-2px] top-[2px]">
                <path d="M1,1H5.429L9.513,17.306H22.248" transform="translate(-0.008 -0.008)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="M6.312,4.382H25.059l-2.353,9.495H8.689Z" transform="translate(-0.05 -0.038)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line x1="16.413" transform="translate(7.45 8.964)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line y2="9.159" transform="translate(15.657 4.318)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line x1="1.395" y2="9.159" transform="translate(19.186 4.318)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <line x2="1.395" y2="9.159" transform="translate(10.73 4.318)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="Path_48" d="M12.6,20.668a1.5,1.5,0,1,1-1.5-1.5,1.5,1.5,0,0,1,1.5,1.5" transform="translate(-0.077 -0.166)" />
                <path id="Path_49" d="M21.976,20.668a1.5,1.5,0,1,1-1.5-1.5,1.5,1.5,0,0,1,1.5,1.5" transform="translate(-0.151 -0.166)" />
            </svg>
            <div class="absolute top-1 right-1 px-1.5 py-0.5 bg-orange rounded-full text-xs text-white">{{ cartItemCount }}</div>
        </button>
    </div>

    <div class="flex flex-col justify-center fixed z-50 top-[200px] right-3">
        <!-- Overlay element -->
        <div id="overlay" v-show="isShowCar" class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"></div>

        <!-- 購物車列表 -->
        <div id="dialog" v-show="isShowCar" class="fixed z-50 top-1 right-1 h-full bg-white px-8 py-6 drop-shadow-lg test
      lg:w-[565px]
      md:w-[365px]
      sm:w-[365px]
      ">
            <div class="flex flex-row items-center justify-center">
                <div>
                    <img class="p-3" src="@/assets/img/ico_cart_b.svg" alt="top" />
                </div>
                <div>
                    <h1 class="text-2xl font-semibold text-[#04327a] px-1">購物車</h1>
                </div>
                <div class="p-2">
                    <img class="w-6 h-4" src="@/assets/img/ico_account.png" alt="top" />
                </div>
                <div>
                    <select id="cartSelUserId" class="border" style="width: 150px; display: inline">
                        <option value="P100836638" selected>P10083****</option>
                    </select>
                </div>
            </div>
            <div class="flex items-center border">
                <div class="basis-2/3 p-2">
                    <button class="text-2xl font-bold text-[#0B1156]">
                        台股 (定期定額/自訂組合)
                    </button>
                </div>
                <div class="basis-1/3 text-right pr-2">
                    <span class="bg-[#E329CD] w-8 h-8 p-1 text-center text-white rounded-lg text-xl">0</span>
                </div>
            </div>
            <div class="flex items-center border">
                <div class="basis-2/3 p-2">
                    <button class="text-2xl font-bold text-[#0B1156]">
                        美股 (定期定額/自訂組合)
                    </button>
                </div>
                <div class="basis-1/3 text-right pr-2">
                    <span class="bg-[#E329CD] w-8 h-8 p-1 text-center text-white rounded-lg text-xl">0</span>
                </div>
            </div>
            <button class="fixed bg-[#04327a]  top-[50%] w-8 h-16 text-white
        lg:right-[665px]
        sm:right-[65px]
        " @click="showCar">
                <img class="items-center justify-center p-2" src="@/assets/img/ico_arrow_4.png" alt="" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    // TODO: 串入購物車數字
    const cartItemCount = ref(0);
    const isShowCar = ref(false)
    const showCar = () => {
        isShowCar.value = !isShowCar.value
    }

    const hidden = ref(false);

    const handleScroll = () => {
        hidden.value = window.scrollY < 132;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

</script>

<style scoped>
.test {
    animation: appear 0.5s cubic-bezier(0, 1.8, 1, 1.8);
}

.cart-button-shadow {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.test::backdrop {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(54, 54, 54, 0.5));
    backdrop-filter: blur(3px);
}

@keyframes appear {
    from {
        opacity: 0;
        transform: translateX(12rem);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
