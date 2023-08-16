const isLogin = ref(false);

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to.name);
  if (to.path.toLowerCase().includes('margindeposit')) {
    // TODO: 加入登入判斷
    if (process.client) {
      if (to.query.token) {
        isLogin.value = true;
      }
    }
    if (!isLogin.value) {
      console.log(to.name, '未登入跳到錯誤頁');
      return navigateTo('/loginError');
    }
  }
});