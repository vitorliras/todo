import axios from 'axios';
import { AppRegistry } from 'react-native-web';

constapi = axios.create({
    baseURL: 'http://10.0.2.2:3000'
});

export default AppRegistry;
