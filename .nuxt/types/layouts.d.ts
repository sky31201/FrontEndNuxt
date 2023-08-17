import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "margindeposit" | "overseas"
declare module "/Users/matthew/Downloads/FrontEnd_Nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}