import Bond from '@/models/Overseas/Bond';

/**
 * 債券商品詳細 Modal 元件
 */
export const useBondDetailModalStore = defineStore('bondDetailModalStore', () => {

    /**
     * 債券商品資料
     */
    const modalBond = ref<Bond | null>(null);

    /**
     * 顯示債券商品詳細 Modal
     * @params 要顯示的債券商品
     */
    const showBondDetailModal = (bond: Bond): void => {
        modalBond.value = bond;
    }

    /**
     * 清除債券商品詳細 Modal
     */
    const clearBondDetailModal = (): void => {
        modalBond.value = null;
    }

    return { modalBond, showBondDetailModal, clearBondDetailModal }
})