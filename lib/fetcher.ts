import axios from 'axios';

const fetcher = (url: string, options?: any) => axios.get(url, options).then((res) => res.data);

export default fetcher;