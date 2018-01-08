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
    },
    {
        FTarget: "D",
        STarget: "C",
        Algorithm: "R2 [B2, R F R'] R2"
    },
    {
        FTarget: "D",
        STarget: "E",
        Algorithm: "R2 [U' F' U, B2] R2"
    },
    {
        FTarget: "D",
        STarget: "F",
        Algorithm: "F [U2, B D2 B'] F'"
    },
    {
        FTarget: "D",
        STarget: "I",
        Algorithm: "R' [U2, L' D2 L] R"
    },
    {
        FTarget: "D",
        STarget: "J",
        Algorithm: "F [R2, U' L' U] F'"
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
        STarget: "R",
        Algorithm: "[L' D L, U2]"
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
        STarget: "D",
        Algorithm: "R2 [B2, U' F' U] R2"
    },
    {
        FTarget: "E",
        STarget: "I",
        Algorithm: "R [B2, U' F' U] R'"
    },
    {
        FTarget: "E",
        STarget: "J",
        Algorithm: "[U R U', L']"
    },
    {
        FTarget: "E",
        STarget: "K",
        Algorithm: "[L', F R F']"
    },
    {
        FTarget: "E",
        STarget: "L",
        Algorithm: "[L, U' R' U]"
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
        STarget: "D",
        Algorithm: "R' [L' D2 L, U2] R"
    },
    {
        FTarget: "I",
        STarget: "E",
        Algorithm: "R [U' F' U, B2] R'"
    },
    {
        FTarget: "I",
        STarget: "F",
        Algorithm: "L [L2 D L2 D' L2, U2] L'"
    },
    {
        FTarget: "I",
        STarget: "K",
        Algorithm: "R' [U2, R' D' R] R"
    },
    {
        FTarget: "I",
        STarget: "L",
        Algorithm: "R' [U2, R2 D' R2 D R2] R"
    },
    {
        FTarget: "I",
        STarget: "M",
        Algorithm: "R' [B D' B', U2] R"
    },
    {
        FTarget: "I",
        STarget: "N",
        Algorithm: "R' [U2, R' D R] R"
    },
    {
        FTarget: "I",
        STarget: "O",
        Algorithm: "R' [U2, F D2 F'] R"
    },
    {
        FTarget: "I",
        STarget: "P",
        Algorithm: "R' [U2, R' D2 R] R"
    },
    {
        FTarget: "I",
        STarget: "Q",
        Algorithm: "L [U2, R D R'] L'"
    },
    {
        FTarget: "I",
        STarget: "R",
        Algorithm: "D' y'[L2 D' L2 D L2, U2] y D"
    },
    {
        FTarget: "I",
        STarget: "S",
        Algorithm: "R' [L' D' L, U2] R"
    },
    {
        FTarget: "I",
        STarget: "T",
        Algorithm: "[L2 D' L2 D L2, U2]"
    },
    {
        FTarget: "I",
        STarget: "U",
        Algorithm: "z [U2, R2 D R2 D' R2]"
    },
    {
        FTarget: "I",
        STarget: "V",
        Algorithm: "R' [L2 D' L2 D L2, U2] R"
    },
    {
        FTarget: "I",
        STarget: "W",
        Algorithm: "R [L F2 L', B2] R'"
    },
    {
        FTarget: "I",
        STarget: "X",
        Algorithm: "R [L F' L', B2] R'"
    },
    {
        FTarget: "J",
        STarget: "A",
        Algorithm: "[L F L', B]"
    },
    {
        FTarget: "J",
        STarget: "D",
        Algorithm: "F [U' L' U, R2] F'"
    },
    {
        FTarget: "J",
        STarget: "E",
        Algorithm: "[L', U R U']"
    },
    {
        FTarget: "J",
        STarget: "F",
        Algorithm: "F' [L2, U L' U'] F"
    },
    {
        FTarget: "J",
        STarget: "K",
        Algorithm: "[U' L' U, R]"
    },
    {
        FTarget: "J",
        STarget: "L",
        Algorithm: "[L F' L', B]"
    },
    {
        FTarget: "J",
        STarget: "M",
        Algorithm: "[B', U F2 U']"
    },
    {
        FTarget: "J",
        STarget: "N",
        Algorithm: "[B' L F2 L']"
    },
    {
        FTarget: "J",
        STarget: "O",
        Algorithm: "D [B', U F2 U'] D'"
    },
    {
        FTarget: "J",
        STarget: "P",
        Algorithm: "[L, U R U']"
    },
    {
        FTarget: "J",
        STarget: "Q",
        Algorithm: "D' [R2, F L2 F'] D"
    },
    {
        FTarget: "J",
        STarget: "R",
        Algorithm: "[U' L' U, R']"
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
        FTarget: "J",
        STarget: "U",
        Algorithm: "[L2, U R' U']"
    },
    {
        FTarget: "J",
        STarget: "V",
        Algorithm: "D [L2, U R' U'] D'"
    },
    {
        FTarget: "J",
        STarget: "W",
        Algorithm: "D2 [L2, U R' U'] D2"
    },
    {
        FTarget: "J",
        STarget: "X",
        Algorithm: "[U' F2 U, B]"
    },
    {
        FTarget: "K",
        STarget: "A",
        Algorithm: "[F', L' B' L]"
    },
    {
        FTarget: "K",
        STarget: "C",
        Algorithm: "F [R2, B L B'] F'"
    },
    {
        FTarget: "K",
        STarget: "E",
        Algorithm: "[F R F', L]"
    },
    {
        FTarget: "K",
        STarget: "F",
        Algorithm: "l' [U2, L2 D' L2 D L2] l"
    },
    {
        FTarget: "K",
        STarget: "I",
        Algorithm: "R' [R' D' R, U2] R"
    },
    {
        FTarget: "K",
        STarget: "J",
        Algorithm: "[R, U' L' U]"
    },
    {
        FTarget: "K",
        STarget: "M",
        Algorithm: "R' [F' U2 F, D'] R"
    },
    {
        FTarget: "K",
        STarget: "N",
        Algorithm: "[R B' R', L2]"
    },
    {
        FTarget: "K",
        STarget: "O",
        Algorithm: "F' [L' D' L, U]"
    },
    {
        FTarget: "K",
        STarget: "P",
        Algorithm: "[L, B' R B]"
    },
    {
        FTarget: "K",
        STarget: "Q",
        Algorithm: "R' [U', B D2 B'] R"
    },
    {
        FTarget: "K",
        STarget: "R",
        Algorithm: "[R2, D' L D] R2"
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
        FTarget: "K",
        STarget: "U",
        Algorithm: "[L2, B' R B]"
    },
    {
        FTarget: "K",
        STarget: "V",
        Algorithm: "D [L2, B' R B] D'"
    },
    {
        FTarget: "K",
        STarget: "W",
        Algorithm: "[D' F D, B2]"
    },
    {
        FTarget: "K",
        STarget: "X",
        Algorithm: "[F, D B2 D']"
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
        STarget: "E",
        Algorithm: "[U' R' U, L]"
    },
    {
        FTarget: "L",
        STarget: "F",
        Algorithm: "F [U2, L' D2 L] F'"
    },
    {
        FTarget: "L",
        STarget: "I",
        Algorithm: "R' [R2 D' R2 D R2, U2] R"
    },
    {
        FTarget: "L",
        STarget: "J",
        Algorithm: "[R' F' R, B']"
    },
    {
        FTarget: "L",
        STarget: "M",
        Algorithm: "[F2, D' B D]"
    },
    {
        FTarget: "L",
        STarget: "N",
        Algorithm: "F [U2, L' D2 L] F'"
    },
    {
        FTarget: "L",
        STarget: "O",
        Algorithm: "[B', L F' L']"
    },
    {
        FTarget: "L",
        STarget: "P",
        Algorithm: "F [R U2 R', D2]"
    },
    {
        FTarget: "L",
        STarget: "Q",
        Algorithm: "[F' L F, R2]"
    },
    {
        FTarget: "L",
        STarget: "R",
        Algorithm: "D' [F, R' B2 R] D"
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
        FTarget: "L",
        STarget: "U",
        Algorithm: "R' [F' R' F, L2] R"
    },
    {
        FTarget: "L",
        STarget: "V",
        Algorithm: "D' [B2, F' L F] D"
    },
    {
        FTarget: "L",
        STarget: "W",
        Algorithm: "[B2, F' L F]"
    },
    {
        FTarget: "L",
        STarget: "X",
        Algorithm: "D [B2, F' L F] D'"
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
        Algorithm: "F' [R U2 R', D2] F "
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
        STarget: "D",
        Algorithm: "[U2, L' D' L]"
    },
    {
        FTarget: "O",
        STarget: "E",
        Algorithm: "[U' F' U, B']"
    },
    {
        FTarget: "O",
        STarget: "F",
        Algorithm: "F [U2, L' D' L] F'"
    },
    {
        FTarget: "O",
        STarget: "I",
        Algorithm: "R' [U2, L' D' L] R"
    },
    {
        FTarget: "O",
        STarget: "J",
        Algorithm: "R2 [D2, R U2 R] R2"
    },
    {
        FTarget: "O",
        STarget: "K",
        Algorithm: "R' [D2, R U2 R] R"
    },
    {
        FTarget: "O",
        STarget: "L",
        Algorithm: "R [R D' R', U] R'"
    },
    {
        FTarget: "O",
        STarget: "M",
        Algorithm: "D [D, F' U2 F] D'"
    },
    {
        FTarget: "O",
        STarget: "N",
        Algorithm: "[B, D F' D]"
    },
    {
        FTarget: "O",
        STarget: "Q",
        Algorithm: "[D', R' U R]"
    },
    {
        FTarget: "O",
        STarget: "R",
        Algorithm: "R [D2, F' U2 F] R'"
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
        FTarget: "O",
        STarget: "U",
        Algorithm: "F2 [U2, L' D' L] F2"
    },
    {
        FTarget: "O",
        STarget: "W",
        Algorithm: "R2 [U2, L' D' L] R2"
    },
    {
        FTarget: "O",
        STarget: "X",
        Algorithm: "R2 [R' D R', U] R2"
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
        STarget: "D",
        Algorithm: "[R' D2 R, U2]"
    },
    {
        FTarget: "P",
        STarget: "E",
        Algorithm: "F [D2, R U2 R'] F'"
    },
    {
        FTarget: "P",
        STarget: "F",
        Algorithm: "F' [R' D2 R', U2] F"
    },
    {
        FTarget: "P",
        STarget: "I",
        Algorithm: "R' [R' D2 R, U2] R"
    },
    {
        FTarget: "P",
        STarget: "J",
        Algorithm: "[U R U', L]"
    },
    {
        FTarget: "P",
        STarget: "K",
        Algorithm: "[B' R B, L]"
    },
    {
        FTarget: "P",
        STarget: "L",
        Algorithm: "F [D2, R U2 R']"
    },
    {
        FTarget: "P",
        STarget: "M",
        Algorithm: "U L' [U', L2 D' L2 D L2] L U'"
    },
    {
        FTarget: "P",
        STarget: "N",
        Algorithm: "[D, F U' F']"
    },
    {
        FTarget: "P",
        STarget: "Q",
        Algorithm: "[U R U', L]"
    },
    {
        FTarget: "P",
        STarget: "R",
        Algorithm: "[B' U' B, D']"
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
        FTarget: "P",
        STarget: "U",
        Algorithm: "F2 [R' D2 R, D2] F2"
    },
    {
        FTarget: "P",
        STarget: "W",
        Algorithm: "R2 [R' D2 R, D2] R2"
    },
    {
        FTarget: "P",
        STarget: "X",
        Algorithm: "R2 [B' R' B, L] R2"
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
        STarget: "D",
        Algorithm: "[F D' F', U2]"
    },
    {
        FTarget: "Q",
        STarget: "E",
        Algorithm: "[L, U R' U]"
    },
    {
        FTarget: "Q",
        STarget: "F",
        Algorithm: "F' [L2, U R' U'] F"
    },
    {
        FTarget: "Q",
        STarget: "I",
        Algorithm: "L [R D R', U2] L'"
    },
    {
        FTarget: "Q",
        STarget: "J",
        Algorithm: "D' [F L2 F', R2] D"
    },
    {
        FTarget: "Q",
        STarget: "K",
        Algorithm: "R' [B D2 B', U'] R"
    },
    {
        FTarget: "Q",
        STarget: "L",
        Algorithm: "[R2, F' L F]"
    },
    {
        FTarget: "Q",
        STarget: "M",
        Algorithm: "[R' U R, D2]"
    },
    {
        FTarget: "Q",
        STarget: "N",
        Algorithm: "R' [U, B' D2 B] R"
    },
    {
        FTarget: "Q",
        STarget: "O",
        Algorithm: "[R' U R, D']"
    },
    {
        FTarget: "Q",
        STarget: "P",
        Algorithm: "[L, U R U']"
    },
    {
        FTarget: "Q",
        STarget: "S",
        Algorithm: "[D', F' U2 F]"
    },
    {
        FTarget: "Q",
        STarget: "T",
        Algorithm: "[D', R U2 R]"
    },
    {
        FTarget: "Q",
        STarget: "U",
        Algorithm: "[L2, U R U']"
    },
    {
        FTarget: "Q",
        STarget: "V",
        Algorithm: "R' [U', L2 D' L2 D L2] R"
    },
    {
        FTarget: "Q",
        STarget: "X",
        Algorithm: "D' [L2, B' R2 B] D"
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
        STarget: "D",
        Algorithm: "[U2, L' D L]"
    },
    {
        FTarget: "R",
        STarget: "E",
        Algorithm: "[U' R2 U, L']"
    },
    {
        FTarget: "R",
        STarget: "F",
        Algorithm: "F' [F' R' F, L2] F"
    },
    {
        FTarget: "R",
        STarget: "I",
        Algorithm: "D' y'[U2, L2 D' L2 D L2] y D"
    },
    {
        FTarget: "R",
        STarget: "J",
        Algorithm: "[R', U' L' U]"
    },
    {
        FTarget: "R",
        STarget: "K",
        Algorithm: "[D' L, D, R2]"
    },
    {
        FTarget: "R",
        STarget: "L",
        Algorithm: "D' [R' B2 R, F] D"
    },
    {
        FTarget: "R",
        STarget: "M",
        Algorithm: "R [F' U2 F, D] R'"
    },
    {
        FTarget: "R",
        STarget: "N",
        Algorithm: "[D2, F U' F']"
    },
    {
        FTarget: "R",
        STarget: "O",
        Algorithm: "R [F' U2 F, D2] R'"
    },
    {
        FTarget: "R",
        STarget: "P",
        Algorithm: "[D', B' U' B]"
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
        FTarget: "R",
        STarget: "U",
        Algorithm: "[F' R F, L2]"
    },
    {
        FTarget: "R",
        STarget: "V",
        Algorithm: "U' [L2, F R' F'] U"
    },
    {
        FTarget: "R",
        STarget: "X",
        Algorithm: "F [D2, F U' F] F'"
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
        Algorithm: "x [U2, L2 D' L2 D L2] x'"
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
        Algorithm: "[R U2 R, D']"
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
        STarget: "D",
        Algorithm: "D' [U2, L2 D' L2 D L2] D"
    },
    {
        FTarget: "U",
        STarget: "E",
        Algorithm: "D2 [U' F' U, B2] D2"
    },
    {
        FTarget: "U",
        STarget: "F",
        Algorithm: "F' [L2, B' L2 B] F"
    },
    {
        FTarget: "U",
        STarget: "I",
        Algorithm: "z [R2 D R2 D' R2, U2]"
    },
    {
        FTarget: "U",
        STarget: "J",
        Algorithm: "[U R' U', L2]"
    },
    {
        FTarget: "U",
        STarget: "K",
        Algorithm: "[B' R B, L2]"
    },
    {
        FTarget: "U",
        STarget: "L",
        Algorithm: "R' [L2, F' R' F] R"
    },
    {
        FTarget: "U",
        STarget: "O",
        Algorithm: "F2 [L' D' L, U2] F2"
    },
    {
        FTarget: "U",
        STarget: "P",
        Algorithm: "F2 [D2, R' D2 R] F2"
    },
    {
        FTarget: "U",
        STarget: "Q",
        Algorithm: "[U R U', L2]"
    },
    {
        FTarget: "U",
        STarget: "R",
        Algorithm: "[L2, F' R F]"
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
        FTarget: "U",
        STarget: "V",
        Algorithm: "D [F' R' F, L2] D'"
    },
    {
        FTarget: "U",
        STarget: "W",
        Algorithm: "D'[L2 U L2 U' L2, D2] D"
    },
    {
        FTarget: "U",
        STarget: "X",
        Algorithm: "[F' R' F, L2]"
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
        STarget: "D",
        Algorithm: "[U2, L2 D' L2 D L2]"
    },
    {
        FTarget: "V",
        STarget: "E",
        Algorithm: "D' [U' F' U, B2] D"
    },
    {
        FTarget: "V",
        STarget: "F",
        Algorithm: "F [U2, L2 D' L2 D L2] F'"
    },
    {
        FTarget: "V",
        STarget: "I",
        Algorithm: "R' [U2, L2 D' L2 D L2] R"
    },
    {
        FTarget: "V",
        STarget: "J",
        Algorithm: "D [U R' U', L2] D'"
    },
    {
        FTarget: "V",
        STarget: "K",
        Algorithm: "D [B' R B, L2] D'"
    },
    {
        FTarget: "V",
        STarget: "L",
        Algorithm: "D' [F' L F, B2] D"
    },
    {
        FTarget: "V",
        STarget: "M",
        Algorithm: "D [B' R2 B, L2] D'"
    },
    {
        FTarget: "V",
        STarget: "N",
        Algorithm: "F [U, L2 D' L2 D L2] F'"
    },
    {
        FTarget: "V",
        STarget: "Q",
        Algorithm: "R' [L2 D' L2 D L2, U'] R"
    },
    {
        FTarget: "V",
        STarget: "R",
        Algorithm: "U' [F R' F', L2] U"
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
        FTarget: "V",
        STarget: "U",
        Algorithm: "D [L2, F' R' F] D'"
    },
    {
        FTarget: "V",
        STarget: "W",
        Algorithm: "D [B2, R F R'] D'"
    },
    {
        FTarget: "V",
        STarget: "X",
        Algorithm: "[L2 U L2 U' L2, D2]"
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
        STarget: "D",
        Algorithm: "D [U2, L2 D' L2 D L2]"
    },
    {
        FTarget: "W",
        STarget: "E",
        Algorithm: "[U' F' U, B2]"
    },
    {
        FTarget: "W",
        STarget: "F",
        Algorithm: "x [L2 U L2 U' L, D2] x"
    },
    {
        FTarget: "W",
        STarget: "I",
        Algorithm: "R [B2, L F2 L'] R'"
    },
    {
        FTarget: "W",
        STarget: "J",
        Algorithm: "D2 [U R' U', L2] D2"
    },
    {
        FTarget: "W",
        STarget: "K",
        Algorithm: "[B2, D' F D]"
    },
    {
        FTarget: "W",
        STarget: "L",
        Algorithm: "[F' L F, B2]"
    },
    {
        FTarget: "W",
        STarget: "M",
        Algorithm: "[B2, R' F' R]"
    },
    {
        FTarget: "W",
        STarget: "N",
        Algorithm: "[U' F U, B2]"
    },
    {
        FTarget: "W",
        STarget: "O",
        Algorithm: "R2 [L' D' L, U2] R2"
    },
    {
        FTarget: "W",
        STarget: "P",
        Algorithm: "R2 [D2, R' D2 R] R2"
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
        FTarget: "W",
        STarget: "U",
        Algorithm: "D'[D2, L2 U L2 U' L2] D"
    },
    {
        FTarget: "W",
        STarget: "V",
        Algorithm: "D [R F R', B2] D'"
    },
    {
        FTarget: "W",
        STarget: "X",
        Algorithm: "[B2, R' F R]"
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
        STarget: "D",
        Algorithm: "[R2 D' R2 D R2, U2]"
    },
    {
        FTarget: "X",
        STarget: "E",
        Algorithm: "R' [L', U R' U'] R"
    },
    {
        FTarget: "X",
        STarget: "F",
        Algorithm: "F' [L2, B' R B] F"
    },
    {
        FTarget: "X",
        STarget: "I",
        Algorithm: "R [B2, L F' L'] R'"
    },
    {
        FTarget: "X",
        STarget: "J",
        Algorithm: "[B, U' F2 U]"
    },
    {
        FTarget: "X",
        STarget: "K",
        Algorithm: "[D B2 D', F]"
    },
    {
        FTarget: "X",
        STarget: "L",
        Algorithm: "D [F' L F, B2] D'"
    },
    {
        FTarget: "X",
        STarget: "M",
        Algorithm: "R2 [B D' B', U'] R2"
    },
    {
        FTarget: "X",
        STarget: "N",
        Algorithm: "[D B2 D', F']"
    },
    {
        FTarget: "X",
        STarget: "O",
        Algorithm: "R2 [U, R' D R'] R2"
    },
    {
        FTarget: "X",
        STarget: "P",
        Algorithm: "R2 [L, B' R' B] R2"
    },
    {
        FTarget: "X",
        STarget: "Q",
        Algorithm: "D' [B' R2 B, L2] D"
    },
    {
        FTarget: "X",
        STarget: "R",
        Algorithm: "F [F U' F, D2] F'"
    },
    {
        FTarget: "X",
        STarget: "U",
        Algorithm: "[L2, F' R' F]"
    },
    {
        FTarget: "X",
        STarget: "V",
        Algorithm: "[D2, L2 U L2 U' L2]"
    },
    {
        FTarget: "X",
        STarget: "W",
        Algorithm: "[R' F R, B2]"
    },
];

