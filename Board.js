import React from 'react';
import Square from './Square';

const Board = ({ squares, onPlay }) => {
  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => onPlay(i)} key={i} />
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: '10px' }}>
      {squares.map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;
