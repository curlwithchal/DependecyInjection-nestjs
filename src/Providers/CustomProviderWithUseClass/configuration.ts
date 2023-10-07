import * as process from 'process';

export default () => ({
  development: process.env.NODE_ENV,
});
