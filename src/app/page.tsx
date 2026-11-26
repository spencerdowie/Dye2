import { redirect } from "next/navigation";

export default async function Dashboard() {
  redirect("/dashboard");

  return (
    <div className="d-flex flex-column vh-100 bg-secondary-subtle text-black">
      <h2>Loading...</h2>
    </div>
  );
}
