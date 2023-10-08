import { Test } from '@nestjs/testing';
import { ConfigModule} from '@nestjs/config';
import ServiceConfigurationEnvironment from './ServiceConfigurationEnvironment';
import Configuration from './Configuration/Configuration';

describe('Custom Environment Env File Path', () => {
  let serviceConfiguration: ServiceConfigurationEnvironment;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          load: [Configuration],
        }),
      ],
      providers: [ServiceConfigurationEnvironment],
    }).compile();

    serviceConfiguration = moduleRef.get(ServiceConfigurationEnvironment);
  });

  test('test custom env path file', () => {
    expect(Configuration().productionMode).toBe('production');
    expect(Configuration().productionMode).toEqual('production');
    expect(Configuration().productionMode).not.toEqual('fooBar');
    expect(Configuration().productionMode).not.toEqual('Bar');
    expect(Configuration().productionMode).not.toEqual('Bar');
    expect(Configuration().productionMode).not.toEqual('HELLO WORLD');
    expect(serviceConfiguration).toBeDefined();
  });
});
