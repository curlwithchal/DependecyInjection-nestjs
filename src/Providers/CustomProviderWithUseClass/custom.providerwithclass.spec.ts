import ConfigService from './custom.providerwithclass';
import { Test } from '@nestjs/testing';
import * as process from 'process';
import DevelopmentConfigService from './DevelopmentConfigService';
import ProductionDevelopmentConfigService from './ProductionDevelopmentConfigService';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

describe('test custom provider with useClass', () => {
  let configService: ConfigService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          load: [configuration],
        }),
      ],
      providers: [
        {
          provide: ConfigService,
          useClass:
            process.env.DEVELOPMENT === 'development'
              ? DevelopmentConfigService
              : ProductionDevelopmentConfigService,
        },
      ],
    }).compile();

    configService = moduleRef.get<ConfigService>(ConfigService);
  });

  test('test config serve', () => {
    expect(configService).toBeInstanceOf(DevelopmentConfigService);
  });
});
