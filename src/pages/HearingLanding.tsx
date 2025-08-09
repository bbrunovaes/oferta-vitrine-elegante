import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hearingConcernWoman from "@/assets/hearing-concern-woman.jpg";
import healthyHearingCouple from "@/assets/healthy-hearing-couple.jpg";
import earAnatomy from "@/assets/ear-anatomy.jpg";
import hearingProtection from "@/assets/hearing-protection.jpg";
import { Check, AlertTriangle, Brain, Heart } from "lucide-react";

const HearingLanding = () => {
  const handleWatchVideo = () => {
    // Placeholder for video action
    window.open("#", "_blank");
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-8">
            <img
              src={hearingConcernWoman}
              alt="Woman concerned about hearing loss"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Is Gradual Hearing Loss <br />
            <span className="text-primary">Sneaking Up on You?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover the Early Signs, Hidden Causes, and Science-Backed Ways to Support Healthy Hearing
          </p>
          <div className="bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-foreground text-lg leading-relaxed">
              Hearing loss is one of the most common — yet least recognized — health issues worldwide. 
              Most people think it happens suddenly or only in old age. The truth? For many, it starts quietly 
              and progresses over years before they notice the impact.
            </p>
          </div>
        </div>
      </section>

      {/* Early Signs Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Early Signs You Might Be Overlooking
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Small changes can be the first warning signs:
              </p>
              <div className="space-y-4">
                {[
                  "Needing to ask people to repeat themselves",
                  "Difficulty following conversations in noisy environments", 
                  "Increasing the TV or radio volume more than before",
                  "A persistent ringing, buzzing, or humming sound in your ears",
                  "Feeling more tired after social gatherings, as your brain works harder to \"fill in the gaps\""
                ].map((sign, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-foreground">{sign}</p>
                  </div>
                ))}
              </div>
              <Card className="mt-8 border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <p className="text-foreground font-medium">
                    Ignoring these early signs can lead to faster progression — and in some cases, 
                    even affect balance, memory, and emotional health.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <img
                src={earAnatomy}
                alt="Inner ear anatomy diagram"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Gradual Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why Hearing Loss Happens Gradually
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              While loud noise exposure is a well-known cause, scientists now understand that it's just one part of the story. 
              Recent studies point to multiple factors:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Blood Flow Issues",
                desc: "Reduced blood flow to the delicate structures of the inner ear"
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Filter Cell Damage",
                desc: "Tiny sensory \"filter\" cells losing their ability to separate useful sounds from background noise"
              },
              {
                icon: <AlertTriangle className="h-8 w-8" />,
                title: "Inflammation",
                desc: "Inflammatory processes that interfere with auditory nerve function"
              },
              {
                icon: <Check className="h-8 w-8" />,
                title: "Lifestyle Impact",
                desc: "Lifestyle habits — including diet, sleep, and stress levels — that impact ear health over time"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-6">
              <p className="text-foreground text-lg">
                When the ear's natural "noise filters" malfunction, unnecessary sound signals can get trapped in the brain. 
                This may explain why some people experience constant background noises — even in complete silence.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brain Connection Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Connection Between Hearing and Brain Health
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Hearing is more than just sound. Your brain constantly processes, organizes, and interprets what your ears detect. 
                When hearing declines, your brain must work harder, which can:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Reduce concentration",
                  "Increase mental fatigue",
                  "Affect memory retention",
                  "Contribute to feelings of isolation or frustration"
                ].map((effect, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">{effect}</p>
                  </div>
                ))}
              </div>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <p className="text-foreground font-medium">
                    The encouraging news? Research suggests that supporting auditory health may also protect long-term brain function.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <img
                src={healthyHearingCouple}
                alt="Healthy couple having clear conversation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Good News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Good News: Your Hearing Can Be Supported Naturally
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              New findings suggest that, for many people, the auditory system can be encouraged to work more efficiently — 
              sometimes by reactivating dormant "filter" cells in the ear.
            </p>
            <p className="text-foreground text-lg max-w-3xl mx-auto">
              This doesn't require invasive procedures or expensive devices. Instead, it may involve:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Gentle sound stimulation techniques",
              "Habits that improve ear microcirculation",
              "Nutritional support for nerve and cell health",
              "Mindful listening practices that help the brain \"tune in\" more effectively"
            ].map((method, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-foreground text-lg">{method}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={hearingProtection}
                alt="Person wearing hearing protection"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Prevention Matters — Even If You Have No Symptoms Yet
              </h2>
              <Card className="border-accent/20 bg-accent/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-foreground text-lg font-medium mb-2">
                    Did you know that 68% of people never experience tinnitus or significant hearing loss, 
                    even after years in noisy environments?
                  </p>
                  <p className="text-muted-foreground">
                    Researchers believe these individuals may have natural biological protections — 
                    but lifestyle choices can help anyone improve their odds of keeping hearing sharp.
                  </p>
                </CardContent>
              </Card>
              <p className="text-foreground text-lg">
                Simple daily actions may reduce risk and help your auditory system function at its best for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              🎯 Want to Learn the Science-Backed Habits for Healthy Hearing?
            </h2>
            
            <Card className="border-primary/20 bg-card mb-8">
              <CardContent className="p-8">
                <p className="text-xl text-foreground mb-6">A free, short video reveals:</p>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  {[
                    "The surprising everyday mistakes that could accelerate hearing decline",
                    "A simple daily adjustment researchers say can help protect your hearing", 
                    "How some people maintain crystal-clear sound recognition for decades"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground">
                ⏳ This video is free to watch, but it may not remain online forever.
              </p>
              <p className="text-xl text-foreground font-medium">
                👉 Tap here to watch it now and take your first step toward better hearing health.
              </p>
            </div>

            <Button 
              onClick={handleWatchVideo}
              size="lg"
              className="text-xl px-12 py-6 h-auto font-bold"
            >
              Watch Free Video Now
            </Button>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-6">References</h3>
            <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
              <p>Anderson, P. & Lee, K. (2024). Neural plasticity in auditory pathways: A review. Journal of Auditory Neuroscience, 18(4), 221–234.</p>
              <p>Kumar, S. et al. (2023). The role of cochlear microcirculation in age-related hearing decline. Hearing Research Today, 45(2), 110–122.</p>
              <p>Williams, R. (2022). Auditory filter cell degeneration and sound clarity loss. Ear & Brain Studies, 11(3), 89–97.</p>
              <p>Zhang, H. & Morales, L. (2024). Cognitive load and early auditory dysfunction. NeuroAuditory Insights, 29(5), 301–314.</p>
              <p>Chen, Y. et al. (2023). Morning routine effects on auditory system health. Lifestyle & Hearing Journal, 7(2), 45–58.</p>
              <p className="text-xs italic">* References are for illustrative purposes only</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HearingLanding;