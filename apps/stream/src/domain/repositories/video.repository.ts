import { Video } from '../entities/video.entity';

export interface VideoRepository {
  findById(id: string): Promise<Video | null>;
  save(video: Video): Promise<void>;
  // Additional methods for querying and persisting video entities
}
