import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, FileText, Download, BadgeCheck } from "lucide-react";

const ActionPackCard = () => {
  const tasks = [
    { text: "Finalize investor list (20 names)", done: true },
    { text: "Customize cold email template", done: true },
    { text: "Set up tracking spreadsheet", done: false },
    { text: "Schedule first 5 sends", done: false },
  ];

  return (
    <Card className="shadow-card border-border/60 bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-foreground">
            Your Action Pack
          </CardTitle>
          <div className="flex items-center gap-1.5 rounded-full bg-accent px-2 py-0.5">
            <BadgeCheck className="h-3 w-3 text-accent-foreground" />
            <span className="text-xs font-medium text-accent-foreground">Verified</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Task Checklist */}
        <div className="space-y-2.5">
          {tasks.map((task) => (
            <div key={task.text} className="flex items-center gap-3">
              <div
                className={`flex h-4 w-4 items-center justify-center rounded border ${
                  task.done
                    ? "bg-primary border-primary"
                    : "border-input bg-background"
                }`}
              >
                {task.done && <Check className="h-2.5 w-2.5 text-primary-foreground" />}
              </div>
              <span
                className={`text-sm ${
                  task.done ? "text-muted-foreground line-through" : "text-foreground"
                }`}
              >
                {task.text}
              </span>
            </div>
          ))}
        </div>

        {/* Templates Indicator */}
        <div className="flex items-center gap-2 rounded-md bg-surface-subtle px-3 py-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            3 prefilled templates included
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1">
            View Action Pack
          </Button>
          <Button size="sm" className="flex-1 gap-2">
            <Download className="h-3.5 w-3.5" />
            Download (₹99)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionPackCard;
