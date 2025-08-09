import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, RefreshCw, Hash, Dices } from "lucide-react";

const ProjectTabs = () => {
  const [calculatorDisplay, setCalculatorDisplay] = useState("0");
  const [palindromeText, setPalindromeText] = useState("");
  const [counterValue, setCounterValue] = useState(0);
  const [diceResult, setDiceResult] = useState(1);

  const projects = [
    {
      id: "calculator",
      title: "Calculadora",
      description: "Uma calculadora básica para operações matemáticas simples",
      icon: Calculator,
      demo: (
        <div className="bg-gradient-card p-6 rounded-lg border">
          <div className="bg-knowledge-deep text-primary-foreground p-4 rounded-lg mb-4 text-right text-2xl font-mono">
            {calculatorDisplay}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
              <Button
                key={btn}
                variant={btn === "=" ? "default" : "secondary"}
                className="h-12"
                onClick={() => {
                  if (btn === "=") {
                    try {
                      setCalculatorDisplay(eval(calculatorDisplay).toString());
                    } catch {
                      setCalculatorDisplay("Erro");
                    }
                  } else if (calculatorDisplay === "0" || calculatorDisplay === "Erro") {
                    setCalculatorDisplay(btn);
                  } else {
                    setCalculatorDisplay(calculatorDisplay + btn);
                  }
                }}
              >
                {btn}
              </Button>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="w-full mt-2"
            onClick={() => setCalculatorDisplay("0")}
          >
            Limpar
          </Button>
        </div>
      )
    },
    {
      id: "palindrome",
      title: "Verificador de Palíndromos",
      description: "Verifica se uma palavra ou frase é um palíndromo",
      icon: RefreshCw,
      demo: (
        <div className="bg-gradient-card p-6 rounded-lg border space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Digite uma palavra ou frase:</label>
            <input
              type="text"
              value={palindromeText}
              onChange={(e) => setPalindromeText(e.target.value)}
              className="w-full p-3 border rounded-lg bg-background"
              placeholder="Ex: arara, ovo, a grama é amarga..."
            />
          </div>
          <div className="p-4 bg-morning-sky rounded-lg">
            <h4 className="font-semibold mb-2">Resultado:</h4>
            {palindromeText ? (
              <p className={`text-lg ${isPalindrome(palindromeText) ? 'text-green-600' : 'text-red-600'}`}>
                "{palindromeText}" {isPalindrome(palindromeText) ? 'É' : 'NÃO é'} um palíndromo
              </p>
            ) : (
              <p className="text-muted-foreground">Digite algo para verificar</p>
            )}
          </div>
        </div>
      )
    },
    {
      id: "counter",
      title: "Contador",
      description: "Um contador simples que pode incrementar e decrementar valores",
      icon: Hash,
      demo: (
        <div className="bg-gradient-card p-6 rounded-lg border text-center space-y-6">
          <div className="bg-gradient-sunrise text-primary-foreground p-8 rounded-lg">
            <span className="text-6xl font-bold">{counterValue}</span>
          </div>
          <div className="flex gap-4 justify-center">
            <Button 
              variant="destructive" 
              size="lg"
              onClick={() => setCounterValue(counterValue - 1)}
            >
              -1
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setCounterValue(0)}
            >
              Reset
            </Button>
            <Button 
              variant="default" 
              size="lg"
              onClick={() => setCounterValue(counterValue + 1)}
            >
              +1
            </Button>
          </div>
        </div>
      )
    },
    {
      id: "dice",
      title: "Simulador de Dados",
      description: "Simula o lançamento de um dado de 6 faces",
      icon: Dices,
      demo: (
        <div className="bg-gradient-card p-6 rounded-lg border text-center space-y-6">
          <div className="bg-background p-8 rounded-lg border-2 border-dashed border-primary">
            <div className="text-8xl mb-4">🎲</div>
            <div className="text-4xl font-bold text-primary">{diceResult}</div>
          </div>
          <Button 
            size="lg" 
            className="w-full"
            onClick={() => setDiceResult(Math.floor(Math.random() * 6) + 1)}
          >
            🎲 Lançar Dado
          </Button>
          <p className="text-sm text-muted-foreground">
            Clique para simular o lançamento de um dado
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-morning-cloud h-auto p-2">
          {projects.map((project) => (
            <TabsTrigger 
              key={project.id} 
              value={project.id}
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-sunrise data-[state=active]:text-primary-foreground"
            >
              <project.icon className="h-5 w-5" />
              <span className="hidden sm:inline text-sm">{project.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {projects.map((project) => (
          <TabsContent key={project.id} value={project.id} className="animate-sunrise">
            <Card className="shadow-card-custom border-primary/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-sunrise rounded-full text-primary-foreground">
                    <project.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-3xl text-knowledge-deep">{project.title}</CardTitle>
                <CardDescription className="text-lg">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {project.demo}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

// Helper function for palindrome check
const isPalindrome = (text: string): boolean => {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
};

export default ProjectTabs;