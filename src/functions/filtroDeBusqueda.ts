import { LinkIndividual } from "@/types";

export const Filtro = (data:LinkIndividual[] , text:string):LinkIndividual[] => {    
    //al final de filtro se ve que esta para retornar las 10 primeras, pero eso se puede hacer de una mejor manera
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
    }).filter((n , i) => i < 10);
}