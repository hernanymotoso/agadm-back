import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1641408395552 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'user_id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_name',
            type: 'varchar',
          },
          {
            name: 'user_last_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'user_email',
            type: 'varchar',
          },
          {
            name: 'user_password',
            type: 'varchar',
          },
          {
            name: 'user_type',
            type: 'varchar',
          },
          {
            name: 'user_phone',
            type: 'varchar',
          },
          {
            name: 'user_ID',
            type: 'varchar',
          },
          {
            name: 'user_CPF',
            type: 'varchar',
          },
          {
            name: 'user_address',
            type: 'varchar',
          },
          {
            name: 'user_district',
            type: 'varchar',
          },
          {
            name: 'user_city',
            type: 'varchar',
          },
          {
            name: 'user_state',
            type: 'varchar',
          },
          {
            name: 'user_created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'user_updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
