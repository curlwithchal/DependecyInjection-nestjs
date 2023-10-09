import { Test } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ServiceConfigurationEnvironment from './ServiceConfigurationEnvironment';
import * as process from 'process';

describe('Load Environment', () => {
  let serviceConfiguration: ServiceConfigurationEnvironment;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [ServiceConfigurationEnvironment],
    }).compile();

    serviceConfiguration = moduleRef.get(ServiceConfigurationEnvironment);
  });

  test('test env Get environment', () => {
    const config = new ConfigService();
    expect(config.get('FOOBAR')).toEqual('foobar');
    expect(config.get('FOOBAR')).toEqual(process.env.FOOBAR);
    expect(serviceConfiguration).toBeDefined();
  });
});
