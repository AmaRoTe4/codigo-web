export interface Tema {
    name: string,
    concepto :string,
    documentacion: Link[],
    aprender: Link[],
    jerarquia: number,
    color: string
}

export interface Link{
    link: string;
    jerarquia: number;
}