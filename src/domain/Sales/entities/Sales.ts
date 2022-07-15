import { uuid } from 'uuidv4';

class Sales {
  public readonly id: string;

  public clients: string;
  public products: string;
  public valor: string;
  public quant: string;
  public status: boolean;

  constructor(
    id: string,
    clients: string,
    products: string,
    valor: string,
    quant: string,
    status: boolean
  ) {
    this.id = id;
    this.clients = clients;
    this.products = products;
    this.valor = valor;
    this.quant = quant;
    this.status = status;

    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Sales };
