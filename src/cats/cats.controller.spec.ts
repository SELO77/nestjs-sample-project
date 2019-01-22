import {Test} from '@nestjs/testing';
import {CatsController} from './cats.controller';
import {CatsService} from './cats.service';
import {Cat} from './cats.entity';
import {getRepositoryToken} from '@nestjs/typeorm';

describe('Cats Controller', () => {
    let catsService: CatsService;
    let catsController: CatsController;
    const catsRepository = {};

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            controllers: [CatsController],
            providers: [
                CatsService,
                {
                    provide: getRepositoryToken(Cat),
                    useValue: catsRepository,
                },
            ],
        }).compile();

        catsService = module.get<CatsService>(CatsService);
        catsController = module.get<CatsController>(CatsController);

    });

    it('should be defined', () => {
        expect(catsController).toBeDefined();
    });
});
