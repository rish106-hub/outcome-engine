import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center space-y-8">
      {/* Headline */}
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
          Every session ends with something shipped.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
          Expertbells helps founders turn expert conversations into measurable progress — not just advice.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <Button size="lg" className="font-medium">
          Book a session with an Action Pack
        </Button>
        <Button variant="outline" size="lg" className="font-medium">
          See a real Action Pack
        </Button>
      </div>

      {/* Trust Strip */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <span>Used by founders</span>
        <span className="hidden sm:inline text-border">•</span>
        <span>Founders drive 62% of revenue</span>
        <span className="hidden sm:inline text-border">•</span>
        <span>Founder repeat rate 42%</span>
      </div>

      {/* Value Bullets */}
      <div className="space-y-3 pt-2">
        {[
          "One clear decision per session",
          "One micro-outcome with proof",
          "Built for Fundraising & Growth problems",
        ].map((bullet) => (
          <div key={bullet} className="flex items-center gap-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
              <Check className="h-3 w-3 text-accent-foreground" />
            </div>
            <span className="text-sm text-secondary-foreground">{bullet}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
