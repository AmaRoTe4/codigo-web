import { LinkIndividual } from "@/types";

export const Filtro = (data:LinkIndividual[] , text:string):LinkIndividual[] => {    
    return data.filter(n => {
        let words = text.trim().split(" ");
        let dataText:string = "";
        let result:boolean[] = []
        
        n.palabras_relacionadas.map(m => dataText += (m + " ")) 

        words.forEach(word => {
            result.push(
                dataText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
                    word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                )
            )
        })

        return result.every((n) => n === true);
    })
}