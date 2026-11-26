export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="d-flex flex-column vh-100 bg-secondary-subtle text-black">
      <div>
        <h1>Dye</h1>
      </div>
      <div className="d-flex flex-row flex-grow-1">
        <aside className="w-25">
          <h2>Sidebar</h2>
        </aside>
        <main className="border-start border-top border-2 bg-white rounded-4 flex-grow-1">
          {children}
        </main>
      </div>
    </div>
  );
}
