import { Test } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import ServiceConfigurationEnvironment from './ServiceConfigurationEnvironment';
import Configuration from './Configuration/Configuration';

describe('Custom Environment Env File Path', () => {
  let serviceConfiguration: ServiceConfigurationEnvironment;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
        }),
      ],
      providers: [ServiceConfigurationEnvironment],
    }).compile();

    serviceConfiguration = moduleRef.get(ServiceConfigurationEnvironment);
  });

  test('test ignore env path file', () => {
    expect(Configuration().fooBar).toBe('fooBar');
    expect(Configuration().fooBar).toEqual('fooBar');
    expect(Configuration().fooBar).not.toBe('Production');
    expect(Configuration().fooBar).not.toBe('Hello World');
    expect(serviceConfiguration).toBeDefined();
  });
});
