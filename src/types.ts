export interface Tema {
  name: string;
  concepto: string;
  documentacion: LinkData[];
  aprender: LinkData[];
  practicar: LinkData[];
  jerarquia: number;
  color: string;
}

export interface LinkData {
  link: string;
  jerarquia: number;
  name?: string;
}

export interface LinkIndividual {
  id: number;
  descripcion: string;
  palabras_relacionadas: string[];
  tipo: string;
  link: string;
  jerarquia: number;
}


export interface Ejes {
  x: number;
  y: number;
}

//export type RetornoUseOverFlow = [ Ejes , (ejes:Ejes) => void ];
