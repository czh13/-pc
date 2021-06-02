import {
  request
} from './request'

// 轮播图数据
export function getSwiperInfo() {
  return request({
    url: '/banner'
  })
}

//获取推荐表单,param limit : 获取条数
export function getRecomSongList(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 获取推荐歌曲
export function getRecomMusicList() {
  return request({
    url: '/personalized/newsong'
  })
}

//  获取推荐歌手信息
//  * @param offset : 位偏移量
//  * @param limit : 获取数量
//  * @returns {AxiosPromise}
export function getRecomSingerList(offset, limit) {
  return request({
    url: `/top/artists?offset=${offset}&limit=${limit}`
  })
}