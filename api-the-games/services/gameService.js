import Game from "../models/games.js"

class gameService{
    // Game.find().then(games => {
    //     // sucesso
    // }).catch(error => {
    //     // falha
    // })

    // async / await
    async getAll(){
        try{
            const games = await Game.find()
            return games
        } catch (error) {
            console.log(error)
        }
    }
}

export default new gameService()
// exportar classe pra ser usada por fora usa new