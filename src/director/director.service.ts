import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Director } from './entities/director.entity';  


@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(Director)
    private directorRepository: Repository<Director>,
  ) {}

  // create
  async create(createDirectorDto: CreateDirectorDto){
    try {
      const director = this.directorRepository.create(createDirectorDto);
      await this.directorRepository.save(director);
      return director;
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }
  
  // get
  async findAll() {
    try {
      const directors = await this.directorRepository.find({});
      if (!directors) {
        throw new NotFoundException('No se encontraron directores');
      }
      return directors;
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  // get one
  async findOne(id_director: string) {
    try {
      const director = await this.directorRepository.findOneBy({id_director: id_director});
      if (!director) {
        throw new NotFoundException('No se encontró el director');
      }
      return director;
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  // update
  async update(id_director: string, updateDirectorDto: UpdateDirectorDto) {
    try{
      const director = await this.directorRepository.preload({
        id_director: id_director,
        ...updateDirectorDto,
      });
      if (!director) {
        throw new NotFoundException('No se encontró el director');
      }
      await this.directorRepository.save(director);
      return director;
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  // delete
  async remove(id_director: string) {
    try{
      const director = await this.directorRepository.findOneBy({id_director: id_director});
      if (!director) {
        throw new NotFoundException('No se encontró el director');
      }
      await this.directorRepository.remove(director);
      return director;
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  //get peliculas
  async getPeliculas(id_director: string){
    try{
      const director = await this.directorRepository.findOneBy({id_director: id_director});
      if (!director) {
        throw new NotFoundException('No se encontró el director');
      }
    return director.peliculas;
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

}
