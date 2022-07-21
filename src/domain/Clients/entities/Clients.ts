import { uuid } from 'uuidv4';

class Clients {
  public readonly id: string;
  public social: string;
  public cnpj: number;
  public ender: string;

  constructor(id: string, social: string, cnpj: number, ender: string) {
    this.id = id;
    this.social = social;
    this.ender = ender;
    this.cnpj = cnpj;

    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Clients };
