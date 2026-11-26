import ScriptCard from "@/app/(main)/dashboard/components/script-card";
import { IScript } from "@/models/Script";
import { IUser } from "@/models/User";
import { Suspense, use } from "react";

const userID = "6ac51e1ea1f22fb557b182bc";

function ScriptView({ scripts }: { scripts: Promise<IUser> }) {
  "use client";
  const user = use(scripts);
  //console.log(user);
  return (
    <>
      <div className="col">
        <ScriptCard />
      </div>
      <div className="col">
        <ScriptCard />
      </div>
      <div className="col">
        <ScriptCard />
      </div>
      <div className="col">
        <ScriptCard />
      </div>
      <div className="col">
        <ScriptCard />
      </div>
      <div className="col">
        <ScriptCard />
      </div>
      <div className="col">
        <ScriptCard />
      </div>
      <div className="col">
        <ScriptCard />
      </div>
    </>
  );
}

export default async function Dashboard() {
  function getScripts() {
    return fetch("http://localhost:3000/api/user/" + userID).then((data) =>
      data.json(),
    );
  }

  const scripts: Promise<IUser> = getScripts();

  return (
    <>
      <h2 className=" ms-5 mt-2">Main</h2>
      <div className="container">
        <div className="row row-cols-5 gy-5">
          <Suspense fallback={<h1>Loading...</h1>}>
            <ScriptView scripts={scripts} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
