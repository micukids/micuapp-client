import axios from "axios";
const endPoint = "http://127.0.0.1:8000/api"

const GetLetters = async()=>{
 const response = await axios.get(`${endPoint}/letters`);
 return response.data.letters;
}

export {GetLetters};