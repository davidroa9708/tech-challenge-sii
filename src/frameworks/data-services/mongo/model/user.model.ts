import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User as UserEntity } from 'src/core';

export type UserDocument = User & Document;

@Schema()
export class User implements UserEntity {
  @Prop()
  user_id: number;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
