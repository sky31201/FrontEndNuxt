import Modal from '@/models/Modal';
import ModalEnum from '@/models/ModalEnum';
/**
 * Modal元件
 */
export const useModalStore = defineStore('modalStore', () => {

  /**
   * Modal資料
   */
  const modalData = ref<Modal>({ isShowModal: false, title: '', content: '', showButton: false, modalType: ModalEnum.Default })
  /**
   * 設置Modal組件是否顯示
   * @params 顯示Modal組件值
   */
  const setModalShow = (b: boolean): void => {
    modalData.value.isShowModal = b
  }
  return { setModalShow, modalData }
})