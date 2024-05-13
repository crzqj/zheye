// 写一个hook 用于监听点击事件 判断是否点击在组件外面

import { ref, onMounted, onUnmounted, Ref } from 'vue'

export default function useClickOutside (elRef: Ref<null | HTMLElement>) {
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (elRef.value) {
      isClickOutside.value = !elRef.value.contains(e.target as HTMLElement)
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}
