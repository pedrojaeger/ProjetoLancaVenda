export interface Venda {
    id?: string;
    cliente: string;
    valor: number;
    formaPagamento: string;
    data: Date;
}