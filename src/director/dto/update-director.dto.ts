import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectorDto } from './create-director.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDirectorDto extends PartialType(CreateDirectorDto) {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    fecha_nacimiento: Date;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    nacionalidad: string;

    @IsString()
    @IsOptional()
    biografia: string;
}
