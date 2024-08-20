import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pelicula } from 'src/pelicula/entities/pelicula.entity';

@Entity()
export class Director {
    @PrimaryGeneratedColumn()
    id_director: string;

    @Column('text', {nullable: false})
    nombre: string;

    @Column('text', {nullable: false})
    fecha_nacimiento: Date;

    @Column('text', {nullable: false})
    nacionalidad: string;

    @Column()
    biografia: string;

    @OneToMany (type => Pelicula, pelicula => pelicula.director)
    peliculas: Pelicula[];


}
