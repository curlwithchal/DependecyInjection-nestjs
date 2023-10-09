import ConfigurationYml from './Configuration/ConfigurationYml';

describe('Config Yml Read', () => {
  test('test yml config read', () => {
    const config = ConfigurationYml();
    console.log(config);
  });
});
