import axios from 'axios';
import { AppRegistry } from 'react-native-web';

const api = axios.create({
    baseURL: 'http://192.168.0.15:3000',
    responseType: "json",
});

export default api;
