// 登录弹窗控制
document.addEventListener('DOMContentLoaded', function() {
  const loginOverlay = document.getElementById('loginOverlay')
  const closeLoginBtn = document.getElementById('closeLogin')
  const loginTabs = document.querySelectorAll('.login-tab')
  const qrcodeArea = document.querySelector('.qrcode-area')
  const accountLogin = document.querySelector('.account-login')
  const loginBtn = document.querySelector('.login-btn')
  
  // 页面加载时自动弹出（如果是首次访问）
  function showLoginModal() {
    setTimeout(() => {
      loginOverlay.classList.add('show')
    }, 500) // 延迟0.5秒弹出
  }
  
  // 关闭弹窗
  function hideLoginModal() {
    loginOverlay.classList.remove('show')
  }
  
  // 点击关闭按钮
  closeLoginBtn.addEventListener('click', hideLoginModal)
  
  // 点击遮罩层关闭（点击外部区域）
  loginOverlay.addEventListener('click', function(e) {
    if (e.target === loginOverlay) {
      hideLoginModal()
    }
  })
  
  // ESC键关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && loginOverlay.classList.contains('show')) {
      hideLoginModal()
    }
  })
  
  // 登录标签切换
  loginTabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
      // 移除所有active
      loginTabs.forEach(t => t.classList.remove('active'))
      // 添加当前active
      this.classList.add('active')
      
      // 切换内容
      if (index === 0) {
        qrcodeArea.style.display = 'block'
        accountLogin.style.display = 'none'
      } else {
        qrcodeArea.style.display = 'none'
        accountLogin.style.display = 'block'
      }
    })
  })
  
  // 点击登录按钮打开弹窗
  if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault()
      loginOverlay.classList.add('show')
    })
  }
  
  // 初始化
  showLoginModal()
})