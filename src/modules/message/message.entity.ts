import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { BaseEntity } from '../base/base.entity';

@Entity({ name: 'messages' })
export class MessageEntity extends BaseEntity {
  @OneToOne(type => UserEntity)
  @JoinColumn()
  sender: UserEntity

  @OneToOne(type => UserEntity)
  @JoinColumn()
  receiver: UserEntity

  @Column({ length: 500 })
  content: string
}
