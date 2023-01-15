import {
  AfterInsert,
  AfterLoad,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { classToPlain } from 'class-transformer';

export abstract class BaseModel {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  Id: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  public CreatedAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  public UpdatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz', default: null })
  public DeletedAt: Date;

  @AfterInsert()
  castIdToNumber() {
    this.Id = typeof this.Id === 'string' ? parseInt(this.Id) : this.Id;
  }

  toJSON() {
    return classToPlain(this);
  }
}
