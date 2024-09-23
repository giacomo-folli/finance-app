"use client";

import React from "react";
import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/NewAccountSheet";
import { EditAccountSheet } from "@/features/accounts/components/EditAccountSheet";
import { EditCategorySheet } from "@/features/categories/components/EditCategorySheet";
import { NewCategorySheet } from "@/features/categories/components/NewCategorySheet";
import { NewTransactionSheet } from "@/features/transactions/components/NewTransactionSheet";
import { EditTransactionSheet } from "@/features/transactions/components/EditTransactionSheet";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <NewTransactionSheet />
      <EditTransactionSheet />

      <NewCategorySheet />
      <EditCategorySheet />

      <EditAccountSheet />
      <NewAccountSheet />
    </>
  );
};
