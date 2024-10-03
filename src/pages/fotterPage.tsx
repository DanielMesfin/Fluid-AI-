import { Dot } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-2">
            <div className="grid grid-cols-2 gap-1 mr-2">
              <Dot size={8} />
              <Dot size={8} />
              <Dot size={8} />
              <Dot size={8} />
            </div>
            <span className="text-3xl font-bold">Fluid AI</span>
          </div>
          <p className="text-sm text-gray-400">2024 Fluid AI</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white opacity-50">
                  Our Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50">
                  Areas
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50">
                  The Waitlist
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white opacity-50">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-50">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
