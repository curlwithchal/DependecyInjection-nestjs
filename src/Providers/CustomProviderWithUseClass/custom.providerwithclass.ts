import { Injectable } from '@nestjs/common';

interface InterfaceConfiguration {}
@Injectable()
export default abstract class ConfigService {
  private readonly configuration: InterfaceConfiguration;
}
