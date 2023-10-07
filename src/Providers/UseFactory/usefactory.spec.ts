import UseFactoryDatabase from './usefactory.database';
import { Test } from '@nestjs/testing';
import Connection from './connection';

describe('UseFactory Test Provider', () => {
  let connectionDatabase: UseFactoryDatabase;

  const configurationProviders = {
    provide: 'CONNECTION_DB',
    useFactory: (options: Connection) => {
      const connect = options.getConnection();
      return new UseFactoryDatabase(connect);
    },
    inject: [Connection],
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [configurationProviders, Connection],
    }).compile();

    connectionDatabase = moduleRef.get('CONNECTION_DB');
  });

  test('test Use Factory', () => {
    expect(connectionDatabase).toEqual({
      factoryDatabase: 'http://localhost:123',
    });
  });
});