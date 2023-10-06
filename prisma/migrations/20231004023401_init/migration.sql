-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avaliador" TEXT NOT NULL DEFAULT '',
    "nomeGrupo" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_nomeGrupo_fkey" FOREIGN KEY ("nomeGrupo") REFERENCES "Grupo" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("avaliador", "id", "nomeGrupo", "nota") SELECT "avaliador", "id", "nomeGrupo", "nota" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE UNIQUE INDEX "Avaliacao_avaliador_key" ON "Avaliacao"("avaliador");
CREATE UNIQUE INDEX "Avaliacao_nomeGrupo_key" ON "Avaliacao"("nomeGrupo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
