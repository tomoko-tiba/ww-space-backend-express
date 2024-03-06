-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "_CategoryToWork" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoryToWork_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToWork_B_fkey" FOREIGN KEY ("B") REFERENCES "Work" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToWork_AB_unique" ON "_CategoryToWork"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToWork_B_index" ON "_CategoryToWork"("B");
