import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Producer from '../../producers/entities/Producer';
import Vehicle from '../../vehicles/entities/Vehicle';

@Entity('vehicle_schedules')
class VehicleSchedule {
  @PrimaryGeneratedColumn('uuid')
  vehicle_schedule_id: string;

  @Column()
  vehicle_schedule_producer_id: string;

  @ManyToOne(() => Producer)
  @JoinColumn({ name: 'vehicle_schedule_producer_id' })
  vehicle_schedule_producer: Producer;

  @Column()
  vehicle_schedule_vehicle_id: string;

  @ManyToOne(() => Vehicle)
  @JoinColumn({ name: 'vehicle_schedule_vehicle_id' })
  vehicle_schedule_vehicle: Vehicle;

  @Column()
  vehicle_schedule_amount_time: number;

  @Column()
  vehicle_schedule_payment: string;

  @Column()
  vehicle_schedule_status: string;

  @Column()
  vehicle_schedule_service_location: string;

  @Column()
  vehicle_schedule_operation_type: string;

  @Column()
  vehicle_schedule_worked_hours: number;

  @Column()
  vehicle_schedule_hours_left: number;

  @Column()
  vehicle_schedule_start_hourmeter: number;

  @Column()
  vehicle_schedule_end_hourmeter: number;

  @Column('timestamp with time zone')
  vehicle_schedule_date: Date;

  @Column()
  vehicle_schedule_disabled: boolean;

  @CreateDateColumn()
  vehicle_schedule_created_at: Date;

  @UpdateDateColumn()
  vehicle_schedule_updated_at: Date;
}
export default VehicleSchedule;
