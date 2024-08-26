import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pelicula } from 'src/pelicula/entities/pelicula.entity';

@Entity()
export class Director {

    @PrimaryGeneratedColumn('increment')
    id_director: number;

    @Column({name: 'nombre', nullable: false})
    nombre: string;

    @Column({name: 'nacimiento', nullable: false})
    fecha_nacimiento: Date;

    @Column({name: 'nacionalidad', nullable: false})
    nacionalidad: string;

    @Column({name: 'biografia', nullable: false})
    biografia: string;

    @OneToMany (type => Pelicula, pelicula => pelicula.director)
    peliculas: Pelicula[];


}
