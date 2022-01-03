import axios from 'axios';

const baseURL = 'http://localhost:3001/persons';

const getAll = ()=>{
    const promise = axios.get(`${baseURL}`);
    return promise;
}
const create = (newPerson)=>{
    const promise = axios.post(`${baseURL}`, newPerson);
    return promise;
}

const remove =(id)=>{
    const promise =axios.delete(`${baseURL}/${id}`);
    return promise;
}

const update=(id, changedNote)=>{
    const promise=axios.put(`${baseURL}/${id}`,changedNote);
    return promise;
}
export default {getAll,create,remove,update};