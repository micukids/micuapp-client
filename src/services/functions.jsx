import axios from "axios";
const endPoint = "http://127.0.0.1:8000"

axios.defaults.headers.post['Content-Type']= 'application/json';
axios.defaults.headers.post['Accept']= 'application/json';

function getAxiosInstance(endpoint = "http://localhost:8000") {
    return axios.create({
        withCredentials: true,
        baseURL: endpoint
    });
}

const GetLetters = async()=>{
 const response = await axios.get(`${endPoint}/api/letters`);
 return response.data.letters;
}

const GetVowels = async()=>{
    const response = await axios.get(`${endPoint}/api/vowels`);
    return response.data.vowels;
   }

const getLettersName = async()=> {
    const response = await axios.get(`${endPoint}/api/lettersName`);
    return response.data.vowels;
   }

export {
    GetLetters,
    GetVowels,
    getLettersName,
    getAxiosInstance
};
