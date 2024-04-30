"use server"

export async function getTotaisPorCategorias() {
    const resp = await fetch("http:localhost:8080/movimentacao/totais-por-categoria")
    return await resp.json()

}

export async function getTotaisPorMes() {
    const resp = await fetch("http:localhost:8080/movimentacao/totais-por-mes")
    return await resp.json()

}