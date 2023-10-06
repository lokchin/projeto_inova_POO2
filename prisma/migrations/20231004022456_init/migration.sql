/*
  Warnings:

  - A unique constraint covering the columns `[nomeGrupo]` on the table `Avaliacao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_nomeGrupo_key" ON "Avaliacao"("nomeGrupo");
