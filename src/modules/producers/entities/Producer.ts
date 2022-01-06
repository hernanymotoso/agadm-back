import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('producers')
class Producer {
  @PrimaryGeneratedColumn('uuid')
  producer_id: string;

  @Column()
  producer_name: string;

  @Column()
  producer_last_name: string;

  @Column()
  producer_email: string;

  @Column()
  producer_phone: string;

  @Column()
  producer_ID: string;

  @Column()
  producer_CPF: string;

  @Column()
  producer_address: string;

  @Column()
  producer_district: string;

  @Column()
  producer_city: string;

  @Column()
  producer_state: string;

  @Column()
  producer_disabled: boolean;

  @CreateDateColumn()
  producer_created_at: Date;

  @UpdateDateColumn()
  producer_updated_at: Date;
}

export default Producer;
