// 模拟视频数据
const videoData = [
  {
    id: 1,
    title: '【动画】超燃！年度最强动画混剪',
    cover: 'img/1.png',
    playCount: '12.3万',
    duration: '05:32',
    avatar: 'up1.jpg',
    upName: '动画区UP主'
  },
  {
    id: 2,
    title: '【音乐】钢琴版《起风了》，太好听了！',
    cover: 'img/2.png',
    playCount: '8.7万',
    duration: '03:45',
    avatar: 'up2.jpg',
    upName: '音乐制作人'
  },
  {
    id: 3,
    title: '【游戏】艾尔登法环 DLC 终于来了！',
    cover: 'img/3.png',
    playCount: '25.6万',
    duration: '12:18',
    avatar: 'up3.jpg',
    upName: '游戏实况主'
  },
  {
    id: 4,
    title: '【科技】iPhone 16 首发测评',
    cover: 'img/4.png',
    playCount: '18.9万',
    duration: '15:42',
    avatar: 'up4.jpg',
    upName: '科技评测君'
  },
  {
    id: 5,
    title: '【生活】挑战100天早起计划Day1',
    cover: 'img/5.png',
    playCount: '5.2万',
    duration: '08:23',
    avatar: 'up5.jpg',
    upName: '生活vlogger'
  },
  {
    id: 6,
    title: '【鬼畜】究极缝合怪！这也太上头了',
    cover: 'img/6.png',
    playCount: '45.8万',
    duration: '02:56',
    avatar: 'up6.jpg',
    upName: '鬼畜达人'
  },
  {
    id: 7,
    title: '【动画】四月新番导视，持续更新中',
    cover: 'img/7.png',
    playCount: '9.3万',
    duration: '10:15',
    avatar: 'up7.jpg',
    upName: '番剧导航员'
  },
  {
    id: 8,
    title: '【音乐】10分钟睡前助眠白噪音',
    cover: 'img/8.png',
    playCount: '32.1万',
    duration: '10:00',
    avatar: 'up8.jpg',
    upName: '助眠音乐家'
  }
]

// 渲染视频列表
function renderVideoList() {
  const videoList = document.getElementById('videoList')
  
  const html = videoData.map(video => `
    <li class="video-card" data-id="${video.id}">
      <div class="cover">
        <img src="${video.cover}" alt="${video.title}">
        <span class="play-count">▶ ${video.playCount}</span>
        <span class="duration">${video.duration}</span>
      </div>
      <div class="info">
        <h4 class="title">${video.title}</h4>
        <div class="up-info">
          <img class="avatar" src="${video.avatar}" alt="">
          <span class="up-name">${video.upName}</span>
        </div>
      </div>
    </li>
  `).join('')
  
  videoList.innerHTML = html
}

// 页面加载完成后渲染
document.addEventListener('DOMContentLoaded', renderVideoList)

// ========== 换一换刷新功能 ==========
const refreshBtn = document.getElementById('refreshBtn')

refreshBtn.addEventListener('click', function() {
  // 添加旋转动画
  this.classList.add('spinning')
  
  // 模拟加载效果 - 随机打乱数据顺序
  const shuffled = [...videoData].sort(() => Math.random() - 0.5)
  const shuffledVideoData = shuffled.slice(0, 8)
  
  // 重新渲染视频列表
  renderVideoListWithData(shuffledVideoData)
  
  // 动画结束后移除类
  setTimeout(() => {
    this.classList.remove('spinning')
  }, 500)
})

// 支持传入数据的新渲染函数
function renderVideoListWithData(data) {
  const videoList = document.getElementById('videoList')
  
  const html = data.map(video => `
    <li class="video-card" data-id="${video.id}">
      <div class="cover">
        <img src="${video.cover}" alt="${video.title}">
        <span class="play-count">▶ ${video.playCount}</span>
        <span class="duration">${video.duration}</span>
      </div>
      <div class="info">
        <h4 class="title">${video.title}</h4>
        <div class="up-info">
          <img class="avatar" src="${video.avatar}" alt="">
          <span class="up-name">${video.upName}</span>
        </div>
      </div>
    </li>
  `).join('')
  
  videoList.innerHTML = html
}