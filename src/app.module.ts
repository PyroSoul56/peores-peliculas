import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaModule } from './pelicula/pelicula.module';
import { DirectorModule } from './director/director.module';

@Module({
  imports: [PeliculaModule, DirectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
