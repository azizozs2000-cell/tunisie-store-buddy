import { User, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">Boxu</h1>
          </div>

          {/* Account Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <User className="w-4 h-4" />
              <span>Se connecter</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center space-x-2 border-gray-300 text-gray-700 hover:text-black hover:border-black"
            >
              <UserPlus className="w-4 h-4" />
              <span>S'inscrire</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;