// 搜索建议弹窗功能
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput')
  const searchSuggestions = document.getElementById('searchSuggestions')
  const suggestionsList = document.getElementById('suggestionsList')
  
  // 模拟搜索建议数据
  const searchSuggestionsData = [
    '原神',
    'python教程',
    '王者荣耀',
    '数据结构与算法',
    '考研',
    'bilibili',
    '我的世界',
    'CSGO',
    '剪辑教程',
    '日语学习'
  ]
  
  // 搜索历史（从localStorage获取或默认）
  let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]')
  
  // 显示弹窗
  function showSuggestions() {
    searchSuggestions.classList.add('show')
  }
  
  // 隐藏弹窗
  function hideSuggestions() {
    searchSuggestions.classList.remove('show')
  }
  
  // 渲染搜索建议
  function renderSuggestions(keyword = '') {
    let filtered = searchSuggestionsData
    
    // 如果有关键词，过滤匹配项
    if (keyword) {
      filtered = searchSuggestionsData.filter(item => 
        item.toLowerCase().includes(keyword.toLowerCase())
      )
    }
    
    // 生成HTML
    const html = filtered.map(item => `
      <li><span class="icon">🔍</span><span class="text">${item}</span></li>
    `).join('')
    
    suggestionsList.innerHTML = html || '<li style="padding:12px 16px;color:#999;">暂无相关推荐</li>'
  }
  
  // 渲染搜索历史
  function renderSearchHistory() {
    if (searchHistory.length === 0) return ''
    
    return `
      <div class="search-history">
        <div class="search-history-title">
          <span>搜索历史</span>
          <span class="clear-history" id="clearHistory">清除</span>
        </div>
        <div class="search-history-list">
          ${searchHistory.slice(0, 5).map(item => 
            `<span class="history-tag">${item}</span>`
          ).join('')}
        </div>
      </div>
    `
  }
  
  // 添加到搜索历史
  function addToHistory(keyword) {
    if (!keyword.trim()) return
    
    // 去重并添加到开头
    searchHistory = [keyword, ...searchHistory.filter(item => item !== keyword)].slice(0, 10)
    
    // 保存到localStorage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
  }
  
  // 输入框聚焦
  searchInput.addEventListener('focus', function() {
    renderSuggestions()
    showSuggestions()
  })
  
  // 输入时搜索
  searchInput.addEventListener('input', function() {
    const keyword = this.value.trim()
    renderSuggestions(keyword)
    showSuggestions()
  })
  
  // 点击建议项
  suggestionsList.addEventListener('click', function(e) {
    const li = e.target.closest('li')
    if (li) {
      const text = li.querySelector('.text').textContent
      searchInput.value = text
      addToHistory(text)
      hideSuggestions()
      console.log('搜索:', text)
    }
  })
  
  // 点击历史标签
  suggestionsList.addEventListener('click', function(e) {
    if (e.target.classList.contains('history-tag')) {
      const text = e.target.textContent
      searchInput.value = text
      hideSuggestions()
      console.log('搜索历史:', text)
    }
  })
  
  // 清除历史
  document.addEventListener('click', function(e) {
    if (e.target.id === 'clearHistory') {
      searchHistory = []
      localStorage.removeItem('searchHistory')
      document.querySelector('.search-history').remove()
    }
  })
  
  // 点击外部关闭弹窗
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-wrapper')) {
      hideSuggestions()
    }
  })
  
  // 回车搜索
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const keyword = this.value.trim()
      if (keyword) {
        addToHistory(keyword)
        hideSuggestions()
        console.log('搜索:', keyword)
      }
    }
  })
})