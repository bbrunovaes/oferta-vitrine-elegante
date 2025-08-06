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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8 max-w-4xl mx-auto leading-tight">
            Understand the Role of Metabolism in Your Health
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Ever wondered why some people seem to have more energy and manage their weight with ease? The secret may lie in your metabolism.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Often overlooked, your metabolism plays a vital role in how your body creates and uses energy. Gaining clarity on how it works is a powerful first step toward improving your well-being.
          </p>
        </div>

        {/* Problem Section */}
        <Card className="mb-12 border-2 border-primary/20 shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground mb-6">
              🚨 Signs Your Metabolism May Be Slowing Down:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">You feel tired more often than usual</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">Managing your weight feels like a constant battle</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">You crave sugary or carb-heavy snacks</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">Your focus and mental clarity aren't what they used to be</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Natural Solutions Section */}
        <Card className="mb-12 bg-accent/50 border-2 border-accent shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg text-accent-foreground mb-6">
              The good news? You don't need extreme diets or quick fixes. With small, consistent lifestyle changes, you can start supporting a more efficient metabolism today.
            </p>
            <p className="text-lg text-accent-foreground mb-6">
              ✅ Try These Simple Daily Habits:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-accent-foreground">Stay hydrated with water throughout the day</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-accent-foreground">Focus on fiber-rich, nutrient-dense meals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-accent-foreground">Move regularly — add strength training to your routine</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-accent-foreground">Prioritize quality sleep each night</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-accent-foreground">Practice stress-reducing habits like mindfulness or meditation</p>
              </div>
            </div>
            <p className="text-lg text-accent-foreground">
              Taking care of your metabolism is a smart and sustainable way to support your energy, focus, and long-term health.
            </p>
          </CardContent>
        </Card>

        {/* Authority Section */}
        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch our informative video to learn:
          </p>
        </div>

        {/* Video CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-lg font-medium">What metabolism really means for your body.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-lg font-medium">How it influences your energy and weight.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-lg font-medium">Practical steps to support your body's natural balance.</p>
              </div>
            </div>

            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take control of your health with knowledge and confidence. Click to watch now.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 font-bold text-2xl px-16 py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[80px] mb-8"
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

        {/* References Section */}
        <Card className="mt-12 bg-background border border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Scientific References</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <p>1. Cremonini E, Da Silva LME, Lanzi CR, Marino M, Iglesias DE, Oteiza Pl. Anthocyanins and their metabolites promote white adipose tissue beiging by regulating mitochondria thermogenesis and dynamics. Biochem Pharmacol. 2024;222:116069. doi:10.1016/j.bcp.2024.116069</p>
              
              <p>2. Solverson P. Anthocyanin Bioactivity in Obesity and Diabetes: The Essential Role of Glucose Transporters in the Gut and Periphery. Cells. 2020;9(11):2515. Published 2020 Nov 20. doi:10.3390/cells9112515</p>
              
              <p>3. Mao GX, Xu XG, Wang SY, et al. Salidroside Delays Cellular Senescence by Stimulating Mitochondrial Biogenesis Partly through a miR-22/SIRT-1 Pathway. Oxid Med Cell Longev. 2019;2019:5276096. Published 2019 Sep 12. doi:10.1155/2019/5276096</p>
              
              <p>4. Abidov M, Crendal F, Grachev S, Seifulla R, Ziegenfuss T. Effect of extracts from Rhodiola rosea and Rhodiola crenulata (Crassulaceae) roots on ATP content in mitochondria of skeletal muscles. Bull Exp Biol Med. 2003;136(6):585-587. doi:10.1023/b:bebm.0000020211.24779.15</p>
              
              <p>5. Nishida Y, Nawaz A, Kado T, et al. Astaxanthin stimulates mitochondrial biogenesis in insulin resistant muscle via activation of AMPK pathway. J Cachexia Sarcopenia Muscle. 2020;11(1):241- 258. doi:10.1002/jcsm.12530</p>
              
              <p>6. Nishida Y, Nawaz A, Hecht K, Tobe K. Astaxanthin as a Novel Mitochondrial Regulator: A New Aspect of Carotenoids, beyond Antioxidants. Nutrients. 2021;14(1):107. Published 2021 Dec 27. doi:10.3390/nu14010107</p>
              
              <p>7. Yamamoto H, Morino K, Mengistu L, et al. Amla Enhances Mitochondrial Spare Respiratory Capacity by Increasing Mitochondrial Biogenesis and Antioxidant Systems in a Murine Skeletal Muscle Cell Line. Oxid Med Cell Longev. 2016;2016:1735841. doi:10.1155/2016/1735841</p>
              
              <p>8. Nazish I, Ansari SH. Emblica officinalis - Anti-obesity activity. J Complement Integr Med. 2017;15(2):/j/jcim.2018.15.issue-2/jcim-2016-0051/jcim-2016-0051.xml. Published 2017 Dec 5. doi:10.1515/jcim-2016-0051</p>
              
              <p>9. Taub PR, Ramirez-Sanchez I, Ciaraldi TP, et al. Alterations in skeletal muscle indicators of mitochondrial structure and biogenesis in patients with type 2 diabetes and heart failure: effects of epicatechin rich cocoa. Clin Transl Sci. 2012;5(1):43-47. doi:10.1111/j.1752-8062.2011.00357.x</p>
              
              <p>10. Daussin FN, Heyman E, Burelle Y. Effects of (-)-epicatechin on mitochondria. Nutr Rev. 2021;79(1):25-41. doi:10.1093/nutrit/nuaa094</p>
              
              <p>11. Kim JS, Yi HK. Schisandrin C enhances mitochondrial biogenesis and autophagy in C2C12 skeletal muscle cells: potential involvement of anti-oxidative mechanisms. Naunyn Schmiedebergs Arch Pharmacol. 2018;391(2):197-206. doi:10.1007/s00210-017-1449-1</p>
              
              <p>12. Kopustinskiene DM, Bernatoniene J. Antioxidant Effects of Schisandra chinensis Fruits and Their Active Constituents. Antioxidants (Basel). 2021;10(4):620. Published 2021 Apr 18. doi:10.3390/antiox10040620</p>
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
