import Request from './../utils/request'

const getList = () => {
    return Request.get('/api/weather/view?stationid=')
}

export  {
    getList
}