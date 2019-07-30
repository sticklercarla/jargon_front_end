import React from 'react';

class GameCanvas extends React.Component {

    state = {
        current_word: "GATO",
        incorrect_word_bank: [],
        word_bank: ["DOG", "CAT", "DONKEY", "SHIT"],
        correct_word_bank: [],
        width: 18,
        height: 20,
        floor: 20,
        arena: [],
        dropCounter: 0,
        dropInterval: 250,
        lastTime: 0,
        player: {
          pos: {x: 4, y: 0},
          word: "GATO"
        },
        score: 0, 
    }

    saveWordToBoard = (board, word) => {
      const splitWord = this.state.player.word.split('')
      splitWord.forEach((letter, x) => {
        this.state.arena[this.state.floor][this.state.player.pos.x + x] = letter 
        console.table(this.state.arena); 
      })
    }

    checkCollision = (arena, player) => {
      //Uncomment if I want to work with the x value of the word. 
      // const splitWord = player.word.split('');
      for(let x = 0; x < this.state.width; x++) {
        if(this.state.player.pos.y > this.state.floor ) {
          return true;
        }
      }
      return false;  
    }
      
    createBoard = (height, width)=> {
      const board = [];
      while (this.state.height--) {
        board.push(new Array(this.state.width).fill(0))
      }
      //Uncomment if I need to make a bottom array to act as a wall.
      // board.push(new Array(width).fill(1))
      return board;
    }

    drawWord = (word, offset) => {
      context.fillStyle = "#FFF"
      // context.fillRect(offset.x, offset.y, 1, 1)
      context.fillText(word, offset.x , offset.y)
    }

    drawCanvas = () => {
      //Resets canvas so word doesn't persist on canvas
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height)
      //redraws word
      this.drawWord(this.state.player.word, this.state.player.pos)
    }

    assignNewWord = () => {
      this.state.player.word = this.state.word[(this.state.word.length * Math.random() | 0)];
    }

    newWordToTop = () => {
      this.state.player.pos.y = 0
      this.assignNewWord()
    // debugger
    }

    //adds to words y position making it move down the canvas
    dropWord = () => {
      this.state.player.pos.y++;
      if(this.checkCollision(this.state.arena, this.state.player)) {
        this.state.floor--;
        this.state.player.pos.y--;
        this.saveWordToBoard(this.state.arena, this.state.player)  
        this.newWordToTop()
      }
      this.state.dropCounter = 0
    }

    update = (time = 0 ) => {
      //The whole thing keeps track of how fast you fall
      //DeltaTime keeps track of change between the time and the last time drop was called
      //dropCounter increments over time.
      //Each time down is pressed dropCounter is reset.
      //Drop interval sets time between dropWord calls.
      const deltaTime = this.state.time - this.state.lastTime;
      this.state.dropCounter += deltaTime;
      if (this.state.dropCounter > this.state.dropInterval) {
        this.dropWord();
      }

      this.state.lastTime = this.state.time;
      //End time function
      this.drawCanvas();
      requestAnimationFrame(this.update); 
    }
    
    render() {
      return (
        <div className="GameCanvas">
          <canvas id="canvas" width="240" height="400"></canvas>
        </div>
      );
    }
  }

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
context.font = "1px Courier"
context.scale(20,20)

// document.addEventListener('keydown', event => {
//   if (event.keyCode === 40) {
//     dropWord();
//   }
// })
  this.update();
  export default GameCanvas;