import axios from '@/utils/request'
export const getCityList = (level) =>
  axios({
    url: '/area/city',
    params: {
      level
    }
  })
export const getHotCity = () =>
  axios({
    url: '/area/hot'
  })
