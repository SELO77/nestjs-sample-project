import {Test, TestingModule} from '@nestjs/testing';
import {WalletService} from './wallet.service';

describe('WalletService', () => {
    let service: WalletService;
    const httpService = {};

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WalletService,
                {
                    provide: 'HttpService',
                    useValue: httpService,
                },
            ],
        }).compile();
        service = module.get<WalletService>(WalletService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
