
import axios from 'axios';
const baseURL = `http://localhost:3001/notes`;


const getAll = ()=>{
    const promise = axios.get(`${baseURL}`);
    return promise;
}

const create = (noteObj)=>{
    const promise = axios.post(`${baseURL}`,noteObj);
    return promise;
}

const update = (id, changedNode)=>{
    const promise = axios.put(`${baseURL}/${id}`,changedNode);
    return promise;
}

export default {getAll, create,update};