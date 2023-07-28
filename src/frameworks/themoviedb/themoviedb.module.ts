import { Module } from '@nestjs/common';

import { IThemoviedbServices } from '../../core';

import { ThemoviedbService } from './themoviedb.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: IThemoviedbServices,
      useClass: ThemoviedbService,
    },
  ],
  exports: [IThemoviedbServices],
})
export class ThemoviedbDataServicesModule {}
