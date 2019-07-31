import React from 'react';


export default class Board extends React.Component{

    constructor(){
        super();
        this.draw = this.draw.bind(this);
    }

    draw(){
        this.ctx.fillStyle = '#000';

        this.props.matrix.forEach((row,y)=>{
            row.forEach((col,x)=>{
               this.ctx.fillStyle = (col===1)?'#ff0000':'#000';
               this.ctx.fillRect(x,y,0.9,0.9);
            });
        });

        // this.props.piece.forEach((row,y)=>{
        //     row.forEach((col,x)=>{
        //         this.ctx.fillStyle = (col===1)?'#fff':'rgba(0,0,0,0)';
        //         this.ctx.fillRect(
        //             x+this.props.pos.x,
        //             y+this.props.pos.y,0.9,0.9);
        //     });
        // });

        this.props.word.forEach((row,y)=>{
            row.forEach((col,x)=>{
                // this.ctx.fillStyle = (col===1)?'#fff':'rgba(0,0,0,0)';
                // context.fillStyle = '#ffffff'; // or whatever color the background is.
                // context.fillText(oldText, xCoordinate, yCoordinate);
                // context.fillStyle = '#000000'; // or whatever color the text should be.
                // context.fillText(newText, xCoordinate, yCoordinate);
                // this.ctx.fillStyle = "#000"
                // this.ctx.
                
                this.ctx.fillStyle = "#FFF"
                this.ctx.font = "1px Courier"
                this.ctx.fillText(col,
                    x+this.props.pos.x,
                    y+this.props.pos.y);
            });
        });
    }

    componentDidMount(){
        this.canvas = this.refs.canvas;
        if (this.canvas){
            this.ctx = this.canvas.getContext('2d');
            this.ctx.fillStyle = '#000';
            this.ctx.scale(30,30);
            this.ctx.fillRect(0,0,10,20);
        }
        this.draw();
    }

    componentWillReceiveProps(){
        this.draw();
    }

    render(){
        return(
            <div className="GameCanvas">
                <canvas ref={'canvas'} width={300} height={600}/>
            </div>
        )
    }

}