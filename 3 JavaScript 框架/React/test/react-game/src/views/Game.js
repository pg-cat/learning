import React from 'react';
import './Game.css';
import Board from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            isNext: true
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.isNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares
            }]),
            stepNumber: history.length,
            isNext: !this.state.isNext
        })
    }

    jumpTo(n) {
        this.setState({
            stepNumber: n,
            isNext: (n % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((skip, move) => {
            const desc = move ? '前往第 ' + move + ' 步' : '重新开始';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            )
        })

        let status;
        if (winner) {
            status = '胜利者：' + winner;
        } else {
            status = '下一位玩家：' + (this.state.isNext ? 'X' : 'O');
        }

        return (
            <div className="game">

                <div className="game-board">
                    <div className="status">{status}</div>
                    <Board
                        squares={current.squares}
                        onClickGame={(i) => this.handleClick(i)}
                    />
                </div>

                <div className="game-info">
                    <ol>{moves}</ol>
                </div>

            </div>
        )
    }
}

export default Game;

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
