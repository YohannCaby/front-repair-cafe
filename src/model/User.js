export class User {
  id;
  login;
  password;
  role;
  constructor(id, login, password, role) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.role = role;
  }
}
