import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs/index';
import {AxiosResponse} from 'axios';

@Injectable()
export class WalletService {
    constructor(private readonly httpService: HttpService) {
    }

    getBalance(): Observable<AxiosResponse<any>> {
        return this.httpService.get('http://httpbin.org/json');
    }
}
