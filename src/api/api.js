import axios from "axios";

 const baseURL =" https://rickandmortyapi.com/api";

export default class Services {

    static async getAllCharacter(){
        const data = axios.get(baseURL+"/character");
        return data;
    }

}