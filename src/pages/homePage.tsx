"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Clock, MapPin, Menu } from "lucide-react";
import Footer from "./fotterPage";
import FAQPage from "./fAQPage";
import CarouselPage from "./carouselPage";
import FeatureShowcase from "./featureShowcase";
import NavBar from "./navBar";
import JoinUs from "./joinUs";

interface CardData {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  initialPosition: { x: string; y: string };
  finalPosition: { x: number; y: number };
  width: string;
  height: string;
}

const cardData: CardData[] = [
  {
    id: "card1",
    title: "Renew Car Insurance",
    subtitle: "Due To Do",
    initialPosition: { x: "-100vw", y: "0" },
    finalPosition: { x: -300, y: -200 },
    width: "250px",
    height: "150px",
  },
  {
    id: "card2",
    title: "Kris Beach",
    subtitle: "Upcoming Event",
    initialPosition: { x: "100vw", y: "0" },
    finalPosition: { x: 300, y: -200 },
    width: "200px",
    height: "120px",
  },
  {
    id: "card3",
    title: "Restaurant La Rosa",
    image: "/placeholder.svg?height=100&width=150",
    initialPosition: { x: "0", y: "100vh" },
    finalPosition: { x: -300, y: 200 },
    width: "250px",
    height: "180px",
  },
  {
    id: "card4",
    title: "DXB ⇄ CDG",
    initialPosition: { x: "0", y: "-100vh" },
    finalPosition: { x: 300, y: 200 },
    width: "180px",
    height: "100px",
  },
];

const gradientStyle = {
  background:
    "linear-gradient(to right, #FFFFFF1A, #FFFFFF1A), linear-gradient(to left, black, yellow),linear-gradient(to top, black, yellow),linear-gradient(to bottom, black, yellow)",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
};

const HomePage = () => {
  const [step, setStep] = useState(0);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));

  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-black to-transparent">
      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <main
        style={gradientStyle}
        className="flex-grow flex flex-col items-center justify-start relative p-4"
      >
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center z-10"
            >
              <motion.img
                src="/placeholder.svg?height=128&width=128"
                alt="Fluid AI Logo"
                className="w-32 h-32 mx-auto mb-4"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.h1
                className="text-4xl font-bold text-white mb-8"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                Fluid AI
              </motion.h1>
              <Button onClick={nextStep} className="color-white mt-4">
                Get Started
              </Button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center z-10"
            >
              <motion.h2
                className="text-5xl font-bold text-white mb-4"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Unlock Seamless Efficiency
              </motion.h2>
              <Button onClick={nextStep} className="color-white mt-4">
                Join Whitelist
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full z-10 flex flex-col items-center"
            >
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white text-center mb-8"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                Unlock Seamless Efficiency
              </motion.h2>
              <div
                className={`grid ${
                  isSmallScreen ? "grid-cols-1" : "grid-cols-2"
                } gap-4 w-full max-w-4xl`}
              >
                {cardData.map((card) => (
                  <motion.div
                    key={card.id}
                    initial={{
                      x: isSmallScreen ? 0 : card.initialPosition.x,
                      y: isSmallScreen ? 50 : card.initialPosition.y,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: isSmallScreen ? 0.2 : Math.random() * 0.5 + 0.5,
                      },
                    }}
                    className="w-full"
                  >
                    <Card className="p-4 h-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:scale-105 transition-transform duration-300">
                      {card.image && (
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-32 object-cover mb-2"
                        />
                      )}
                      <h3 className="text-xl font-bold">{card.title}</h3>
                      {card.subtitle && (
                        <p className="text-gray-400">{card.subtitle}</p>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      {/* Section 1 content */}
      <section className="w-full text-white py-16 px-4 md:px-8">
        <FeatureShowcase
          title="Fluid AI was born out of a desire to simplify and streamline modern
            life"
          description="In a world where daily tasks, communication, and goals often
                become overwhelming, Fluid AI offers an innovative solution.
                Combining advanced AI technology with a user-friendly interface,
                it brings together to-do lists, chats, saved items, and bucket
                lists into one seamless platform."
          imageSrc="/assets/E.png"
          imageAlt="Description of the image"
          textPosition="right"
        />
        <FeatureShowcase
          title="Fluid AI was born out of a desire to simplify and streamline modern
        life"
          description="In a world where daily tasks, communication, and goals often
            become overwhelming, Fluid AI offers an innovative solution.
            Combining advanced AI technology with a user-friendly interface,
            it brings together to-do lists, chats, saved items, and bucket
            lists into one seamless platform."
          imageSrc="/assets/A.png"
          imageAlt="Description of the image"
          textPosition="left"
        />
        <FeatureShowcase
          title="Fluid AI was born out of a desire to simplify and streamline modern
        life"
          description="In a world where daily tasks, communication, and goals often
            become overwhelming, Fluid AI offers an innovative solution.
            Combining advanced AI technology with a user-friendly interface,
            it brings together to-do lists, chats, saved items, and bucket
            lists into one seamless platform."
          imageSrc="/assets/B.png"
          imageAlt="Description of the image"
          textPosition="right"
        />
        <FeatureShowcase
          title="Fluid AI was born out of a desire to simplify and streamline modern
        life"
          description="In a world where daily tasks, communication, and goals often
            become overwhelming, Fluid AI offers an innovative solution.
            Combining advanced AI technology with a user-friendly interface,
            it brings together to-do lists, chats, saved items, and bucket
            lists into one seamless platform."
          imageSrc="/assets/C.png"
          imageAlt="Description of the image"
          textPosition="left"
        />
      </section>
      <CarouselPage />
      <FAQPage />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default HomePage;
