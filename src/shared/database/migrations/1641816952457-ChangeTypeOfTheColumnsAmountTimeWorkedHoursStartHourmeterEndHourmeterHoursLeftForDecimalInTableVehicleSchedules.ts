import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ChangeTypeOfTheColumnsAmountTimeWorkedHoursStartHourmeterEndHourmeterHoursLeftForDecimalInTableVehicleSchedules1641816952457
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('vehicle_schedules', [
      'vehicle_schedule_amount_time',
      'vehicle_schedule_worked_hours',
      'vehicle_schedule_hours_left',
      'vehicle_schedule_start_hourmeter',
      'vehicle_schedule_end_hourmeter',
    ]);
    await queryRunner.addColumns('vehicle_schedules', [
      new TableColumn({
        name: 'vehicle_schedule_end_hourmeter',
        type: 'decimal',
        scale: 2,
        precision: 10,
      }),
      new TableColumn({
        name: 'vehicle_schedule_start_hourmeter',
        type: 'decimal',
        scale: 2,
        precision: 10,
      }),
      new TableColumn({
        name: 'vehicle_schedule_hours_left',
        type: 'decimal',
        scale: 2,
        precision: 10,
      }),
      new TableColumn({
        name: 'vehicle_schedule_worked_hours',
        type: 'decimal',
        scale: 2,
        precision: 10,
      }),
      new TableColumn({
        name: 'vehicle_schedule_amount_time',
        type: 'decimal',
        scale: 2,
        precision: 10,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('vehicle_schedules', [
      'vehicle_schedule_amount_time',
      'vehicle_schedule_worked_hours',
      'vehicle_schedule_hours_left',
      'vehicle_schedule_start_hourmeter',
      'vehicle_schedule_end_hourmeter',
    ]);
    await queryRunner.addColumns('vehicle_schedules', [
      new TableColumn({
        name: 'vehicle_schedule_end_hourmeter',
        type: 'int',
      }),
      new TableColumn({
        name: 'vehicle_schedule_start_hourmeter',
        type: 'int',
      }),
      new TableColumn({
        name: 'vehicle_schedule_hours_left',
        type: 'int',
      }),
      new TableColumn({
        name: 'vehicle_schedule_worked_hours',
        type: 'int',
      }),
      new TableColumn({
        name: 'vehicle_schedule_amount_time',
        type: 'int',
      }),
    ]);
  }
}
