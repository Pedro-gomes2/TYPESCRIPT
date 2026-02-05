import { Pessoa } from "./Pessoa"

export class Jogador extends Pessoa{
	public cansou(): void {
		throw new Error("Method not implemented.");
	}
	
	public cansar(): void {
		console.log(`O ${this.nome} esta cansado!!`);
	}
     
    private _chuteira:number;
    private _marca:string;


	constructor(nome:string,chuteira: number, marca: string) {
		super(nome);
		this._chuteira = chuteira;
		this._marca = marca; 	
	
	}

	public get chuteira(): number {
		return this._chuteira;
	}

	public set chuteira(value: number) {
		this._chuteira = value;
	}
	public get marca(): string {
		return this._marca;
	}

    
	public set marca(value: string) {
		this._marca = value;
	}

	public visualizar(): void {
        super.visualizar();
		console.log(`Calça ${this._chuteira} da marca ${this._marca}`);
     }




}