import { Conta } from "../model/conta";
import { ContaRepository } from "../repository/ContaRepository";

export class contaController implements ContaRepository {

  private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

  
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }





  procurarPorNumero(numero: number): Conta | null {
    throw new Error("Method not implemented.");
  }
  
  cadastrar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  deletar(numero: number): void {
    throw new Error("Method not implemented.");
  }
    
}
