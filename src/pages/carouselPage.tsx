"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/assets/csl1.jpg", alt: "Image 1" },
  { src: "/assets/csl2.png", alt: "Image 2" },
  { src: "/assets/csl3.jpg", alt: "Image 3" },
];

export default function CarouselPage() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[300px] sm:h-[600px] md:h-[900px]">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover" // Ensure the image covers the carousel item
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // Style to cover properly
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      {/* Responsive Card Overlay */}
      <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[400px] h-auto bg-opacity-20 backdrop-blur-lg border border-white rounded-[12px] shadow-lg">
        <CardContent className="flex flex-col justify-center items-center h-full p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">
            Navigate Through Images
          </h3>
          <p className="text-xs text-white mb-4">
            Use the arrows to move to the next or previous image.
          </p>
          <div className="flex justify-center space-x-2 mb-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={current === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-white text-sm">
              {current} / {images.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              disabled={current === images.length}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col items-center">
            {images.map((_, index) => (
              <span key={index} className="text-xs text-white">
                {index + 1}:{" "}
                {index === 0 ? "First" : index === 1 ? "Second" : "Third"} Image
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
