import axios from 'axios'

const instance = axios.create({
  baseURL: ProcessingInstruction.env.NODE_ENV === 'development'
    ? "http://localhost:3000" : "storemarvel.netlify.app"
});

export default instance