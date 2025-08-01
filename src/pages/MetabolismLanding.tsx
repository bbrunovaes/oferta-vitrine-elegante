import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MetabolismLanding = () => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    window.open('https://mitolyn.com/science/?hopId=92b62861-4864-4117-ae94-1fdd8cc838c7&affiliate=blackk1', '_blank');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 pt-4">
        <Button
          onClick={handleBackToHome}
          variant="outline"
          className="mb-4 hover:bg-green-50 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Home
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Warning */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 transition-colors duration-300 hover:text-green-600 cursor-pointer">
            ⚠️ The Hidden Reason You Can't Lose Weight — And Why It's Not Your Fault
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-700 mb-2 transition-colors duration-300 hover:text-green-600 cursor-pointer">
            Discover Why Your Body is Working Against You…
          </h2>
          <p className="text-lg text-gray-600">
            Even When You're Eating Right, Exercising, and Doing "Everything" Correctly
          </p>
        </div>

        {/* Main Content */}
        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-green-200">
          <div className="space-y-6">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                😰 <strong>Feel like you're stuck in a body that refuses to change?</strong>
              </p>
              <p className="text-gray-600 mb-4">
                If the scale isn't moving—no matter how hard you try—it's likely not your fault.
              </p>
              <p className="text-gray-700">
                <strong>The real issue?</strong><br />
                A sluggish metabolism that's quietly holding your body hostage.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 transition-colors duration-300 hover:text-red-600 cursor-pointer">
                🚨 Here's What a Slow Metabolism Does to You:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Burns fewer calories</strong> — even while you sleep</li>
                <li>• <strong>Clings to fat</strong> — especially in your belly, hips, and thighs</li>
                <li>• <strong>Makes you exhausted</strong> — even after a full night's sleep</li>
                <li>• <strong>Triggers intense cravings</strong> — especially for sugar and carbs</li>
                <li>• <strong>Clouds your thinking</strong> — causing brain fog and forgetfulness</li>
                <li>• <strong>Disrupts your mood</strong> — increasing anxiety, sadness, and irritability</li>
                <li>• <strong>Slows everything down</strong> — including your motivation and confidence</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4 transition-colors duration-300 hover:text-yellow-600 cursor-pointer">
                🤯 And the worst part?
              </h3>
              <p className="text-gray-700 mb-4">
                Most people are never told the real reason their metabolism slowed down.
              </p>
              <p className="text-gray-700 mb-2">
                They're told to "try harder."<br />
                To "eat less and move more."
              </p>
              <p className="text-gray-700 mb-4">
                But the truth is, your body might be working against you.
              </p>
              <p className="text-gray-700">
                And until you fix the root cause, nothing will change—no matter how hard you push.
              </p>
            </div>

            <div className="text-center bg-green-50 p-6 rounded-lg">
              <p className="text-lg text-green-800 mb-4">
                <strong>You're not broken. You're not lazy.</strong><br />
                Your metabolism simply needs to be reawakened.
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 hover:text-green-300 cursor-pointer">
              🎥 Want to know why your metabolism is slow—and what you can do about it?
            </h3>
            <p className="text-lg mb-6">
              Tap the button below to watch a powerful video revealing the truth:
            </p>
            
            <div className="mb-6 text-left max-w-2xl mx-auto">
              <ul className="space-y-2">
                <li>✅ What's really causing your body to hold onto fat</li>
                <li>✅ Why traditional diets often make things worse</li>
                <li>✅ And how thousands are naturally restoring their metabolism—without starving themselves</li>
              </ul>
            </div>

            <Button 
              onClick={handleWatchNow}
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold text-3xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-20"
            >
              👉 WATCH NOW
            </Button>

            <p className="text-sm mt-4 opacity-90">
              This could change everything for your health, energy, and weight.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MetabolismLanding;