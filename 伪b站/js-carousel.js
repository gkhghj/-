class BannerSlider {
  constructor() {
    this.currentIndex = 0
    this.bannerList = document.querySelector('.banner-list')
    this.items = document.querySelectorAll('.banner-item')
    this.indicators = document.querySelectorAll('.banner-indicator li')
    this.prevBtn = document.querySelector('.banner-prev')
    this.nextBtn = document.querySelector('.banner-next')
    this.autoPlayInterval = null
    this.init()
  }

  init() {
    // 绑定事件
    this.prevBtn.addEventListener('click', () => this.prev())
    this.nextBtn.addEventListener('click', () => this.next())
    
    // 指示器点击
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goTo(index))
    })
    
    // 鼠标悬停暂停
    this.bannerList.addEventListener('mouseenter', () => this.stopAutoPlay())
    this.bannerList.addEventListener('mouseleave', () => this.startAutoPlay())
    
    // 自动播放
    this.startAutoPlay()
  }

  prev() {
    this.currentIndex = this.currentIndex === 0 
      ? this.items.length - 1 
      : this.currentIndex - 1
    this.update()
  }

  next() {
    this.currentIndex = this.currentIndex === this.items.length - 1 
      ? 0 
      : this.currentIndex + 1
    this.update()
  }

  goTo(index) {
    this.currentIndex = index
    this.update()
  }

  update() {
    // 移动轮播图
    this.bannerList.style.transform = `translateX(-${this.currentIndex * 100}%)`
    
    // 更新指示器
    this.indicators.forEach((item, index) => {
      item.classList.toggle('active', index === this.currentIndex)
    })
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.next(), 3000)
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval)
  }
}

// 初始化轮播图
document.addEventListener('DOMContentLoaded', () => {
  new BannerSlider()
})