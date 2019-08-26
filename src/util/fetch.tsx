import axios from 'axios';
const http = {
    async get (url:string, data:any) {
        try {
            let res:any = await axios.get(url, {params: data});
            res = res.data;
            return new Promise((resolve) => {
                if (res.code === 0) {
                    resolve(res)
                } else {
                    resolve(res)
                }
            })
        } catch (err) {
            alert('服务器出错')
            console.log(err)
        }
    },
    async post (url:string, data:any) {
        try {
            let res:any = await axios.post(url, {params:data});
            res = res.data;
            return new Promise((resolve, reject) => {
                if (res.code === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
        } catch (err) {
            // return (e.message)
            alert('服务器出错');
            console.log(err)
        }
    },
}

export default http;