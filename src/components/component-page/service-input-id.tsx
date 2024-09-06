/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

interface ServiceInputIdProps {
  data: any;
  updateCustomerData: (customer: any) => void;
}

export function ServiceInputId({
  data,
  updateCustomerData,
}: ServiceInputIdProps) {
  const [, setFile] = React.useState<File | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files) {
      setFile(files[0]);
    }
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function sendFileToChat() {
    setIsLoading(true);
    try {
      await sleep(2000);

      // todo: call the API to send the file to the chat

      updateCustomerData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center max-w-2xl mx-auto mt-10">
      <div className="flex-1 flex items-end gap-3 mx-auto">
        <div className="flex-1">
          <Label htmlFor="email">Ticket do atendimento</Label>
          <Input
            placeholder="Ticket"
            className="mt-1"
            type="file"
            onChange={onFileChange}
          />
        </div>

        <Button disabled={isLoading} onClick={sendFileToChat}>
          Gerar
        </Button>
      </div>
    </div>
  );
}
