/*
  Warnings:

  - The primary key for the `Avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avaliador" TEXT NOT NULL DEFAULT '',
    "nomeGrupo" TEXT NOT NULL DEFAULT '',
    "nota" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_nomeGrupo_fkey" FOREIGN KEY ("nomeGrupo") REFERENCES "Grupo" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("avaliador", "nomeGrupo", "nota") SELECT "avaliador", "nomeGrupo", "nota" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE UNIQUE INDEX "Avaliacao_avaliador_key" ON "Avaliacao"("avaliador");
CREATE UNIQUE INDEX "Avaliacao_nomeGrupo_key" ON "Avaliacao"("nomeGrupo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
