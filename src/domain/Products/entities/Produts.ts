class Products {
  public readonly id: string;
  public desc: string;
  public unMed: string;
  public preco: number;
  public valor: number;

  constructor(
    id: string,
    desc: string,
    unMed: string,
    preco: number,
    valor: number
  ) {
    this.id = id;
    this.desc = desc;
    this.unMed = unMed;
    this.preco = preco;
    this.valor = valor;
  }
}

export { Products };
