import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

const MysteryBoxShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Comment ça marche ?</h2>
          <p className="text-xl text-gray-600">
            Trois étapes simples pour vivre l'expérience Boxu
          </p>
        </div>

        {/* Mystery Box Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left side - Mystery Box Visual */}
          <div className="flex flex-col items-center space-y-8">
            {/* 3D Box Icon */}
            <div className="relative">
              <Package className="w-24 h-24 text-black" strokeWidth={1.5} />
            </div>
            
            {/* Mystery Box */}
            <Card className="bg-white border-0 shadow-lg p-8 rounded-2xl">
              <div className="w-64 h-64 bg-black rounded-xl flex items-center justify-center relative">
                <div className="text-8xl text-white font-bold">?</div>
                {/* Subtle shadow effect */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gray-300 rounded-full blur-sm opacity-50"></div>
              </div>
            </Card>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold text-black mb-6">Mystery Box</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Une expérience unique vous attend.<br />
                Chaque Mystery Box contient des<br />
                surprises soigneusement sélectionnées<br />
                d'une valeur supérieure au prix d'achat.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-4xl font-bold text-black">99,000 TND</div>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-semibold rounded-lg w-full max-w-sm"
                onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ACHETER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MysteryBoxShowcase;