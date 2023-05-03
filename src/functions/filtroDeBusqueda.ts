import { LinkIndividual } from "@/types";

export const Filtro = (data:LinkIndividual[] , text:string):LinkIndividual[] => {
    //textp grande y ver si incluye todo en minuscula
    //ver despues por temas de semi coincidencias
    
    return data.filter(n => {
        let dataText:string = "";
        n.palabras_relacionadas.map(m => dataText += (m + " ")) 

        return dataText.toLowerCase().includes(text.toLowerCase())
    })
}