import React, {Component} from 'react';
import Board from "../components/Board";

// import {createMatrix, createPiece} from "./Utils";
const maxWidth = 30
const maxHeight = 20

class GameCanvas extends Component {

    constructor(props) {
        super(props);
        this.matrix = this.createMatrix(maxWidth,maxHeight);
        this.piece = this.createPiece();
        this.word = this.createWord();
        this.timer = 0;
        this.dropCounter = 0;

        this.pos = {x:1, y:0};

        this.state = {
            pos: this.pos,
            score: 0,
            speed: this.setSpeed(),
            gameStatus: 'play',
            correctWordCount: 0,
            duration: 0
        };

        this.move = this.move.bind(this);


    }

    setSpeed() {
        if(this.props.gameDetails.difficulty === "hard"){
            return 50
        } else if(this.props.gameDetails.difficulty === "medium") {
            return 500
        } else if (this.props.gameDetails.difficulty === "easy") {
            return 1000
        } else {
            return 100
        }
    }

    move(dir){
        this.pos.x += dir;
        if (this.collide()){
            this.pos.x -= dir;
        }
        this.setState({
            pos: this.pos
        });
    }


    collide(){
        // const [m, o] = [this.piece, this.pos];
        // for (let y=0; y<m.length; y++){
        //   debugger
        //     for (let x=0; x<m[y].length; x++){
        //         if (
        //             m[y][x]===1
        //             && (
        //                 this.matrix[y+o.y] && this.matrix[y+o.y][x+o.x]
        //             ) !== 0
        //         ){
        //             return true;
        //         }
        //     }
        // }

        const [word, offset] = [this.word, this.pos];
        for (let y=0; y<word.length; y++){
            for (let x=0; x<word[y].length; x++){
                if (
                    word[y][x] !== 0
                    && (
                        this.matrix[y+offset.y] && this.matrix[y+offset.y][x+offset.x]
                    ) !== 0
                ){
                    return true;
                }
            }
        }
        return false;
    }

    merge(){
        // this.piece.forEach((row,y)=>{
        //     row.forEach((col, x)=>{
        //         if (col===1){
        //             this.matrix[y+this.pos.y][x+this.pos.x] = 1;
        //         }
        //     })
        // })
        this.word.forEach((row,y)=>{
          row.forEach((col, x)=>{
              if (col!==0){
                  this.matrix[y+this.pos.y][x+this.pos.x] = 1;
              }
          })
      })
        
    }

    reset(){
        this.pos.y = 0;
        this.pos.x = 1;
        this.piece = this.createPiece();
        this.word = this.createWord();
        this.setState({
            pos: this.pos
        });
    }

    resetDuration = () => {
        let difference = this.timer - this.state.duration
        this.setState({
            duration: difference
        })
    }

    matchSuccess(){
        let _score = this.state.score+10;
        let _speed = this.state.speed - 100;
        let _correctWords = this.state.correctWordCount + 1;
        this.setState({
            score: _score,
            speed: _speed,
            correctWordCount: _correctWords
        });        
    }

    sweep(){
        outer: for(let y=this.matrix.length-1; y>0; y--){
            for (let x=0; x<this.matrix[y].length; x++){
                if (this.matrix[y][x]===0){
                    continue outer;
                }
            }
            const row = this.matrix.splice(y,1)[0].fill(0);
            this.matrix.unshift(row);
            y++;
            let _score = this.state.score+1;
            let _speed = this.state.speed - 100;

            this.setState({
                score: _score,
                speed: _speed
            });
        }
    }

    saveGame = () => {
        let wrapper = {
            "score": this.state.score,
            "duration": 100,
            "correct_word_count": this.state.correctWordCount
        }
        this.props.createNewGame(wrapper)
    }

    playerDrop = ()=>{
        this.dropCounter = 0;
        this.pos.y++;

        if (this.collide()){
            this.pos.y--;
            if (this.pos.y<1){
                this.setState({
                    gameStatus:'gameover',
                    duration: this.timer
                }, this.saveGame() );
                
            }

            if( this.props.compareWords(this.word) ){
                this.reset();
                this.sweep();
                this.matchSuccess();
            } else {
                this.merge();
                this.reset();
                this.sweep();
            }
        }
        this.setState({
            pos: this.pos
        });
    }

    rotate(){
        this.rotatePiece();
        while(this.collide()){
            if (this.pos.x+this.piece[0].length>this.matrix[0].length){
                this.pos.x --;
            } else {
                this.pos.x ++;
            }
        }
        this.setState({
            pos:this.pos
        });
    }

    rotatePiece(){
        for(let y=0; y<this.piece.length; y++){
            for(let x=0; x<y; x++){
                [
                    this.piece[x][y],
                    this.piece[y][x]
                ] = [
                    this.piece[y][x],
                    this.piece[x][y]
                ]
            }
        }
        this.piece.reverse();
    }

    update = (time=0) => {
        const deltaTime = time-this.timer;
        this.timer = time;
        this.dropCounter += deltaTime;
        if (this.dropCounter>this.state.speed){
            this.playerDrop();
        }
        if (this.state.gameStatus==='play'){
            requestAnimationFrame(this.update);
        } else if (this.state.gameStatus==='gameover'){
            alert(`GAME OVER! Score: ${this.state.score}`);
            // this.setState({
            //     gameStatus:'play'
            // });
            // this.reset();
            // this.matrix = this.createMatrix(maxWidth, maxHeight);
            // this.update();
        }

    }

    componentDidMount = () => {
        this.update();
        document.addEventListener('keydown',(e)=>{
            // console.log(e.keyCode);
            // left 37
            // right 39
            // up 38
            // down 40

            // if (e.keyCode===37){
            //     this.move(-1);
            // } else if (e.keyCode===39){
            //     this.move(1);
            // } else if (e.keyCode===38){
            //     this.rotate();
            // } else 
            if (e.keyCode===65){
                this.playerDrop();
            }
        })
    }

    createWord = (wordArray) => {
                // This is reference const wordTest = [[["G","A","T","A"]], [["P","E","R","R","A"]]]
                // let wordList = []
                // stringArray.forEach((word) => {
                //     wordList.push(new Array(word.split("")))
                // })
                // return wordList[ Math.floor(Math.random()*wordList.length) ]
                // end reference 
        let randomWord = ""
        do {
            randomWord = this.props.wordBank[Math.floor(Math.random() * this.props.wordBank.length)];
        } while (randomWord.spanish.length > 16)

        return new Array(randomWord.spanish.split(""))
    }

    createMatrix = (w, h) => {
        let matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0))
        }
        return matrix;
    }
    
    createPiece() {
        const s = [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ];
        const l = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ];
    
        const o = [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ];
    
        const i = [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ]
    
        const pieceList = [s,l,o,i];
        return pieceList[ Math.floor(Math.random()*pieceList.length) ];
    
    }

    render() {
        return (
            <div>
            <div className={'leftBox'}>
                <Board
                    matrix={this.matrix}
                    piece={this.piece}
                    word={this.word}
                    pos ={this.state.pos}
                />
            </div>
            <div className={'leftBox'}>
                <br />
                <strong>&nbsp; SCORE : {this.state.score}</strong><br/>
                <strong>&nbsp; SPEED : {this.state.speed}</strong><br/>
            </div>
            </div>
        );
    }
}

export default GameCanvas;