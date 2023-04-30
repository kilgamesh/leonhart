-- CreateTable
CREATE TABLE "Characters" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("id")
);
