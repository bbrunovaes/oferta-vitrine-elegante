import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Shield, Heart, TrendingUp } from "lucide-react";
import healthyNutrition from "@/assets/healthy-nutrition.jpg";
import healthyWomanJogging from "@/assets/healthy-woman-jogging.jpg";
import healthyManCooking from "@/assets/healthy-man-cooking.jpg";

const GlucoExtendLanding = () => {
  const handleGetGlucoExtend = () => {
    window.open('https://hop.clickbank.net/?custom=1&affiliate=blackk1&vendor=glucoext&pid=new', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">GlucoExtend</h1>
            <Badge variant="secondary" className="text-sm">
              Blood Sugar Support
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
            🩺 Clinically Researched Formula
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Finally, Natural Support for 
            <span className="text-primary block mt-2">Healthy Blood Sugar</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the breakthrough formula that's helping thousands maintain balanced glucose levels naturally, without restrictive diets or constant worry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleGetGlucoExtend}
              size="lg"
              className="text-lg px-10 py-4 h-auto font-semibold"
            >
              Get GlucoExtend Now
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.9/5 from 12,847+ customers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="border-green-200">
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Heart Healthy</h3>
                <p className="text-sm text-muted-foreground">Supports cardiovascular wellness</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Stable Energy</h3>
                <p className="text-sm text-muted-foreground">No more energy crashes</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Natural Formula</h3>
                <p className="text-sm text-muted-foreground">Plant-based ingredients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Are You Struggling With Blood Sugar Concerns?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you've been dealing with any of these challenges, you're not alone...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Unpredictable energy levels throughout the day</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Constant worry about your glucose readings</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Feeling restricted by dietary limitations</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Afternoon crashes that leave you exhausted</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Difficulty maintaining a healthy weight</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Sleep disruption from blood sugar spikes</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Increased cravings for sugary foods</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Concern about long-term health complications</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-foreground mb-4">
              The good news? There's a natural solution that's already helping thousands of people...
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Introducing GlucoExtend: Nature's Answer to Blood Sugar Balance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A revolutionary formula combining ancient wisdom with modern science to support healthy glucose metabolism naturally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                How GlucoExtend Works:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Enhances Insulin Sensitivity</h4>
                    <p className="text-muted-foreground text-sm">Helps your cells respond better to insulin naturally</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Supports Glucose Metabolism</h4>
                    <p className="text-muted-foreground text-sm">Optimizes how your body processes sugar</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Reduces Sugar Cravings</h4>
                    <p className="text-muted-foreground text-sm">Helps control appetite and reduce sweet tooth</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Promotes Steady Energy</h4>
                    <p className="text-muted-foreground text-sm">Maintains consistent energy levels throughout the day</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleGetGlucoExtend}
                size="lg"
                className="text-lg px-8 py-3 h-auto font-semibold"
              >
                Try GlucoExtend Today
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <img
                src={healthyNutrition}
                alt="Healthy nutrition for blood sugar support"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Powerful Natural Ingredients
            </h2>
            <p className="text-lg text-muted-foreground">
              Each ingredient is carefully selected for its proven blood sugar support benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Berberine</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Clinically shown to support healthy glucose metabolism and insulin sensitivity
                </p>
                <Badge variant="secondary" className="text-xs">Research-backed</Badge>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Chromium</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Essential mineral that helps improve insulin function and glucose uptake
                </p>
                <Badge variant="secondary" className="text-xs">Essential mineral</Badge>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Cinnamon Extract</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Traditional spice with modern science backing its glucose support properties
                </p>
                <Badge variant="secondary" className="text-xs">Traditional remedy</Badge>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Alpha Lipoic Acid</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Powerful antioxidant that supports cellular glucose uptake
                </p>
                <Badge variant="secondary" className="text-xs">Antioxidant</Badge>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Bitter Melon</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Natural fruit extract with compounds that mimic insulin action
                </p>
                <Badge variant="secondary" className="text-xs">Natural extract</Badge>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Gymnema Sylvestre</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Ayurvedic herb known as "sugar destroyer" for its glucose support benefits
                </p>
                <Badge variant="secondary" className="text-xs">Ayurvedic herb</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What You Can Expect With GlucoExtend
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={healthyWomanJogging}
                alt="Healthy woman with stable energy levels"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Week 1-2: Initial Balance</h3>
                  <p className="text-muted-foreground">Begin to notice more stable energy levels and reduced sugar cravings</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Week 3-4: Improved Control</h3>
                  <p className="text-muted-foreground">Experience better glucose readings and more consistent energy</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Month 2-3: Optimized Health</h3>
                  <p className="text-muted-foreground">Achieve your personal best glucose management and overall wellness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Real Results From Real People
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  "My glucose readings have never been more stable. I finally feel in control of my health again!"
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Maria S.</p>
                  <p className="text-muted-foreground">Customer for 3 months</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  "No more afternoon crashes! My energy stays consistent throughout the day now."
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Robert T.</p>
                  <p className="text-muted-foreground">Customer for 2 months</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  "I love that it's all natural. Finally found something that works without side effects."
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Linda K.</p>
                  <p className="text-muted-foreground">Customer for 4 months</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🎯 Ready to Take Control of Your Blood Sugar Naturally?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Join thousands who've already discovered the power of natural blood sugar support
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Special Limited-Time Offer</h3>
            <p className="text-lg mb-6">
              Get GlucoExtend today with our 60-day money-back guarantee
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>60-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Natural Formula</span>
              </div>
            </div>

            <Button 
              onClick={handleGetGlucoExtend}
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-4 h-auto font-semibold"
            >
              Get GlucoExtend Now
            </Button>
          </div>

          <p className="text-sm opacity-80">
            * Individual results may vary. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-xl font-bold mb-4">GlucoExtend</h3>
          <p className="text-gray-400 text-sm mb-4">
            Natural blood sugar support for a healthier you
          </p>
          <p className="text-gray-500 text-xs">
            © 2024 GlucoExtend. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GlucoExtendLanding;