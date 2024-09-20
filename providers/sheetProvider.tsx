"use client";

import React from "react";
import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/NewAccountSheet";
import { EditAccountSheet } from "@/features/accounts/components/EditAccountSheet";
import { EditCategorySheet } from "@/features/categories/components/EditCategorySheet";
import { NewCategorySheet } from "@/features/categories/components/NewCategorySheet";
import { NewTransactionSheet } from "@/features/transactions/components/NewTransactionSheet";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <NewTransactionSheet />

      <NewCategorySheet />
      <EditCategorySheet />

      <EditAccountSheet />
      <NewAccountSheet />
    </>
  );
};
