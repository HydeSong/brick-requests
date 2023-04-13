import { error } from 'console'
import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})

axios.get('/extend/get')

axios.options('/extend/options')

axios.delete('/extend/delete')

axios.head('/extend/head')

axios.post('/extend/post', { msg: 'post' })

axios.put('/extend/put', { msg: 'put' })

axios.patch('/extend/patch', { msg: 'patch' })

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi function reload'
  }
})

axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hello function reload'
  }
})

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(error => console.error(error))
}

async function test() {
  const user = await getUser<User>()
  if(user) {
    console.log(user.code)
    console.log(user.message)
    console.log(user.result.age)
    console.log(user.result.name)
  }
}

test()
