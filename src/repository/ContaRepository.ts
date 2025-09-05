import { Conta } from "../model/conta";

export interface ContaRepository {
    listarTodas(): Conta[] {
    return this.listaContas;
    }


    procurarPorNumero(numero: number): Conta | null;

    listarTodas(): Conta[];

    cadastrar(conta: Conta): void;

    atualizar(conta: Conta): void;

    deletar(numero: number): void;
}
