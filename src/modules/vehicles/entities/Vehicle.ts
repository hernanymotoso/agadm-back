import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('vehicles')
class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  vehicle_id: string;

  @Column()
  vehicle_brand: string;

  @Column()
  vehicle_model: string;

  @Column()
  vehicle_year: string;

  @Column()
  vehicle_code_patrimony: string;

  @Column()
  vehicle_description: string;

  @Column()
  vehicle_disabled: boolean;

  @CreateDateColumn()
  vehicle_created_at: Date;

  @UpdateDateColumn()
  vehicle_updated_at: Date;
}
export default Vehicle;
