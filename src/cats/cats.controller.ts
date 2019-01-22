import {Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Req, Res} from '@nestjs/common';
import {CatsService} from './cats.service';
import {Cat} from './interfaces/cat.interface';
import {CreateCatDto} from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    // @Get()
    // async findAll(@Req() request, @Res() response) {
    //     response.status(HttpStatus.OK).json([]);
    // }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe()) id): Promise<Cat> {
        return this.catsService.findOne(id);
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Put(':id')
    async update(@Param('id', new ParseIntPipe()) id) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
}
