/*
  Warnings:

  - Made the column `class` on table `Characters` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quote` on table `Characters` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Characters` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
CREATE SEQUENCE characters_id_seq;
ALTER TABLE "Characters" ALTER COLUMN "id" SET DEFAULT nextval('characters_id_seq'),
ALTER COLUMN "class" SET NOT NULL,
ALTER COLUMN "quote" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
ALTER SEQUENCE characters_id_seq OWNED BY "Characters"."id";
