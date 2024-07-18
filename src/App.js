import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSquare, deleteSquare } from './features/squares/squaresSlice';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const squares = useSelector((state) => state.squares);

  return (
    <div className="App">
      <div className="controls">
        <button onClick={() => dispatch(addSquare())}>Add</button>
        <button onClick={() => dispatch(deleteSquare())}>Delete</button>
      </div>
      <div className="sheet">
        <AnimatePresence>
          {squares.map((square) => {
            return (
              <motion.div
                key={square.id}
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                exit={{ x: '100vw' }}
                transition={{ type: 'spring', stiffness: 50 }}
                className="square"
                style={{ backgroundColor: square.color }}
              />
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
