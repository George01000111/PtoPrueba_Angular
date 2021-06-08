
export interface Lineacorre {
    id: number;
    codempresa: string;
    nrofac: number;
    nrobol: number;
    nrofacRef: number;
    nrobolRef: number;
    enviaElect: boolean;
    linea: Linea;
    lineaCodlinea: string;
}

export interface Linea {
    codempresa: string;
    codlinea: string;
    deslinea: string;
    estado: boolean;
    trans: boolean;
    datetrans?: any;
    codtipoprod: string;
    correlativo: number;
    articulo: any[];
}
