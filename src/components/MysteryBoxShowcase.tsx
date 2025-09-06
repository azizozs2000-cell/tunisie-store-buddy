import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

const MysteryBoxShowcase = () => {
  return (
  <section className="py-20 bg-gray-50 flex justify-center items-center px-4">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          

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

            {/* Formulaire d'achat */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-2xl font-semibold mb-4">Formulaire d'achat</h4>
              <p className="text-gray-600 mb-6">Remplissez le formulaire ci-dessous pour commander votre Mystery Box</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom complet"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gouvernorat *
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Sélectionnez un gouvernorat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse complète *
                  </label>
                  <textarea
                    placeholder="Votre adresse complète"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={3}
                  />
                </div>

                <div className="border-t border-gray-200 pt-4 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium">Total:</span>
                    <span className="text-xl font-bold">99,000 TND</span>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-semibold rounded-lg w-full"
                  >
                    ACHETER MAINTENANT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MysteryBoxShowcase;