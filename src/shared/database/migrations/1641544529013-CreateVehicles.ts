import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateVehicles1641544529013 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
        columns: [
          {
            name: 'vehicle_id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'vehicle_brand',
            type: 'varchar',
          },
          {
            name: 'vehicle_model',
            type: 'varchar',
          },
          {
            name: 'vehicle_year',
            type: 'varchar',
          },
          {
            name: 'vehicle_code_patrimony',
            type: 'varchar',
          },
          {
            name: 'vehicle_description',
            type: 'varchar',
          },
          {
            name: 'vehicle_created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'vehicle_updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}
