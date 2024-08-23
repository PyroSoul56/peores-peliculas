import { Module } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { PeliculaController } from './pelicula.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from 'src/director/entities/director.entity';
import { Pelicula } from './entities/pelicula.entity';
import { DirectorModule } from 'src/director/director.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pelicula, Director]), DirectorModule],
  controllers: [PeliculaController],
  providers: [PeliculaService],
})
export class PeliculaModule {}
