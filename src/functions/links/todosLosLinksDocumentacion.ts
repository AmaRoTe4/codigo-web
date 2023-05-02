import { LinkData, Tema } from "@/types";
import { ObtenerTodosTemas } from "../Temas";

//@ts-ignore
const obtenerLinksDocumentacion = async ():LinkData[] => {
    const temas: Tema[] = await ObtenerTodosTemas();
    let links: LinkData[] = []

    if (temas === undefined) return [];

    temas.map(n =>
        n.documentacion.map(m => {
            m.name = 'Documentacion ' + n.name;
            links.push(m)
        })
    );

    return links
}

export default obtenerLinksDocumentacion