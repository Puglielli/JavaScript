function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    comprarTv50 = trabalho1 && trabalho2
    // comprarTv32 = !!(trabalho1 ˆ trabalho2) // Bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador Unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
