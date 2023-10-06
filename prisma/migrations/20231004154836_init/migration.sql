/*
  Warnings:

  - The primary key for the `Avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Avaliacao` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "avaliador" TEXT NOT NULL DEFAULT '',
    "nomeGrupo" TEXT NOT NULL DEFAULT '',
    "nota" INTEGER NOT NULL,

    PRIMARY KEY ("avaliador", "nomeGrupo"),
    CONSTRAINT "Avaliacao_nomeGrupo_fkey" FOREIGN KEY ("nomeGrupo") REFERENCES "Grupo" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("avaliador", "nomeGrupo", "nota") SELECT "avaliador", "nomeGrupo", "nota" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
