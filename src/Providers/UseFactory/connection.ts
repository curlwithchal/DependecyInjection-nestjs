import { Injectable } from '@nestjs/common';

@Injectable()
export default class Connection {
  private readonly connection: Connection;

  getConnection(): string {
    return 'http://localhost:123';
  }
}
