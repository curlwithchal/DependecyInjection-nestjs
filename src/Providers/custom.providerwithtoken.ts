import {Inject, Injectable} from "@nestjs/common";


export default class ProviderWithToken{

}

@Injectable()
export default class CustomProviderWithToken {
    constructor(@Inject('CUSTOMTOKEN') private customProviderWithToken: ProviderWithToken) {
    }
}
