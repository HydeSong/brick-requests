import axios from '../../src/index'
import qs from 'qs'

axios.defaults.headers.common['test2'] = 123

axios({
    url: '/config/post',
    method: 'post',
    data: qs.stringify({
        a: 1
    }),
    headers: {
        test: '321',
        'x-test': '456',
        common: {
            'version': '1.0.1'
        }
    }
}).then((res) => {
    console.log(res.data)
})