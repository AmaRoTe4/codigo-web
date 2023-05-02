import { Tema } from "@/types";

//@ts-ignore
export const ObtenerTodosTemas = async ():Tema[] => {
    const temas:Tema[] = await fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            return data
    });
    return temas;
}