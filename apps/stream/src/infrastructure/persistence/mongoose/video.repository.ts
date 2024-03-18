// src/stream/infrastructure/persistence/mongoose/video.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Video } from 'apps/stream/src/domain/entities/video.entity';

import { VideoRepository } from 'apps/stream/src/domain/repositories/video.repository';

@Injectable()
export class MongooseVideoRepository implements VideoRepository {
  constructor(
    @InjectModel('Video') private readonly videoModel: Model<Video>,
  ) {}

  async findById(id: string): Promise<Video | null> {
    return this.videoModel.findById(id).exec();
  }

  async save(video: Video): Promise<void> {
    await new this.videoModel(video).save();
  }
  // Other methods for querying and persisting video entities using Mongoose
}
