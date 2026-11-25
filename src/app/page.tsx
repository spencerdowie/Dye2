import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="d-flex flex-column vh-100 bg-secondary-subtle text-black">
      <div>
        <h1>Dye</h1>
      </div>
      <div className="d-flex flex-row flex-grow-1">
        <aside className="w-25">Sidebar</aside>
        <main className="border-start border-top border-2 bg-white rounded-4 flex-grow-1">
          Main
        </main>
      </div>
    </div>
  );
}
