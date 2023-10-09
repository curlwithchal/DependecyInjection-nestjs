import { Inject, Injectable } from '@nestjs/common';

class ProviderWithToken {}

@Injectable()
export default class CustomProviderWithToken {
  constructor(
    @Inject('CUSTOMTOKEN') private customProviderWithToken: ProviderWithToken,
  ) {}
}
