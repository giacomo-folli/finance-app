"use client";

import React from "react";

import { useSearchParams } from "next/navigation";
import { formatDateRange } from "@/lib/utils";
import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { useGetSummary } from "@/features/summary/api/useGetSummary";
import { DataCard, DataCardLoading } from "./DataCard";

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary();

  const params = useSearchParams();
  const to = params.get("to") || undefined;
  const from = params.get("from") || undefined;

  const dateRangeLabel = formatDateRange({ to, from });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
      <DataCard
        title="Remaining"
        icon={FaPiggyBank}
        variant="default"
        dateRange={dateRangeLabel}
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
      />{" "}
      <DataCard
        title="Income"
        icon={FaArrowTrendUp}
        variant="default"
        dateRange={dateRangeLabel}
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
      />{" "}
      <DataCard
        title="Expenses"
        icon={FaArrowTrendDown}
        variant="default"
        dateRange={dateRangeLabel}
        value={data?.expensesAmount}
        percentageChange={data?.expensesChange}
      />
    </div>
  );
};
