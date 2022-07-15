class User {
  public readonly id: string;
  public name: string;
  public user: string;
  public password: string;

  constructor(id: string, name: string, user: string, password: string) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.password = password;
  }
}

export { User };
