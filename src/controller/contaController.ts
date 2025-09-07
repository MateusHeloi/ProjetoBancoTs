import { Conta } from "../model/conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else {
            console.log("\nA Conta número: " + numero + " não foi encontrada!");
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("\nA conta número: " + conta.numero + " foi criada com sucesso!\n");
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA Conta número: " + conta.numero + " foi atualizada com sucesso!");
        } else {
            console.log("\nA Conta número: " + conta.numero + " não foi encontrada!");
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("\nA Conta número: " + numero + " foi apagada com sucesso!");
        } else {
            console.log("\nA Conta número: " + numero + " não foi encontrada!");
        }
    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            if (conta.sacar(valor) == true) {
                console.log("\nO Saque na Conta número: " + numero + " foi efetuado com sucesso!");
            }
        } else {
            console.log("\nA Conta número: " + numero + " não foi encontrada!");
        }
    }

    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log("\nO Depósito na Conta número: " + numero + " foi efetuado com sucesso!");
        } else {
            console.log("\nA Conta número: " + numero + " não foi encontrada!");
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log("\nA Transferência da Conta número: " + numeroOrigem +
                    " para a Conta número: " + numeroDestino + " foi efetuada com sucesso!");
            }
        } else {
            console.log("\nA Conta número: " + numeroOrigem + " e/ou a Conta número: " + numeroDestino + " não foram encontradas!");
        }
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
}
