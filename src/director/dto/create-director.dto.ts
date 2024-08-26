import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, isDate, IsDate, } from 'class-validator';
export class CreateDirectorDto {
    
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fecha_nacimiento: Date;

    @IsString()
    @IsNotEmpty()
    nacionalidad: string;

    @IsString()
    biografia: string;
}
