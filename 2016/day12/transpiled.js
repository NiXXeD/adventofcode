//For part 1, run as-is
//For part 2, set c = 1 at the start

// cpy 1 a
// cpy 1 b
// cpy 26 d
let a = 1, b = 1, c = 0, d = 26

// jnz c 2
// jnz 1 5
if (c) {
    // cpy 7 c
    c = 7
    do {
        // inc d
        // dec c
        d++
        c--

        // jnz c -2
    } while (c)
}

do {
    // cpy a c
    c = a

    do {
        // inc a
        // dec b
        a++
        b--

        // jnz b -2
    } while (b)

    // cpy c b
    // dec d
    // jnz d -6
    b = c
    d--
} while (d)

// cpy 16 c
c = 16
do {
    // cpy 17 d
    d = 17
    do {
        // inc a
        // dec d
        a++
        d--

        // jnz d -2
    } while (d)

    // dec c
    c--

    // jnz c -5
} while (c)

console.log(`Answer: ${a}`)
