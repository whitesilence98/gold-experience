import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import * as Joi from 'joi';

import { DatabaseModule } from '@app/common';

import {
  Video,
  VideoSchema,
} from './infrastructure/persistence/mongoose/video.entity';

import { VideoService } from './application/services/video.service';
import { VideoController } from './infrastructure/controllers/video.controller';
import { MongooseVideoRepository } from './infrastructure/persistence/mongoose/video.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/stream/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Video.title, schema: VideoSchema }]),
    // AuthModule,
  ],
  controllers: [VideoController],
  providers: [
    VideoService,
    {
      provide: getModelToken(Video.id),
      useClass: MongooseVideoRepository,
    },
  ],
})
export class StreamModule {}
