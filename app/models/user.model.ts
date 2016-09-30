import { Photo } from './photo.model';

export class User {
  public userId: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public create: Date;
  public photoList: Photo[];
  public likedPhotoList: Photo[];
}