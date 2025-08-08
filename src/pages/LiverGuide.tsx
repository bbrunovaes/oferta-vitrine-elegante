import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const LiverGuidePage = () => {
  const videoUrl = "https://www.hepatoburn.com/welcome?hop=blackk1";

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl text-primary font-bold mb-6 leading-tight">
            Is Your Body Trying to Tell You Something?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Do you often feel bloated, fatigued, or struggle with stubborn belly fat—despite eating well and staying active? These could be subtle signs that your liver and metabolism are underperforming.
          </p>
        </div>

        {/* Problem Statement */}
        <Card className="mb-12 border-2 border-primary/20 shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Your liver plays a critical role in digestion, hormone balance, fat breakdown, and detoxification. When it slows down, your metabolism may follow—making it harder to manage weight or energy levels.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-lg font-semibold text-primary mb-4">
                But here's the good news: you don't need drastic diets or extreme routines to support your body.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Solutions Section */}
        <Card className="mb-12 bg-primary text-primary-foreground border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🥦</span>
              <h2 className="text-2xl md:text-3xl font-bold">
                Simple Ways to Support Liver & Metabolic Health:
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-lg">Stay hydrated with water and herbal teas like dandelion or milk thistle</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-lg">Add fiber-rich greens such as spinach, arugula, and broccoli to your meals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-lg">Limit processed foods, sugar, and alcohol</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-lg">Incorporate movement into your daily routine—even walking helps</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-lg">Prioritize sleep and stress management (your liver loves rest!)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-lg">Include thermogenic spices like turmeric, ginger, and cayenne in your diet</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Statement */}
        <Card className="mb-12 bg-gradient-to-r from-secondary to-white border border-primary/20 shadow-lg">
          <CardContent className="p-8 text-center">
            <p className="text-xl md:text-2xl text-primary font-semibold max-w-3xl mx-auto leading-relaxed">
              When you give your liver what it needs, your metabolism often responds in kind—leading to a lighter, more energized version of you.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Want to learn how to naturally support your liver and metabolism—without extreme changes?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover science-backed tips that you can start today.
            </p>

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
                👉 Watch Our Free Guide and Learn More!
              </a>
            </Button>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-lg font-medium">Science-backed liver support strategies</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-lg font-medium">Natural metabolism boosting methods</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-lg font-medium">Simple daily habits for lasting results</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-primary">
            Your body knows how to heal—it just needs the right support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiverGuidePage;