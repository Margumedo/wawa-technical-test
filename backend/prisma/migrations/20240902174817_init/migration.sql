-- CreateTable
CREATE TABLE "Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "origen" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "horaSalida" DATETIME NOT NULL,
    "horaLlegada" DATETIME NOT NULL,
    "capacidadAutobus" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
