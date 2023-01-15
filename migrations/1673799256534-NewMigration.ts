import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigration1673799256534 implements MigrationInterface {
  name = 'NewMigration1673799256534';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "is_active" boolean NOT NULL DEFAULT true`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "is_active"`);
  }
}
