import axios, {AxiosResponse} from 'axios';
import {DataT} from '../store/ElemList';

export const FetchData = {
    async get(): Promise<AxiosResponse<DataT[]>> {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }
};