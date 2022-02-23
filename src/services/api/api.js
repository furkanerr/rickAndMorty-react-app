import axios from "axios";

 const baseURL =" https://rickandmortyapi.com/api";
// "/character/?page=${pageNumber}"

export default class Services {

    static async getAllCharacter(url){
        console.log(url)
        const data = axios.get(url);
        return data;
    }


    static async getCharacterById(id){
        const data = axios.get(baseURL+`/character/${id}`);
        return data;
    }

}