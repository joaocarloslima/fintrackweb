"use server"

import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 4000))
    const id = formData.get("id")

    const data = {
        nome: formData.get("nome"),
        icone: formData.get("icone")
    }

    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": "pt-br"
        }
    }

    const resp = await fetch("http://localhost:8080/categoria/" + id, options)

    if (resp.ok){
        redirect("/categorias")
    }

    if (!resp.ok){
        if(resp.status == 400){
            const json = await resp.json()
            return {
                messageNome: json.find((message: any) => message.campo == 'nome').mensagem
            }
        }
        throw new Error("erro ao atualizar categoria")
    }
}