/*
  Warnings:

  - Added the required column `updatedAt` to the `payment_history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "main"."payment_history" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
