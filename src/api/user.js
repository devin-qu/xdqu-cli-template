import axios from 'axios';
export function fetchList(params) {
    return axios({
      url:'/user/list',
      method:'get',
      params:params
    });
}