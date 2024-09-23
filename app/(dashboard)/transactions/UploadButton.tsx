import React from "react";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useCSVReader } from "react-papaparse";

type Props = {
  onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  // PAYWALL

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button
          variant="outline"
          size="sm"
          className="w-full lg:w-auto"
          {...getRootProps()}
        >
          <Upload className="size-4 mr-2 " />
          Import
        </Button>
      )}
    </CSVReader>
  );
};
