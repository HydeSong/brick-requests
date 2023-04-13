import axios from '../../src/index'

const res = axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log('result', res)
})
