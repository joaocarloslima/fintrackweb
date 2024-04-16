"use server"

export async function get(){

    const resp = await fetch("http://localhost:8080/categoria")
    return await resp.json()

}