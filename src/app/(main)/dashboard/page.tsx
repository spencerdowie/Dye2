import ScriptCard from "@/app/(main)/dashboard/components/script-card";
import { IScript } from "@/models/Script";
import { IUser } from "@/models/User";
import { Suspense, use } from "react";

const userID = "6ac51e1ea1f22fb557b182bc";

function ScriptView({ scripts }: { scripts: Promise<IScript> }) {
  "use client";
  const ownedScripts = use(scripts);
  console.log(ownedScripts);
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
  function getUser(userID: string) {
    return fetch("http://localhost:3000/api/user/" + userID).then((data) =>
      data.json(),
    );
  }
  function getScripts(userID: string) {
    return fetch("http://localhost:3000/api/script/" + userID).then((data) =>
      data.json(),
    );
  }

  const user: Promise<IUser> = getUser(userID);
  const scripts: Promise<IScript> = getScripts(userID);

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
