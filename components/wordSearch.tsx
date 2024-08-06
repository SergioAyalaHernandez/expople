"use client"

import React, { useState } from 'react';
import classNames from 'classnames';

const words = [
    'PLEBISCITO',
    'PAZ',
    'FARC',
    'GOBIERNO',
    'ACUERDO',
    'VOTACION',
    'CONFLICTO',
    'RESULTADOS'
];

const grid = [
    ['P', 'L', 'E', 'B', 'I', 'S', 'C', 'I', 'T', 'O'],
    ['X', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    ['R', 'P', 'A', 'Z', 'O', 'Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E'],
    ['F', 'A', 'R', 'C', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['G', 'O', 'B', 'I', 'E', 'R', 'N', 'O', 'M', 'N'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
    ['A', 'C', 'U', 'E', 'R', 'D', 'O', 'W', 'X', 'Y'],
    ['V', 'O', 'T', 'A', 'C', 'I', 'O', 'N', 'Z', 'A'],
];

const getHighlightedLetters = (word: string) => {
    const positions: { [key: number]: boolean } = {};
    // Simplified approach: marking the positions of letters in the word
    for (let i = 0; i < word.length; i++) {
        positions[i] = true;
    }
    return positions;
}

const WordSearch: React.FC = () => {
    const [foundWords, setFoundWords] = useState<string[]>([]);
    const [highlightedLetters, setHighlightedLetters] = useState<{ [key: number]: boolean }>({});


    return (
        <div className="p-4">
            <div className="grid grid-cols-10 gap-0 mb-4">
                {grid.flat().map((letter, index) => (
                    <span
                        key={index}
                        className={classNames(
                            'w-12 h-12 flex items-center justify-center border border-gray-300 text-lg font-medium cursor-pointer',
                            {
                                'bg-yellow-200': highlightedLetters[index],
                                'hover:bg-gray-100': !highlightedLetters[index],
                            }
                        )}
                    >
                        {letter}
                    </span>
                ))}
            </div>
            <div className="space-y-2">
                {words.map((word) => (
                    <button
                        key={word}
                        className={classNames(
                            'px-4 py-2 rounded-md text-white font-semibold',
                            {
                                'bg-green-500 hover:bg-green-600': foundWords.includes(word),
                                'bg-blue-500 hover:bg-blue-600': !foundWords.includes(word),
                            }
                        )}
                    >
                        {word}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WordSearch;
