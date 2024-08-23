import { IsString, IsNotEmpty, isDate, IsDate, } from 'class-validator';
export class CreateDirectorDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    fecha_nacimiento: Date;

    @IsString()
    @IsNotEmpty()
    nacionalidad: string;

    @IsString()
    biografia: string;
}
