import { IsNumber, IsString, Length, MinLength } from "class-validator";

export class CreatePeliculaDto {

    @IsString()
    @MinLength(1)
    id_pelicula: string;

    @IsString()
    @MinLength(1)
    titulo: string;

    @IsNumber()
    @Length(4)
    lanzamiento: number;

    @IsString()
    @MinLength(1)
    genero: string;

    @IsString()
    @MinLength(1)
    descripcion: string;

    @IsString()
    id_director: string;
}
