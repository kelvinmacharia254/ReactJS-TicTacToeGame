// there are only possible 8 win combinations in a tictactoe game
export const WINNING_COMBINATIONS = [
    [
        { row: 0, column: 0 }, // row one triples
        { row: 0, column: 1 },
        { row: 0, column: 2 },
    ],
    [
        { row: 1, column: 0 }, // row two triples
        { row: 1, column: 1 },
        { row: 1, column: 2 },
    ],
    [
        { row: 2, column: 0 }, // row three triples
        { row: 2, column: 1 },
        { row: 2, column: 2 },
    ],
    [
        { row: 0, column: 0 }, // column one tripples
        { row: 1, column: 0 },
        { row: 2, column: 0 },
    ],
    [
        { row: 0, column: 1 }, // column two triples
        { row: 1, column: 1 },
        { row: 2, column: 1 },
    ],
    [
        { row: 0, column: 2 }, // column three triples
        { row: 1, column: 2 },
        { row: 2, column: 2 },
    ],
    [
        { row: 0, column: 0 }, // leading diagonal triples
        { row: 1, column: 1 },
        { row: 2, column: 2 },
    ],
    [
        { row: 0, column: 2 }, // other diagonal triples
        { row: 1, column: 1 },
        { row: 2, column: 0 },
    ],
];