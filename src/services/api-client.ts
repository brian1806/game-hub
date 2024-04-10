import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd80f3b439666419e8005cda52b32ddaf'
    }
})