import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

export default function About() {
  return (
    <div className="h-screen flex flex-col bg-zinc-900 text-zinc-50">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-semibold">Sobre nós</h1>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
