import { IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator";

export class CreatePeliculaDto {

    @IsString()
    @MinLength(1)
    titulo: string;

    @IsNotEmpty()
    @IsNumber()
    lanzamiento: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    genero: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    descripcion: string;

    @IsNotEmpty()
    @IsString()
    id_director: number;
}
