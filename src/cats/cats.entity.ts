import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 300})
    name: string;

    @Column('bigint')
    age: number;

    @Column()
    breed: string;
}
