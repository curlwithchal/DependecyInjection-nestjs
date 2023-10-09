import { Test } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ServiceConfigurationEnvironment from './ServiceConfigurationEnvironment';

describe('Custom Environment Env File Path', () => {
  let serviceConfiguration: ServiceConfigurationEnvironment;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env.Bar',
        }),
      ],
      providers: [ServiceConfigurationEnvironment],
    }).compile();

    serviceConfiguration = moduleRef.get(ServiceConfigurationEnvironment);
  });

  test('test custom env path file', () => {
    const configService = new ConfigService();
    expect(configService.get('BAR')).toBe('BAR');
    expect(configService.get('BAR')).toEqual('BAR');
    expect(configService.get('BAR')).not.toBe('FOOBAR');
    expect(configService.get('BAR')).not.toEqual('FOOBAR');
    expect(serviceConfiguration).toBeDefined();
  });
});
