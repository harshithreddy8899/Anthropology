import axios from 'axios';

axios.defaults.baseURL='http://localhost:3000';
axios.defaults.withCredentials = true;
const Register=(payload)=>axios.post('/user/register', payload);
const Login=(payload)=>axios.post('/user/login', payload);
const GetView=()=>axios.get('/view/allmeansmeasurementbytrait');
const GetUser=()=>axios.get('/user/get');
const Logout=()=>axios.post('/user/logout');
const apis={
    Login,
    Register,
    GetView,
    GetUser,
    Logout
};
export default apis;