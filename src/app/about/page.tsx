import Feature from "@/components/Feature";

export const metadata = {
  title: "Web Radio | Sobre",
  description: "Generated by create next app",
};

export default function About() {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-semibold">Sobre nós</h1>

      <div className="h-full flex flex-col justify-center items-center">
        <article className="max-w-5xl md:px-6 py-12 mx-auto">
          <div className="space-y-8 text-center">
            <h1 className="text-2xl font-bold leading-tight">
              Como a Crazy Rock surgiu
            </h1>
            <p className="text-base lg:px-24">
              Aqui deve colocar um texto contando sobre a história da empresa
              como ela surgiu, de onde veio a necessidade sobre a empresa, qual
              o foco da empresa e a relevância sobre a empresa no atual cenário
            </p>
          </div>

          <div className="pt-12 mt-12 border-t">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Feature
                title="Missão"
                description="Sed non nibh iaculis, posuere diam vitae, consectetur neque. 
              Integer velit ligula, semper sed nisl in, cursus commodo elit."
              />
              <Feature
                title="Visão"
                description="Sed non nibh iaculis, posuere diam vitae, consectetur neque. 
              Integer velit ligula, semper sed nisl in, cursus commodo elit."
              />
              <Feature
                title="Valores"
                description="Sed non nibh iaculis, posuere diam vitae, consectetur neque. 
              Integer velit ligula, semper sed nisl in, cursus commodo elit."
              />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
