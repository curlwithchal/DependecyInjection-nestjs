import CustomProviderWithToken from './custom.providerwithtoken';
import { Test } from '@nestjs/testing';
import ProviderWithToken from './custom.providerwithtoken';

class ImplementCustomToken implements ProviderWithToken {}

describe('fff', () => {
  let provider: CustomProviderWithToken;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: 'CUSTOMTOKEN',
          useValue: ImplementCustomToken,
        },
      ],
    }).compile();

    provider = moduleRef.get('CUSTOMTOKEN');
  });

  test('test custom provider with token Inject', () => {
    expect(provider).toBeDefined();
  });
});
