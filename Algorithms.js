var algorithms = [
    {
        FTarget: "A",
        STarget: "M",
        Algorithm: "[B D' B', U]"
    },
    {
        FTarget: "A",
        STarget: "S",
        Algorithm: "[U', L D' L']"
    },
    {
        FTarget: "C",
        STarget: "M",
        Algorithm: "[B D' B', U']"
    },
    {
        FTarget: "C",
        STarget: "S",
        Algorithm: "[B D2 B', U]"
    },
    {
        FTarget: "D",
        STarget: "M",
        Algorithm: "[B D' B', U2]"
    },
    {
        FTarget: "D",
        STarget: "S",
        Algorithm: "[B D2 B', U2]"
    },
    {
        FTarget: "E",
        STarget: "M",
        Algorithm: "F' [F', R' B2 R] F"
    },
    {
        FTarget: "E",
        STarget: "S",
        Algorithm: "[B' R2 B, L']"
    },
    {
        FTarget: "F",
        STarget: "M",
        Algorithm: "D' F [U2, F D2 F'] F' D"
    },
    {
        FTarget: "F",
        STarget: "S",
        Algorithm: "F D' [L2 D' L2 D L2, U2] D F'"
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
        STarget: "M",
        Algorithm: "[R' U R, D2]"
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
        STarget: "M",
        Algorithm: "R2 [B D' B', U'] R2"
    } 
];

