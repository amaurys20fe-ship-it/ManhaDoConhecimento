import Hero from "@/components/Hero";
import ProjectTabs from "@/components/ProjectTabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-knowledge-deep">
            Explore os Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto demonstra conceitos fundamentais de programação Python 
            de forma interativa e visual. Clique nas abas para explorar!
          </p>
        </div>
        
        <ProjectTabs />
      </main>
      
      <footer className="bg-gradient-card border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            🌅 <strong>Manhã do Conhecimento</strong> - Desenvolvendo o futuro, um projeto por vez
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            MVP • Plataforma Educacional Python
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
