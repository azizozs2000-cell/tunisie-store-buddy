import { ShoppingCart, Truck, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProcessSteps = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Étape 1",
      subtitle: "Commandez votre Boxu",
      description: "Cliquez sur 'Acheter maintenant' et finalisez votre commande en quelques clics."
    },
    {
      icon: Truck,
      title: "Étape 2", 
      subtitle: "Attendez la livraison",
      description: "Votre Mystery Box sera livrée directement chez vous sous 3-5 jours ouvrables."
    },
    {
      icon: Gift,
      title: "Étape 3",
      subtitle: "Découvrez votre surprise",
      description: "Ouvrez votre box et découvrez les produits exclusifs qui vous attendent !"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          
          <p className="text-xl text-gray-600">
            Trois étapes simples pour vivre l'expérience Boxu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon container with modern design */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    {/* Main icon container */}
                    <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-4">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">{step.subtitle}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8 -translate-y-1/2" 
                       style={{ width: 'calc(100% - 6rem)' }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-16 h-1 bg-black rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;