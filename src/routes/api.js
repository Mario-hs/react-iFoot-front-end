import axios from 'axios';

class API {
    // axios;
    // constructor() {
    //     const url = "http://localhost:8080";
    //     this.axios = axios.create({
    //         baseURL: url,
    //         headers: {
    //             "Content-type": "application/json"
    //         }
    //     });
    // }

    async getAllPeladas() {
        return await axios.get("http://localhost:8080/peladas")
    }

    async getMyPeladas() {
        return await axios.get("http://localhost:8080/jogadores/3/reserva_em_grupo")
    }

    async getArenas() {
        return await axios.get("http://localhost:8080/campo_horarios")
    }
}

export default new API();