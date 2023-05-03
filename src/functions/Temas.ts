import { Tema } from "@/types";

//@ts-ignore
export const ObtenerTodosTemas = async ():Tema[] => {
    const temas:Tema[] = await fetch('/temas.json')
        .then(response => response.json())
        .then(data => {
            return data
    });
    return temas;
}