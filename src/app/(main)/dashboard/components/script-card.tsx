import { ComponentPropsWithoutRef, PropsWithoutRef } from "react";

export default function ScriptCard({
  className,
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className="border rounded-4 px-3 py-2">
      <h2>Title</h2>
      <p>Script Info</p>
    </div>
  );
}
