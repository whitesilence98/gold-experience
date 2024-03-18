// src/stream/infrastructure/persistence/mongoose/video.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Video as VideoEntity } from '../../../domain/entities/video.entity';

@Schema({ timestamps: true })
export class Video extends Document implements VideoEntity {
  @Prop({ required: true }) // Make id optional in the Mongoose schema
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  url: string;
  static id: string;
  static title: string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
