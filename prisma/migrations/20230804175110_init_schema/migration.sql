-- CreateTable
CREATE TABLE "todo" (
    "t_id" UUID NOT NULL,
    "t_title" TEXT NOT NULL,
    "t_note" TEXT NOT NULL,
    "t_complete" BOOLEAN NOT NULL,
    "t_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "t_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "todo_pk" PRIMARY KEY ("t_id")
);

-- CreateIndex
CREATE INDEX "ix_todo_complete" ON "todo"("t_complete");
