import HeroContent from "@/components/landing/HeroContent";
import ProductSimulation from "@/components/landing/ProductSimulation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight text-foreground">
              Expertbells
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              For Experts
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sign in
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container">
        <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-10">
          <HeroContent />
          <ProductSimulation />
        </section>
      </main>
    </div>
  );
};

export default Index;
