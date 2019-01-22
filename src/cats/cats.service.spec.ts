import {Test, TestingModule} from '@nestjs/testing';
import {CatsService} from './cats.service';
import {getRepositoryToken} from '@nestjs/typeorm';
import {Cat} from './cats.entity';

describe('CatsService', () => {
    let service: CatsService;
    const catsRepository = {};

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CatsService,
                {
                    provide: getRepositoryToken(Cat),
                    useValue: catsRepository,
                },
            ],
        }).compile();
        service = module.get<CatsService>(CatsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
