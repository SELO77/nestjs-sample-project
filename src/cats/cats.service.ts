import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Cat} from './cats.entity';
import {Repository} from 'typeorm';
import {CreateCatDto} from './dto/create-cat.dto';

@Injectable()
export class CatsService {
    constructor(@InjectRepository(Cat)
                private readonly catRepository: Repository<Cat>) {
    }

    async create(cat: CreateCatDto) {
        const catObj = new Cat();
        catObj.age = cat.age;
        catObj.name = cat.name;
        catObj.breed = cat.breed;
        await this.catRepository.save(catObj);
    }

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async findOne(id: number): Promise<Cat> {
        return await this.catRepository.findOne(id);
    }
}
