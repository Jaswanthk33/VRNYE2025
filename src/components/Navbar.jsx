import { Button } from "@/components/ui/button";
import VE from "../assets/VE.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black p-4">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        <div className="text-white text-xl font-bold">VE</div>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-black"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}
