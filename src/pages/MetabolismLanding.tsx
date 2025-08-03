import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MetabolismPage = () => {
  const videoUrl =
    "https://mitolyn.com/science/?hopId=92b62861-4864-4117-ae94-1fdd8cc838c7&affiliate=blackk1";

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-4xl md:text-6xl text-primary font-semibold mb-4">
            US Scientist: This Purple Peel Exploit Vaporizes Fat Cells
          </p>
          <h1 className="text-lg md:text-xl font-bold text-foreground mb-6 leading-tight">
            ⚖️ Discover How Metabolism Affects Your Weight and Energy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Many people struggle with weight and fatigue—without knowing why.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Learn how your metabolism may be involved and what you can do to support it.
          </p>
        </div>

        {/* Problem Section */}
        <Card className="mb-12 border-2 border-primary/20 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-destructive mb-6 flex items-center gap-3">
              🚫 Frustrated by Weight That Won't Budge?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              If you've been eating well, exercising, and still not seeing results,
              you're not alone—and it may not be your fault.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-bold text-primary">One possible factor?</span> Your metabolic function.
            </p>
            <p className="text-lg text-muted-foreground">
              A slower metabolism can influence how your body uses energy and stores fat.
              Understanding how it works is the first step toward regaining control.
            </p>
          </CardContent>
        </Card>

        {/* Symptoms Section */}
        <Card className="mb-12 bg-accent/50 border-2 border-accent shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6 flex items-center gap-3">
              🧠 How Metabolic Changes Can Affect You:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-accent-foreground">You feel low on energy—even after a good night's sleep</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-accent-foreground">You find it harder to maintain or lose weight</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-accent-foreground">You experience strong cravings, especially for sweets or carbs</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-accent-foreground">You notice mental fatigue or reduced focus</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-accent-foreground">You feel like your body isn't responding like it used to</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-accent-foreground">
              These may be signs that your metabolism isn't working as efficiently as it once did.
              <span className="font-bold text-primary"> The good news? There are ways to support your body naturally.</span>
            </p>
          </CardContent>
        </Card>

        {/* Authority Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            🎯 Weight gain and fatigue are complex issues.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learning what may be behind them can help you take smart, safe action.
          </p>
        </div>

        {/* Video CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              🎥 Want to Understand More?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Watch a short educational video that explains:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-lg font-medium">What metabolism really is (and isn't)</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-lg font-medium">How it affects weight, energy, and cravings</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-lg font-medium">Simple steps to help support your body's natural balance</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-2xl px-16 py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[80px] mb-8"
            >
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                👉 Watch the Video Now
              </a>
            </Button>

            <div className="mt-8">
              <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src="https://i.imgur.com/aXvDQ8N.png"
                  alt="Additional Information"
                  className="max-w-full w-full max-w-2xl mx-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-primary">
            Knowledge is the first step to change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetabolismPage;
