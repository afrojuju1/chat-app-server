import { BaseEntity } from '../base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column({ length: 100 })
  firstname: string

  @Column({ length: 100 })
  lastname: string

  @Column({ length: 200 })
  email: string

  @Column()
  password: string
}
