import axios from 'axios';

class API {
    axios;
    constructor() {
        const url = "http://localhost:8080";
        this.axios = axios.create({
            baseURL: url,
            headers: {
                "Content-type": "application/json"
            }
        });
    }

    async getAllPeladas() {
        return await axios.get("http://localhost:8080/peladas")
    }

    async getMyPeladas() {
        return await axios.get("http://localhost:8080/jogadores/3/reserva_em_grupo")
    }

    async getArenas() {
        return await axios.get("http://localhost:8080/campo_horarios")
    }

    async getPosicoes() {
        return await axios.get("http://localhost:8080/posicoes")
    }

    async postEspaco() {
        return await axios.post("http://localhost:8080/espacos", { headers: { 'Content-Type': 'application/json' } })
    }

    async getEstatisticasGerais() {
        return await axios.get('http://localhost:8080/jogadores')
    }

    async getRankingGols() {
        return await axios.get('http://localhost:8080/jogadores/ranking/gols')
    }

    async getRankingAssistencias() {
        return await axios.get('http://localhost:8080/jogadores/ranking/assistencias')
    }

    async getJogador() {
        return await axios.get('http://localhost:8080/jogadores')
    }

    async putJogador() {
        return await axios.put('http://localhost:8080/jogadores/3')
    }

    async deleteJogador() {
        return await axios.delete('http://localhost:8080/jogadores/5')
    }

    async login() {
        return await axios.get('http://localhost:8080/jogadores/login')
    }

    async login() {
        return await axios.get(`http://localhost:8080/jogadores/l`)
    }
}

export default new API();