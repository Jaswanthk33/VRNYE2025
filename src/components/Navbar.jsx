import { Button } from "@/components/ui/button";
import VE from "../assets/VE.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black p-4">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        <div className="text-white text-xl font-bold">VE</div>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-black"
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          Sign In
        </Button>
      </div>
    </nav>
  );
}
