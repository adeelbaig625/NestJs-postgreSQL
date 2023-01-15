import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1673803178954 implements MigrationInterface {
    name = 'NewMigration1673803178954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL`);
    }

}
