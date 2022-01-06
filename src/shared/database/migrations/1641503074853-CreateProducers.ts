import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProducers1641503074853
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'producers',
        columns: [
          {
            name: 'producer_id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'producer_name',
            type: 'varchar',
          },
          {
            name: 'producer_last_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'producer_email',
            type: 'varchar',
          },
          {
            name: 'producer_phone',
            type: 'varchar',
          },
          {
            name: 'producer_ID',
            type: 'varchar',
          },
          {
            name: 'producer_CPF',
            type: 'varchar',
          },
          {
            name: 'producer_address',
            type: 'varchar',
          },
          {
            name: 'producer_district',
            type: 'varchar',
          },
          {
            name: 'producer_city',
            type: 'varchar',
          },
          {
            name: 'producer_state',
            type: 'varchar',
          },
          {
            name: 'producer_created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'producer_updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('producers');
  }
}
