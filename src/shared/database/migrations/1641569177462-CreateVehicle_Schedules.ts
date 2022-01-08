import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateVehicleSchedules1641569177462
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicle_schedules',
        columns: [
          {
            name: 'vehicle_schedule_id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'vehicle_schedule_producer_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'vehicle_schedule_vehicle_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'vehicle_schedule_amount_time',
            type: 'int',
          },
          {
            name: 'vehicle_schedule_payment',
            type: 'varchar',
          },
          {
            name: 'vehicle_schedule_status',
            type: 'varchar',
          },
          {
            name: 'vehicle_schedule_service_location',
            type: 'varchar',
          },
          {
            name: 'vehicle_schedule_operation_type',
            type: 'varchar',
          },
          {
            name: 'vehicle_schedule_worked_hours',
            type: 'int',
          },
          {
            name: 'vehicle_schedule_hours_left',
            type: 'int',
          },
          {
            name: 'vehicle_schedule_start_hourmeter',
            type: 'int',
          },
          {
            name: 'vehicle_schedule_end_hourmeter',
            type: 'int',
          },
          {
            name: 'vehicle_schedule_date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'vehicle_schedule_disabled',
            type: 'boolean',
            default: false,
          },
          {
            name: 'vehicle_schedule_created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'vehicle_schedule_updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'vehicle_schedules',
      new TableForeignKey({
        name: 'VehicleScheduleProducer',
        columnNames: ['vehicle_schedule_producer_id'],
        referencedColumnNames: ['producer_id'],
        referencedTableName: 'producers',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'vehicle_schedules',
      new TableForeignKey({
        name: 'VehicleScheduleVehicle',
        columnNames: ['vehicle_schedule_vehicle_id'],
        referencedColumnNames: ['vehicle_id'],
        referencedTableName: 'vehicles',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'vehicle_schedules',
      'VehicleScheduleVehicle',
    );
    await queryRunner.dropForeignKey(
      'vehicle_schedules',
      'VehicleScheduleProducer',
    );

    await queryRunner.dropTable('vehicle_schedules');
  }
}
