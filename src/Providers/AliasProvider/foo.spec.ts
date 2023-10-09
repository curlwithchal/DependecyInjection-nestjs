import { Test } from '@nestjs/testing';
import Foo from './foo';

describe('Alias Provider', () => {
  let foo: Foo;
  let fooAlias: Foo;

  const configAliasLoggerFoo = {
    provide: 'AliasLoggerFoo',
    useExisting: Foo,
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [Foo, configAliasLoggerFoo],
    }).compile();

    foo = moduleRef.get<Foo>(Foo);
    fooAlias = moduleRef.get('AliasLoggerFoo');
  });

  test('test Alias Provider', () => {
    expect(fooAlias).toBeDefined();
    expect(foo).toEqual(fooAlias);
  });
});
