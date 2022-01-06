import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  user_name: string;

  @Column()
  user_last_name: string;

  @Column()
  user_email: string;

  @Column()
  user_password: string;

  @Column()
  user_type: string;

  @Column()
  user_phone: string;

  @Column()
  user_ID: string;

  @Column()
  user_CPF: string;

  @Column()
  user_address: string;

  @Column()
  user_district: string;

  @Column()
  user_city: string;

  @Column()
  user_state: string;

  @CreateDateColumn()
  user_created_at: Date;

  @UpdateDateColumn()
  user_updated_at: Date;
}

export default User;
