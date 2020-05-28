// const host = 'http://qy29.mrxdtech.com/api/api/';  // 域名（地址公共部分）
const host = '/api/'; // 域名（地址公共部分）
const api = {
  getArticleType: host + 'article/classify', // 文章分类
  getArticleList: host + 'article/lists', // 文章列表
  getArticleDetail: host + 'article/info', // 文章详情
  getWebInfo: host + 'setting/info', // 网站信息
  // getNavList: host + 'setting/nav', // 1.旧网站导航
  getNavList: host + 'nav', // 2.新网站导航
  getSEOInfo: host + 'setting/seo', // seo信息


  getUserInfo:host + 'user/detail?uid=308204093',//用户信息
  getTest:host + 'top/list?idx=1',//热门推荐
  getSearch:host + 'search',//搜索
  getSongDetail:host + 'song/detail',//歌曲详情
  getMVList:host+'artist/mv'//获取歌手mv
}

export default api
