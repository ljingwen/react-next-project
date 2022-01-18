import axios from 'axios';
import { AxiosInstance,AxiosRequestConfig,AxiosResponse,AxiosError } from 'axios';
import { config } from 'process';


const isDev = process.env.NODE_ENV === 'development';

const instance = axios.create({
    timeout: isDev ? 60 * 1000 : 80 * 1000, 
    withCredentials: true
})

instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config
    }
)
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    }
)

export default instance