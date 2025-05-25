import * as React from "react";

export interface Toast {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: any;
}

export function useToast(): {
  toasts: Toast[];
  toast: (props: Omit<Toast, "id" | "open" | "onOpenChange">) => {
    id: string;
    dismiss: () => void;
    update: (props: Partial<Toast>) => void;
  };
  dismiss: (toastId?: string) => void;
};
