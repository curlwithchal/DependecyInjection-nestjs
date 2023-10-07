import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export default class UseFactoryDatabase {
  constructor(@Inject('CONNECTION_DB') private factoryDatabase: string) {}

}
