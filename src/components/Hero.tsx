import { Sun, Code2, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-morning overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code2 className="h-8 w-8 text-primary/30" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <BookOpen className="h-6 w-6 text-accent/40" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sun className="h-10 w-10 text-sunrise-end/30" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-sunrise">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-6 bg-gradient-sunrise rounded-full shadow-sunrise animate-glow">
                <Sun className="h-16 w-16 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 p-2 bg-accent rounded-full">
                <Code2 className="h-6 w-6 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-knowledge-deep via-primary to-accent bg-clip-text text-transparent">
            Manhã do Conhecimento
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Desperte para o mundo da programação com projetos Python interativos
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Uma plataforma educacional que apresenta projetos fundamentais em Python, 
            desde calculadoras até simuladores, para inspirar e ensinar conceitos de programação.
          </p>

          {/* Stats or highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="p-4 bg-card/50 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Projetos</div>
            </div>
            <div className="p-4 bg-card/50 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary">Python</div>
              <div className="text-sm text-muted-foreground">Linguagem</div>
            </div>
            <div className="p-4 bg-card/50 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Interativo</div>
            </div>
            <div className="p-4 bg-card/50 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary">MVP</div>
              <div className="text-sm text-muted-foreground">Versão</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;