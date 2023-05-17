import axios from "axios";
const endPoint = "http://apirasp.micukids.com:8000"

axios.defaults.headers.post['Content-Type']= 'application/json';
axios.defaults.headers.post['Accept']= 'application/json';

function getAxiosInstance(endpoint = "http://apirasp.micukids.com:8000") {
    const instance = axios.create({
        withCredentials: true,
        baseURL: endpoint
    });

    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem("auth_token");
        config.headers.Authorization = token ? `Bearer ${token}` : "";
        return config;
      });

    return instance
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
    return response.data.lettersName;
   }

const GetSuggestions = async() => {
    const response = await axios.get(`${endPoint}/api/suggestions`);
    return response.data.suggestions;
}

const GetMessages = async() => {
    const response = await getAxiosInstance().get(`/api/contacts`);
    return response.data.contacts;
}

const GetDownloads = async() => {
    const response = await axios.get(`${endPoint}/api/downloads`);
    return response.data.downloads;
}

export {
    GetLetters,
    GetVowels,
    getAxiosInstance,
    getLettersName,
    GetSuggestions,
    GetMessages,
    GetDownloads
};
