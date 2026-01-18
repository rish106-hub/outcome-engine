import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DecisionCapsuleCard = () => {
  return (
    <Card className="shadow-card border-border/60 bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-foreground">
            Decision Capsule
          </CardTitle>
          <span className="text-xs text-muted-foreground">30 seconds</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input Field Mockup */}
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">
            What decision do you want to move forward?
          </label>
          <div className="rounded-md border border-input bg-surface-subtle px-3 py-2.5 text-sm text-muted-foreground">
            Should I raise a pre-seed or bootstrap for 6 more months?
          </div>
        </div>

        {/* Timeline Selector */}
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">Timeline</label>
          <div className="flex gap-2">
            {["7 days", "14 days", "30 days"].map((time, i) => (
              <div
                key={time}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2">
          {["Fundraising", "Validation", "Growth"].map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-1 text-xs ${
                i === 0
                  ? "bg-accent text-accent-foreground font-medium"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DecisionCapsuleCard;
