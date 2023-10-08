import * as process from 'process';

export default () => ({
  productionMode: process.env.PRODUCTION,
  fooBar: 'fooBar',
});
