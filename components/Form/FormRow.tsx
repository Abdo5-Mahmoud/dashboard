import React, { ReactNode } from "react";

const FormRow = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-1">{children}</div>;
};

export default FormRow;
