import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  Index,
  AfterInsert,
  AfterLoad,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseModel } from 'src/model/base.entity';

@Entity('user')
@Index(['Email', 'DeletedAt'], { unique: true })
export class UserModel extends BaseModel {
  @Column({
    name: 'full_name',
  })
  FullName: string;

  @Column({
    name: 'display_name',
  })
  DisplayName: string;

  @Column({
    name: 'password',
  })
  @Exclude()
  Password: string;

  @Column({
    name: 'email',
  })
  Email: string;

  @Column({
    name: 'phone_number',
    default: null,
    nullable: true,
  })
  PhoneNumber: string;

  @Column({
    name: 'is_active',
    default: true,
  })
  IsActive: boolean;
}
