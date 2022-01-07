import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddDisabledFieldToVehicles1641547315489
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'vehicles',
      new TableColumn({
        name: 'vehicle_disabled',
        type: 'boolean',
        default: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('vehicles', 'vehicle_disabled');
  }
}
