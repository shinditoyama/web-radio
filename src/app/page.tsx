import Album from "@/components/Album";

export default function Home() {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-semibold">Página Inicial</h1>

      <div className="h-full flex justify-center items-center">
        <Album />
      </div>
    </main>
  );
}
