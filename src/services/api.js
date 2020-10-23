import axios from 'axios';

const Api = axios.create({baseURL: 'https://e076819d1ae1.ngrok.io/api/v1'})

export default Api;