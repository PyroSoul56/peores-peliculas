import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { Director } from 'src/director/entities/director.entity';


@Injectable()
export class PeliculaService {
  constructor(
    @InjectRepository(Pelicula)
    private peliculaRepository: Repository<Pelicula>,
    @InjectRepository(Director)
    private directorRepository: Repository<Director>,
  ) {}

  //create
  async create(createPeliculaDto: CreatePeliculaDto) {
    try{
      
      const director = await this.directorRepository.findOneBy({id_director: createPeliculaDto.id_director});
      if (!director) {
        throw new NotFoundException('No se encontró el director');
      }

      const pelicula = this.peliculaRepository.create(createPeliculaDto);
      pelicula.director = director;
      await this.peliculaRepository.save(pelicula);
      return pelicula;

    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }


  //find all
  async findAll() {
    const peliculas = await this.peliculaRepository.find({relations: ['director']});
    if (!peliculas) {
      throw new NotFoundException('No se encontraron peliculas');
    }
    return peliculas;
  }

  //find one
  async findOne(id_pelicula: string) {
    const pelicula = await this.peliculaRepository.findOneBy({id_pelicula: id_pelicula});
    if (!pelicula) {
      throw new NotFoundException('No se encontró la pelicula');
    }
    return pelicula;
  }

  //update
  async update(id_pelicula: string, updatePeliculaDto: UpdatePeliculaDto) {
    const pelicula = await this.peliculaRepository.preload({
      id_pelicula: id_pelicula,
      ...updatePeliculaDto,
    });
    if (!pelicula) {
      throw new NotFoundException('No se encontró la pelicula');
    }
    await this.peliculaRepository.save(pelicula);
    return pelicula;
  }

  //delete
  async remove(id_pelicula: string) {
    const pelicula = await this.peliculaRepository.findOneBy({id_pelicula: id_pelicula});
    if (!pelicula) {
      throw new NotFoundException('No se encontró la pelicula');
    }
    await this.peliculaRepository.remove(pelicula);
  }

  //get director
  async getDirector(id_pelicula: string) {
    const pelicula = await this.peliculaRepository.findOneBy({id_pelicula: id_pelicula});
    if (!pelicula) {
      throw new NotFoundException('No se encontró la pelicula');
    }
    return pelicula.director;
  }

}
