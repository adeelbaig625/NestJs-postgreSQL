import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity('friends')
@Index(['user_id', 'friend_id', 'deleted_at'], { unique: true })
export class FriendsModel {
  @Column({
    name: 'user_id',
  })
  UserId: number;

  @Column({
    name: 'friend_id',
  })
  FriendId: number;

  @Column({
    name: 'status',
    default: 0,
  })
  Status: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  public CreatedAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  public UpdatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz', default: null })
  public DeletedAt: Date;
}
