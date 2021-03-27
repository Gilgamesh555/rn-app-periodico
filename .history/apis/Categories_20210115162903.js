import axios from "axios"

export default axios.create({
    baseURL: 'http://10.10.165.247/uatfoficial/public/api/',
    // baseURL: 'http://siadsis.uatf.edu.bo/api/',
})