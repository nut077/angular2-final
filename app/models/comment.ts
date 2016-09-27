import { Photo } from './photo';

export class Comment {
  commentId: number;
  photo: Photo;
  username: string;
  content: string;
  photoId: number;
}