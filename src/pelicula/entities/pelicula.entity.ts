import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Director } from 'src/director/entities/director.entity';

@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn()
    id_pelicula: string;

    @Column()
    titulo: string;

    @Column()
    lanzamiento: number;    

    @Column()
    genero: string;

    @Column('text')
    descripcion: string;

    @Column()
    id_director: string;

    @ManyToOne(type => Director, director => director.peliculas)
    director: Director;
}
