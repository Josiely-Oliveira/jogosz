import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Board from './Board';
import { ArrowRepeat } from 'react-bootstrap-icons';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const currentSquares = history[history.length - 1];

  const handlePlay = (i) => {
    if (currentSquares[i] || calculateWinner(currentSquares)) return;
    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setHistory([Array(9).fill(null)]);
    setXIsNext(true);
  };

  const winner = calculateWinner(currentSquares);
  const status = winner ? `Vencedor: ${winner}` : `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2 className="mb-4">{status}</h2>
      <Board squares={currentSquares} onPlay={handlePlay} />
      <Button variant="success" className="mt-4" onClick={handleRestart}>
        <ArrowRepeat /> Reiniciar
      </Button>
    </Container>
  );
};

const calculateWinner = (squares) => {
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
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;