import { INIT_GAME,MOVE } from "./messages";
import { Game } from "./Game";
import { WebSocket } from "ws";

  
export class GameManager{
    private games: Game[];
    private pendingUser: WebSocket | null;
    private users: WebSocket[];
    constructor(){
        this.games = [];
        this.pendingUser = null;
        this.users = [];
    }

    addUser(websocket:WebSocket){
        this.users.push(websocket);
        this.addHandler(websocket);

    }

    removeUser(websocket:WebSocket){
        this.users = this.users.filter(user => user !== websocket);

    }

    private addHandler(socket : WebSocket){
        socket.on('message', (data) => {
            const message = JSON.parse(data.toString());
            if(message.type === INIT_GAME) {
                if(this.pendingUser) {
                    const game = new Game(this.pendingUser, socket);
                    this.games.push(game);
                    this.pendingUser = null;
                }
                else{
                    this.pendingUser = socket; 
                }
            }

            if(message.type === MOVE) {
                const game = this.games.find(g => g.player1 === socket || g.player2 === socket);
                if(game) {
                    game.makeMove(socket,message.move);
                }
            }
        });
    }


}