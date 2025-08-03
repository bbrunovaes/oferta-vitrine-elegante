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

      {/* Images */}
      <div className="w-full">
        <div className="w-full">
          <img 
            src="https://i.imgur.com/WKzsQuq.jpg" 
            alt="Metabolism Image 1" 
            className="w-full h-screen object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://i.imgur.com/WKzsQuq.png";
            }}
          />
        </div>
        
        <div className="w-full relative">
          <img 
            src="https://i.imgur.com/tUoHp9a.jpg" 
            alt="Metabolism Image 2" 
            className="w-full h-screen object-cover object-top"
            onError={(e) => {
              e.currentTarget.src = "https://i.imgur.com/tUoHp9a.png";
            }}
          />
          
          {/* WATCH NOW Button positioned over the white button in the image */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <Button
              onClick={handleWatchNow}
              className="bg-red-600 hover:bg-red-700 text-white px-24 py-12 text-4xl font-bold rounded-lg shadow-lg"
            >
              WATCH NOW!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetabolismLanding;