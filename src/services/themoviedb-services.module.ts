import { Module } from '@nestjs/common';
import { ThemoviedbDataServicesModule } from '../frameworks/themoviedb/themoviedb.module';

@Module({
  imports: [ThemoviedbDataServicesModule],
  exports: [ThemoviedbDataServicesModule],
})
export class ThemoviedbServicesModule {}
