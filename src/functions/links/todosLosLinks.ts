import { LinkIndividual } from "@/types";

//@ts-ignore
export const todosLosLinksIndividual = async ():LinkIndividual[] => {
    const temas:LinkIndividual[] = await fetch('/links.json')
        .then(response => response.json())
        .then(data => {
            return data
    });
    return temas.sort((link1, link2) => link1.jerarquia - link2.jerarquia);;
}