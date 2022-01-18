import type {NextPage} from 'next'
import {getList} from './../api/account'
import { useEffect } from 'react'
import axios from 'axios'



const Main: NextPage = () => {
    const getWetherList = async() => {
        // axios({
        //     method: 'get',
        //     url: 'https://weather.cma.cn/api/weather/view?stationid='
        // }).then(response => {
        //     console.log(response)
        // })
        const result = await getList();
        console.log(result);
    }
    useEffect(()=> {
        getWetherList()
    },[])
    return (
        <div>这里是主页</div>
    )
}

export default Main