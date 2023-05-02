export interface Tema {
    name: string,
    concepto :string,
    documentacion: LinkData[],
    aprender: LinkData[],
    practicar: LinkData[],
    jerarquia: number,
    color: string
}

export interface LinkData{
    link: string;
    jerarquia: number;
    name?: string;
}