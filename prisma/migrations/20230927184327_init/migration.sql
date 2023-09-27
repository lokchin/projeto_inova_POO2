-- CreateTable
CREATE TABLE "Avaliacao" (
    "avaliador" TEXT NOT NULL,
    "nomeGrupo" TEXT NOT NULL,
    "inovacao" INTEGER NOT NULL,
    "maturidade" INTEGER NOT NULL,
    "apresentacao" INTEGER NOT NULL,
    "potencial" INTEGER NOT NULL,

    PRIMARY KEY ("avaliador", "nomeGrupo"),
    CONSTRAINT "Avaliacao_nomeGrupo_fkey" FOREIGN KEY ("nomeGrupo") REFERENCES "Grupo" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
