var algorithms = [
    {
        FTarget: "A",
        STarget: "C",
        Algorithm: "L2 [L' F' L, B2] L2"
    },
    {
        FTarget: "A",
        STarget: "D",
        Algorithm: "F2 [F' R' F, L2] F2"
    },
    {
        FTarget: "A",
        STarget: "I",
        Algorithm: "L [U2, L D L'] L'"
    },
    {
        FTarget: "A",
        STarget: "J",
        Algorithm: "[B, L F L']"
    },
    {
        FTarget: "A",
        STarget: "K",
        Algorithm: "[L' B' L, F' ]"
    },
    {
        FTarget: "A",
        STarget: "L",
        Algorithm: "R' [L' B' L, F2] R"
    },
    {
        FTarget: "A",
        STarget: "M",
        Algorithm: "[B D' B', U]"
    },
    {
        FTarget: "A",
        STarget: "N",
        Algorithm: "[L' B' L, F]"
    },
    {
        FTarget: "A",
        STarget: "O",
        Algorithm: "[B', L F L']"
    },
    {
        FTarget: "A",
        STarget: "P",
        Algorithm: "[U', F' D F]"
    },
    {
        FTarget: "A",
        STarget: "Q",
        Algorithm: "[U', L D2 L']"
    },
    {
        FTarget: "A",
        STarget: "R",
        Algorithm: "[L D L', U]"
    },
    {
        FTarget: "A",
        STarget: "S",
        Algorithm: "[U', L D' L']"
    },
    {
        FTarget: "A",
        STarget: "T",
        Algorithm: "[L' D2 L, U]"
    },
    {
        FTarget: "A",
        STarget: "U",
        Algorithm: "D [L' B L, F2] D'"
    },
    {
        FTarget: "A",
        STarget: "V",
        Algorithm: "D2 [L' B L, F2] D2"
    },
    {
        FTarget: "A",
        STarget: "W",
        Algorithm: "[B2, L F L']"
    },
    {
        FTarget: "A",
        STarget: "X",
        Algorithm: "[L B' L', F2]"
    },
    {
        FTarget: "C",
        STarget: "A",
        Algorithm: "L2 [B2, L' F' L] L2"
    },
    {
        FTarget: "C",
        STarget: "D",
        Algorithm: "R2 [R F R', B2] R2"
    },
    {
        FTarget: "C",
        STarget: "E",
        Algorithm: "[L', B' R' B]"
    },
    {
        FTarget: "C",
        STarget: "F",
        Algorithm: "F' [L2, B' R' B] F"
    },
    {
        FTarget: "C",
        STarget: "K",
        Algorithm: "F [B L B', R2] F'"
    },
    {
        FTarget: "C",
        STarget: "L",
        Algorithm: "[B L B', R]"
    },
    {
        FTarget: "C",
        STarget: "M",
        Algorithm: "[B D' B', U']"
    },
    {
        FTarget: "C",
        STarget: "N",
        Algorithm: "[U, B' D2 B]"
    },
    {
        FTarget: "C",
        STarget: "O",
        Algorithm: "[U', R D' R']"
    },
    {
        FTarget: "C",
        STarget: "P",
        Algorithm: "[L, B' R' B]"
    },
    {
        FTarget: "C",
        STarget: "Q",
        Algorithm: "[B R B', R']"
    },
    {
        FTarget: "C",
        STarget: "R",
        Algorithm: "[L' D L, U']"
    },
    {
        FTarget: "C",
        STarget: "S",
        Algorithm: "[B D2 B', U]"
    },
    {
        FTarget: "C",
        STarget: "T",
        Algorithm: "[L' D2 L, U']"
    },
    {
        FTarget: "C",
        STarget: "U",
        Algorithm: "[L2, B' R' B]"
    },
    {
        FTarget: "C",
        STarget: "V",
        Algorithm: "D [L2, B' R' B] D'"
    },
    {
        FTarget: "C",
        STarget: "W",
        Algorithm: "D' [R2, B L B'] D"
    },
    {
        FTarget: "C",
        STarget: "X",
        Algorithm: "[R2, B L B']"
    },
    {
        FTarget: "D",
        STarget: "A",
        Algorithm: "F2 [L2, F' R' F] F2"
    },{
        FTarget: "D",
        STarget: "C",
        Algorithm: "R2 [B2, R F R'] R2"
    },
    {
        FTarget: "D",
        STarget: "M",
        Algorithm: "[B D' B', U2]"
    },
    {
        FTarget: "D",
        STarget: "N",
        Algorithm: "[U2, R, D Br]"
    },
    {
        FTarget: "D",
        STarget: "O",
        Algorithm: "[L' D' L, U2]"
    },
    {
        FTarget: "D",
        STarget: "P",
        Algorithm: "[U2, R' D2 R]"
    },
    {
        FTarget: "D",
        STarget: "Q",
        Algorithm: "[U2, F D' F']"
    },
    {
        FTarget: "D",
        STarget: "S",
        Algorithm: "[B D2 B', U2]"
    },
    {
        FTarget: "D",
        STarget: "T",
        Algorithm: "[L' D2 L, U2]"
    },
    {
        FTarget: "D",
        STarget: "U",
        Algorithm: "D' [L2 D' L2 D L2, U2]"
    },
    {
        FTarget: "D",
        STarget: "V",
        Algorithm: "[L2 D' L2 D L2, U2]"
    },
    {
        FTarget: "D",
        STarget: "W",
        Algorithm: "D [L2 D' L2 D L2, U2]"
    },
    {
        FTarget: "D",
        STarget: "X",
        Algorithm: "[U2, R2 D' R2 D R2]"
    },
    {
        FTarget: "E",
        STarget: "C",
        Algorithm: "[B' R' B, L']"
    },
    {
        FTarget: "E",
        STarget: "M",
        Algorithm: "[U B U', F]"
    },
    {
        FTarget: "E",
        STarget: "N",
        Algorithm: "D [F2, R B2 R'] D'"
    },
    {
        FTarget: "E",
        STarget: "O",
        Algorithm: "[B', U' F' U]"
    },
    {
        FTarget: "E",
        STarget: "P",
        Algorithm: "F [R U2 R', D2] F'"
    },
    {
        FTarget: "E",
        STarget: "Q",
        Algorithm: "[U R' U, L]"
    },
    {
        FTarget: "E",
        STarget: "R",
        Algorithm: "[L', U' R2 U]"
    },
    {
        FTarget: "E",
        STarget: "S",
        Algorithm: "[B' R2 B, L']"
    },
    {
        FTarget: "E",
        STarget: "T",
        Algorithm: "[B' R2 B, L']"
    },
    {
        FTarget: "E",
        STarget: "U",
        Algorithm: "D2 [B2, U' F' U] D2"
    },
    {
        FTarget: "E",
        STarget: "V",
        Algorithm: "D' [B2, U' F' U] D"
    },
    {
        FTarget: "E",
        STarget: "W",
        Algorithm: "[B2, U' F' U]"
    },
    {
        FTarget: "E",
        STarget: "X",
        Algorithm: "R' [U R' U', L'] R"
    },
    {
        FTarget: "F",
        STarget: "C",
        Algorithm: "F' [B' R' B, L2] F"
    },
    {
        FTarget: "F",
        STarget: "D",
        Algorithm: "F [B D2 B', U2] F'"
    },
    {
        FTarget: "F",
        STarget: "I",
        Algorithm: "l [U2, L2 D L2 D' L2] l'"
    },
    {
        FTarget: "F",
        STarget: "J",
        Algorithm: "F' [U R U', L2] F"
    },
    {
        FTarget: "F",
        STarget: "K",
        Algorithm: "l [L2 D L2 D' L2, U2] l'"
    },
    {
        FTarget: "F",
        STarget: "L",
        Algorithm: "F [L' D2 L, U2] F'"
    },
    {
        FTarget: "F",
        STarget: "M",
        Algorithm: "D' F [U2, F D2 F'] F' D"
    },
    {
        FTarget: "F",
        STarget: "N",
        Algorithm: "F' [L2, F' R' F] F"
    },
    {
        FTarget: "F",
        STarget: "O",
        Algorithm: "F [U2, F D2 F'] F'"
    },
    {
        FTarget: "F",
        STarget: "P",
        Algorithm: "F' [U2, R' D2 R'] F"
    },
    {
        FTarget: "F",
        STarget: "Q",
        Algorithm: "F' [U R' U', L2] F"
    },
    {
        FTarget: "F",
        STarget: "R",
        Algorithm: "F' [L2, F' R' F] F"
    },
    {
        FTarget: "F",
        STarget: "S",
        Algorithm: "F D' [L2 D' L2 D L2, U2] D F'"
    },
    {
        FTarget: "F",
        STarget: "T",
        Algorithm: "F [B D' B', U2] F'"
    },
    {
        FTarget: "F",
        STarget: "U",
        Algorithm: "F' [B' L2 B, L2] F"
    },
    {
        FTarget: "F",
        STarget: "V",
        Algorithm: "F [L2 D' L2 D L2,U2] F'"
    },
    {
        FTarget: "F",
        STarget: "W",
        Algorithm: "x [D2, L2 U L2 U' L] x"
    },
    {
        FTarget: "F",
        STarget: "X",
        Algorithm: "F' [B' R B, L2] F"
    },
    {
        FTarget: "I",
        STarget: "A",
        Algorithm: "L [L D L', U2] L'"
    },
    {
        FTarget: "I",
        STarget: "F",
        Algorithm: "l [L2 D L2 D' L2, U2] l'"
    },
    {
        FTarget: "I",
        STarget: "M",
        Algorithm: "R' [B D' B', U2] R"
    },
    {
        FTarget: "I",
        STarget: "S",
        Algorithm: "R' [L' D' L, U2] R"
    },
    {
        FTarget: "I",
        STarget: "T",
        Algorithm: "D' R [U' F U, B2] R' D"
    },
    {
        FTarget: "J",
        STarget: "A",
        Algorithm: "[L F L', B]"
    },
    {
        FTarget: "J",
        STarget: "M",
        Algorithm: "[B', U F2 U']"
    },
    {
        FTarget: "J",
        STarget: "S",
        Algorithm: "[R2, F L2 F']"
    },
    {
        FTarget: "J",
        STarget: "T",
        Algorithm: "[L F2 L', B]"
    },
    {
        FTarget: "K",
        STarget: "A",
        Algorithm: "[F', L' B' L]"
    },
    {
        FTarget: "C",
        STarget: "K",
        Algorithm: "F [R2, B L B'] F'"
    },
    {
        FTarget: "K",
        STarget: "M",
        Algorithm: "R' [F' U2 F, D'] R"
    },
    {
        FTarget: "K",
        STarget: "S",
        Algorithm: "F [F' R' F, L2] F'"
    },
    {
        FTarget: "K",
        STarget: "T",
        Algorithm: "D' [R B' R', F2] D"
    },
    {
        FTarget: "L",
        STarget: "A",
        Algorithm: "R' [F2, L' B' L] R"
    },
    {
        FTarget: "L",
        STarget: "C",
        Algorithm: "[R, B L B']"
    },
    {
        FTarget: "L",
        STarget: "M",
        Algorithm: "[F2, D' B D]"
    },
    {
        FTarget: "L",
        STarget: "S",
        Algorithm: "D2 [D F2 D', B] D2"
    },
    {
        FTarget: "L",
        STarget: "T",
        Algorithm: "[F, R' B2 R]"
    },
    {
        FTarget: "M",
        STarget: "A",
        Algorithm: "[U, B D' B']"
    },
    {
        FTarget: "M",
        STarget: "C",
        Algorithm: "[U', B D' B']"
    },
    {
        FTarget: "M",
        STarget: "D",
        Algorithm: "[U2, B D' B']"
    },
    {
        FTarget: "M",
        STarget: "E",
        Algorithm: "F' [R' B2 R, F'] F"
    },
    {
        FTarget: "M",
        STarget: "F",
        Algorithm: "D' F [F D2 F', U2] F' D"
    },
    {
        FTarget: "M",
        STarget: "I",
        Algorithm: "R' [U2, B D' B'] R"
    },
    {
        FTarget: "M",
        STarget: "J",
        Algorithm: "[U F2 U', B']"
    },
    {
        FTarget: "M",
        STarget: "K",
        Algorithm: "R' [D', F' U2 F] R"
    },
    {
        FTarget: "M",
        STarget: "L",
        Algorithm: "[D' B D, F2]"
    },
    {
        FTarget: "M",
        STarget: "O",
        Algorithm: "D [F' U2 F, D] D'"
    },
    {
        FTarget: "M",
        STarget: "P",
        Algorithm: "U L' [L2 D' L2 D L2, U'] L U'"
    },
    {
        FTarget: "M",
        STarget: "Q",
        Algorithm: "[D2, R' U R]"
    },
    {
        FTarget: "M",
        STarget: "R",
        Algorithm: "R [D, F' U2 F] R'"
    },
    {
        FTarget: "M",
        STarget: "S",
        Algorithm: "[D, F' U2 F]"
    },
    {
        FTarget: "M",
        STarget: "T",
        Algorithm: "[F, R' B2 R]"
    },
    {
        FTarget: "M",
        STarget: "V",
        Algorithm: "D [L2, B' R2 B] D'"
    },
    {
        FTarget: "M",
        STarget: "W",
        Algorithm: "[R' F' R, B2]"
    },
    {
        FTarget: "M",
        STarget: "X",
        Algorithm: "R2 [U', B D' B'] R2"
    },
    {
        FTarget: "N",
        STarget: "A",
        Algorithm: "[F, L' B' L]"
    },
    {
        FTarget: "N",
        STarget: "C",
        Algorithm: "[B' D2 B, U]"
    },
    {
        FTarget: "N",
        STarget: "D",
        Algorithm: "[R' D R, U2]"
    },
    {
        FTarget: "N",
        STarget: "E",
        Algorithm: "F' R2 [U', R D2 R'] R2 F"
    },
    {
        FTarget: "N",
        STarget: "F",
        Algorithm: "F' [F' R' F, L2] F"
    },
    {
        FTarget: "N",
        STarget: "I",
        Algorithm: "R' [R' D R, U2] R"
    },
    {
        FTarget: "N",
        STarget: "J",
        Algorithm: "[R' F2 R, B']"
    },
    {
        FTarget: "N",
        STarget: "K",
        Algorithm: "[F2, R B' R']"
    },
    {
        FTarget: "N",
        STarget: "L",
        Algorithm: "R [B' D2 B, U] R'"
    },
    {
        FTarget: "N",
        STarget: "O",
        Algorithm: "[B', U' F U]"
    },
    {
        FTarget: "N",
        STarget: "P",
        Algorithm: "[F U' F', D]"
    },
    {
        FTarget: "N",
        STarget: "Q",
        Algorithm: "R' [B' D2 B, U] R"
    },
    {
        FTarget: "N",
        STarget: "R",
        Algorithm: "[F U' F', D2]"
    },
    {
        FTarget: "N",
        STarget: "S",
        Algorithm: "F [U', L2 D L2 D' L2] F'"
    },
    {
        FTarget: "N",
        STarget: "T",
        Algorithm: "[D, R U2 R']"
    },
    {
        FTarget: "N",
        STarget: "V",
        Algorithm: "F [L2 D' L2 D L2, U] F'"
    },
    {
        FTarget: "N",
        STarget: "W",
        Algorithm: "[B2, U' F U]"
    },
    {
        FTarget: "N",
        STarget: "X",
        Algorithm: "[F', D B2 D']"
    },
    {
        FTarget: "O",
        STarget: "A",
        Algorithm: "[L F L', B']"
    },
    {
        FTarget: "O",
        STarget: "C",
        Algorithm: "[R D' R', U']"
    },
    {
        FTarget: "O",
        STarget: "M",
        Algorithm: "D [D, F' U2 F] D'"
    },
    {
        FTarget: "O",
        STarget: "S",
        Algorithm: "[D2, F' U2 F]"
    },
    {
        FTarget: "O",
        STarget: "T",
        Algorithm: "[L F2 L', B']"
    },
    {
        FTarget: "P",
        STarget: "A",
        Algorithm: "[F' D F, U']"
    },
    {
        FTarget: "P",
        STarget: "C",
        Algorithm: "[B' R' B, L]"
    },
    {
        FTarget: "P",
        STarget: "M",
        Algorithm: "U L' [U', L2 D' L2 D L2] L U'"
    },
    {
        FTarget: "P",
        STarget: "S",
        Algorithm: "[B' R2 B, L]"
    },
    {
        FTarget: "P",
        STarget: "T",
        Algorithm: "[D2, R U2 R']"
    },
    {
        FTarget: "Q",
        STarget: "A",
        Algorithm: "[L D2 L', U']"
    },
    {
        FTarget: "Q",
        STarget: "C",
        Algorithm: "[R', B R B']"
    },
    {
        FTarget: "Q",
        STarget: "M",
        Algorithm: "[R' U R, D2]"
    },
    {
        FTarget: "R",
        STarget: "A",
        Algorithm: "[U, L D L']"
    },
    {
        FTarget: "R",
        STarget: "C",
        Algorithm: "[U', L' D L]"
    },
    {
        FTarget: "R",
        STarget: "M",
        Algorithm: "R [F' U2 F, D] R'"
    },
    {
        FTarget: "Q",
        STarget: "S",
        Algorithm: "[D', F' U2 F]"
    },
    {
        FTarget: "Q",
        STarget: "T",
        Algorithm: "R [R2 D' R2 D R2, U2] R'"
    },
    {
        FTarget: "R",
        STarget: "S",
        Algorithm: "[R, F L2 F']"
    },
    {
        FTarget: "R",
        STarget: "T",
        Algorithm: "[D, R U2 R']"
    },
    {
        FTarget: "S",
        STarget: "A",
        Algorithm: "[L D' L', U']"
    },
    {
        FTarget: "S",
        STarget: "C",
        Algorithm: "[U, B D2 B']"
    },
    {
        FTarget: "S",
        STarget: "D",
        Algorithm: "[U2, B D2 B']"
    },
    {
        FTarget: "S",
        STarget: "E",
        Algorithm: "[L', B' R2 B]"
    },
    {
        FTarget: "S",
        STarget: "F",
        Algorithm: "F D' [U2, L2 D' L2 D L2] D F'"
    },
    {
        FTarget: "S",
        STarget: "I",
        Algorithm: "R' [U2, L' D' L] R"
    },
    {
        FTarget: "S",
        STarget: "J",
        Algorithm: "[F L2 F', R2]"
    },
    {
        FTarget: "S",
        STarget: "K",
        Algorithm: "F [L2, F' R' F] F'"
    },
    {
        FTarget: "S",
        STarget: "L",
        Algorithm: "D2 [B, D F2 D'] D2"
    },
    {
        FTarget: "S",
        STarget: "M",
        Algorithm: "[F' U2 F, D]"
    },
    {
        FTarget: "S",
        STarget: "N",
        Algorithm: "F [L2 D L2 D' L2, U'] F'"
    },
    {
        FTarget: "S",
        STarget: "O",
        Algorithm: "[F' U2 F, D2]"
    },
    {
        FTarget: "S",
        STarget: "P",
        Algorithm: "[L, B' R2 B]"
    },
    {
        FTarget: "S",
        STarget: "Q",
        Algorithm: "[F' U2 F, D']"
    },
    {
        FTarget: "S",
        STarget: "R",
        Algorithm: "[F L2 F', R]"
    },
    {
        FTarget: "S",
        STarget: "U",
        Algorithm: "[L2, B' R2 B]"
    },
    {
        FTarget: "S",
        STarget: "V",
        Algorithm: "U' [B R' B', L2] U"
    },
    {
        FTarget: "S",
        STarget: "W",
        Algorithm: "D R' [L2 D' L2 D L2, U'] R D"
    },
    {
        FTarget: "T",
        STarget: "A",
        Algorithm: "[U, L' D2 L]"
    },
    {
        FTarget: "T",
        STarget: "C",
        Algorithm: "[U', L' D2 L]"
    },
    {
        FTarget: "T",
        STarget: "D",
        Algorithm: "D' [R' D R, U2] D"
    },
    {
        FTarget: "T",
        STarget: "E",
        Algorithm: "F' [F2, D' B D] F"
    },
    {
        FTarget: "T",
        STarget: "F",
        Algorithm: "F' [D R' D', L2] F"
    },
    {
        FTarget: "T",
        STarget: "I",
        Algorithm: "D' R [B2, U' F U] R' D"
    },
    {
        FTarget: "T",
        STarget: "J",
        Algorithm: "[B, L F2 L']"
    },
    {
        FTarget: "T",
        STarget: "K",
        Algorithm: "D' [F2, R B' R'] D"
    },
    {
        FTarget: "T",
        STarget: "L",
        Algorithm: "[R' B2 R, F]"
    },
    {
        FTarget: "T",
        STarget: "M",
        Algorithm: "[R' B2 R, F']"
    },
    {
        FTarget: "T",
        STarget: "N",
        Algorithm: "[R U2 R', D]"
    },
    {
        FTarget: "T",
        STarget: "O",
        Algorithm: "[B', L F2 L']"
    },
    {
        FTarget: "T",
        STarget: "P",
        Algorithm: "[R U2 R', D2]"
    },
    {
        FTarget: "T",
        STarget: "Q",
        Algorithm: "R [U2, R2 D' R2 D R2] R'"
    },
    {
        FTarget: "T",
        STarget: "R",
        Algorithm: "[R U2 R', D]"
    },
    {
        FTarget: "T",
        STarget: "U",
        Algorithm: "D F [L2 D' L2 D L2, U] F' D'"
    },
    {
        FTarget: "T",
        STarget: "V",
        Algorithm: "U' [L2, U' R U] U"
    },
    {
        FTarget: "T",
        STarget: "W",
        Algorithm: "[B2, L' F2 L]"
    },
    {
        FTarget: "U",
        STarget: "A",
        Algorithm: "D [F2, L' B L] D'"
    },
    {
        FTarget: "U",
        STarget: "C",
        Algorithm: "[B' R' B, L2]"
    },
    {
        FTarget: "U",
        STarget: "S",
        Algorithm: "[B' R2 B, L2]"
    },
    {
        FTarget: "U",
        STarget: "T",
        Algorithm: "D F [U, L2 D' L2 D L2] F' D'"
    },
        {
        FTarget: "V",
        STarget: "A",
        Algorithm: "D2 [F2, L' B L] D2"
    },
    {
        FTarget: "V",
        STarget: "C",
        Algorithm: "D [B' R' B, L2] D'"
    },
    {
        FTarget: "V",
        STarget: "M",
        Algorithm: "D [B' R2 B, L2] D'"
    },
    {
        FTarget: "V",
        STarget: "S",
        Algorithm: "U' [L2, B R' B'] U"
    },
    {
        FTarget: "V",
        STarget: "T",
        Algorithm: "U' [U' R U, L2] U"
    },
    {
        FTarget: "W",
        STarget: "A",
        Algorithm: "[L F L', B2]"
    },
    {
        FTarget: "W",
        STarget: "C",
        Algorithm: "D' [B L B', R2] D"
    },
    {
        FTarget: "W",
        STarget: "M",
        Algorithm: "[B2, R' F' R]"
    },
    {
        FTarget: "W",
        STarget: "S",
        Algorithm: "D R' [U', L2 D' L2 D L2] R D"
    },
    {
        FTarget: "W",
        STarget: "T",
        Algorithm: "[L' F2 L, B2]"
    },
    {
        FTarget: "X",
        STarget: "A",
        Algorithm: "[F2, L B' L']"
    },
    {
        FTarget: "X",
        STarget: "C",
        Algorithm: "[B L B', R2]"
    },
    {
        FTarget: "X",
        STarget: "M",
        Algorithm: "R2 [B D' B', U'] R2"
    } 
];

