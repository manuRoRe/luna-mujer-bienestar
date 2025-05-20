
import { Link } from "react-router-dom";
import { Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminHeader = () => {
  return (
    <header className="h-16 border-b border-border flex items-center justify-end px-6 bg-background">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="h-5 w-5" />
        </Button>
        <Link to="/profile">
          <div className="flex items-center space-x-2">
            <div className="bg-luna-purple text-white p-1 rounded-full">
              <User className="h-6 w-6" />
            </div>
            <span className="font-medium">Admin</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default AdminHeader;
