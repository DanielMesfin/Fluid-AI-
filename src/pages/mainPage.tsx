"use client";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { motion, AnimatePresence, CustomValueType } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cardData } from "./homePage"; // Assume card data is exported from another file

import { useMediaQuery } from "react-responsive";
import { AppLogo } from "@/constants/svgs";

const MainPage = () => {
  const [step, setStep] = useState(0);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));

  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-black">
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
              src={AppLogo}
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
              className={`grid ${isSmallScreen ? "grid-cols-1" : "grid-cols-2"
                } gap-4 w-full max-w-4xl`}
            >
              {cardData.map((card: { id: Key | null | undefined; initialPosition: { x: string | number | CustomValueType | undefined; y: string | number | CustomValueType | undefined; }; image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; subtitle: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
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
                        alt="ALT"
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
    </div>
  );
};

export default MainPage;
