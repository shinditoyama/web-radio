import { ProfileCard } from "@/components/ProfileCard";

export default function Members() {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-semibold">Nossa Equipe</h1>

      <div className="h-full flex justify-center items-center flex-row flex-wrap-reverse">
        <ProfileCard name="Shindi Toyama" description="Programador" />
        <ProfileCard name="Evertton" description="Designer" />
      </div>
    </main>
  );
}
