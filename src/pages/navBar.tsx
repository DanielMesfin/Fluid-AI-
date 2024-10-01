"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="relative z-20 w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        {isMounted && isSmallScreen ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] bg-gray-900"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-2"
                >
                  What we solve
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-2"
                >
                  Our features
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-2"
                >
                  Our vision
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 block py-2"
                >
                  The roadmap
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        ) : null}
        {isMounted && !isSmallScreen ? (
          <div className="hidden md:flex w-full justify-between">
            {/* Left-aligned links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                What we solve
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Our features
              </a>
            </div>
            {/* Right-aligned links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                Our story
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                The whitelist{" "}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
