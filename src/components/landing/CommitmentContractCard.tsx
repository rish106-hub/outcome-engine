import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CommitmentContractCard = () => {
  return (
    <Card className="shadow-card border-border/60 bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-foreground">
            Commitment Contract
          </CardTitle>
          <span className="text-xs text-muted-foreground">Last 5 minutes</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Micro-milestone Field */}
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">Micro-milestone</label>
          <div className="rounded-md border border-input bg-surface-subtle px-3 py-2.5 text-sm text-foreground">
            Send outreach to 20 investors
          </div>
        </div>

        {/* Owner and Deadline Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">Owner</label>
            <div className="rounded-md border border-input bg-surface-subtle px-3 py-2 text-sm text-foreground">
              Founder
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">Deadline</label>
            <div className="rounded-md border border-input bg-surface-subtle px-3 py-2 text-sm text-foreground">
              14 days
            </div>
          </div>
        </div>

        {/* Acceptance Criteria */}
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">Acceptance criteria</label>
          <div className="rounded-md border border-input bg-surface-subtle px-3 py-2.5 text-sm text-muted-foreground">
            10 replies OR 5 meaningful conversations
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommitmentContractCard;
