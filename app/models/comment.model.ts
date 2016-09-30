import { Photo } from './photo.model';

export class Comment {
  commentId: number;
  photo: Photo;
  username: string;
  content: string;
  photoId: number;
}