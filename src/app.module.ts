import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaModule } from './pelicula/pelicula.module';
import { DirectorModule } from './director/director.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './director/entities/director.entity';
import { Pelicula } from './pelicula/entities/pelicula.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST || 'db',
      port: parseInt(process.env.PG_PORT, 10) || 5432,
      username: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASSWORD || 'postgres',
      database: process.env.PG_DB || 'postgres',
      entities: [Director, Pelicula],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PeliculaModule,
    DirectorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
