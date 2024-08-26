import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Director } from 'src/director/entities/director.entity';

@Entity()
export class Pelicula {

    @PrimaryGeneratedColumn('increment')
    id_pelicula: number;

    @Column()
    titulo: string;

    @Column()
    lanzamiento: number;    

    @Column()
    genero: string;

    @Column('text')
    descripcion: string;

    @Column()
    id_director: number;

    @ManyToOne(type => Director, director => director.peliculas)
    director: Director;
}
