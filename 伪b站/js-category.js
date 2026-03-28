// 分类标签切换功能
document.addEventListener('DOMContentLoaded', function() {
  const categoryItems = document.querySelectorAll('.category-item')
  const videoList = document.getElementById('videoList')
  
  // 不同分类的模拟数据
  const categoryData = {
    '全部': [
      { id: 1, title: '【动画】超燃！年度最强动画混剪', cover: 'video1.jpg', playCount: '12.3万', duration: '05:32', avatar: 'up1.jpg', upName: '动画区UP主' },
      { id: 2, title: '【音乐】钢琴版《起风了》', cover: 'video2.jpg', playCount: '8.7万', duration: '03:45', avatar: 'up2.jpg', upName: '音乐制作人' },
      { id: 3, title: '【游戏】艾尔登法环 DLC', cover: 'video3.jpg', playCount: '25.6万', duration: '12:18', avatar: 'up3.jpg', upName: '游戏实况主' },
      { id: 4, title: '【科技】iPhone 16 首发测评', cover: 'video4.jpg', playCount: '18.9万', duration: '15:42', avatar: 'up4.jpg', upName: '科技评测君' },
      { id: 5, title: '【生活】挑战100天早起计划', cover: 'video5.jpg', playCount: '5.2万', duration: '08:23', avatar: 'up5.jpg', upName: '生活vlogger' },
      { id: 6, title: '【鬼畜】究极缝合怪！', cover: 'video6.jpg', playCount: '45.8万', duration: '02:56', avatar: 'up6.jpg', upName: '鬼畜达人' },
      { id: 7, title: '【动画】四月新番导视', cover: 'video7.jpg', playCount: '9.3万', duration: '10:15', avatar: 'up7.jpg', upName: '番剧导航员' },
      { id: 8, title: '【音乐】10分钟睡前白噪音', cover: 'video8.jpg', playCount: '32.1万', duration: '10:00', avatar: 'up8.jpg', upName: '助眠音乐家' }
    ],
    '游戏': [
      { id: 11, title: '【游戏】原神 4.0 新版本实况', cover: 'game1.jpg', playCount: '156.2万', duration: '45:30', avatar: 'up11.jpg', upName: '原神区UP' },
      { id: 12, title: '【游戏】王者荣耀 赛季末冲分', cover: 'game2.jpg', playCount: '89.5万', duration: '32:15', avatar: 'up12.jpg', upName: '王者荣耀主播' },
      { id: 13, title: '【游戏】我的世界 建筑教学', cover: 'game3.jpg', playCount: '45.8万', duration: '28:42', avatar: 'up13.jpg', upName: '建筑大师' },
      { id: 14, title: '【游戏】CSGO 精彩集锦', cover: 'game4.jpg', playCount: '23.1万', duration: '15:20', avatar: 'up14.jpg', upName: 'CSGO解说' },
      { id: 15, title: '【游戏】塞尔达传说 攻略', cover: 'game5.jpg', playCount: '67.3万', duration: '38:55', avatar: 'up15.jpg', upName: '任豚玩家' },
      { id: 16, title: '【游戏】永劫无间 教学', cover: 'game6.jpg', playCount: '34.2万', duration: '22:18', avatar: 'up16.jpg', upName: '永劫无间UP' }
    ],
    '音乐': [
      { id: 21, title: '【音乐】周杰伦新歌首发', cover: 'music1.jpg', playCount: '234.5万', duration: '04:32', avatar: 'up21.jpg', upName: '音乐现场' },
      { id: 22, title: '【音乐】钢琴曲合集', cover: 'music2.jpg', playCount: '78.9万', duration: '60:00', avatar: 'up22.jpg', upName: '钢琴达人' },
      { id: 23, title: '【音乐】古风歌曲精选', cover: 'music3.jpg', playCount: '56.7万', duration: '03:45', avatar: 'up23.jpg', upName: '古风音乐人' }
    ],
    '知识': [
      { id: 31, title: '【知识】Python入门教程', cover: 'study1.jpg', playCount: '189.3万', duration: '120:00', avatar: 'up31.jpg', upName: '编程讲师' },
      { id: 32, title: '【知识】数据结构与算法', cover: 'study2.jpg', playCount: '98.7万', duration: '90:00', avatar: 'up32.jpg', upName: '算法工程师' },
      { id: 33, title: '【知识】英语四六级备考', cover: 'study3.jpg', playCount: '45.2万', duration: '45:30', avatar: 'up33.jpg', upName: '英语老师' }
    ],
    '动画': [
      { id: 41, title: '【动画】四月新番导视', cover: 'anime1.jpg', playCount: '123.4万', duration: '25:00', avatar: 'up41.jpg', upName: '番剧解说' },
      { id: 42, title: '【动画】经典动画回忆杀', cover: 'anime2.jpg', playCount: '89.6万', duration: '18:45', avatar: 'up42.jpg', upName: '怀旧动画' }
    ],
    '生活': [
      { id: 51, title: '【生活】Vlog日常记录', cover: 'life1.jpg', playCount: '34.5万', duration: '15:30', avatar: 'up51.jpg', upName: '生活博主' },
      { id: 52, title: '【生活】美食制作教程', cover: 'life2.jpg', playCount: '67.8万', duration: '12:00', avatar: 'up52.jpg', upName: '美食UP主' }
    ],
    '娱乐': [
      { id: 61, title: '【娱乐】搞笑合集', cover: 'fun1.jpg', playCount: '234.1万', duration: '10:00', avatar: 'up61.jpg', upName: '欢乐源泉' }
    ],
    '科技': [
      { id: 71, title: '【科技】最新数码测评', cover: 'tech1.jpg', playCount: '89.3万', duration: '20:00', avatar: 'up71.jpg', upName: '数码测评' },
      { id: 72, title: '【科技】AI技术解析', cover: 'tech2.jpg', playCount: '56.7万', duration: '25:00', avatar: 'up72.jpg', upName: '科技前沿' }
    ]
  }
  
  // 渲染视频列表
  function renderVideoList(data) {
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
            <span class="up-tag">UP</span>
            <span class="up-name">${video.upName}</span>
          </div>
        </div>
      </li>
    `).join('')
    
    videoList.innerHTML = html
  }
  
  // 标签点击事件
  categoryItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault()
      
      // 移除所有active
      categoryItems.forEach(el => el.classList.remove('active'))
      
      // 添加当前active
      this.classList.add('active')
      
      // 获取分类名
      const categoryName = this.querySelector('.category-name').textContent
      
      // 渲染对应分类的数据
      const data = categoryData[categoryName] || categoryData['全部']
      renderVideoList(data)
    })
  })
})