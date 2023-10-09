import { readFileSync } from 'fs';
import { join } from 'path';
import * as yaml from 'js-yaml';

const CONFIGURATION_FILE_YML = 'configuration.yml';

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, CONFIGURATION_FILE_YML), 'utf8'),
  ) as Record<string, any>;
};
