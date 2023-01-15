export class AuthModel {
  Id: number;
  // User: User | null;
  User: any;
  constructor(id: number, user?: any) {
    this.Id = id;
    if (user) {
      this.User = user;
    }
  }
}
