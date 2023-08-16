import ModalEnum from '@/models/ModalEnum';

export default interface Modal {
  /**
   * 是否顯示Modal
   */
  isShowModal: boolean
  /**
   * Modal標題
   */
  title: string
  /**
   * Modal內容
   */
  content: string
  /**
   * 是否顯示確定及取消按鈕
   */
  showButton: boolean

  modalType: ModalEnum
}