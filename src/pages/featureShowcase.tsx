import React from "react";

interface FeatureShowcaseProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  textPosition?: "left" | "right";
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  textPosition = "left",
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 py-12">
      <div
        className={`w-full lg:w-1/2 ${
          textPosition === "right" ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
          {title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg">
          {description}
        </p>
      </div>
      <div
        className={`w-full lg:w-1/2 ${
          textPosition === "right" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative w-full aspect-[9/16] max-w-[300px] mx-auto">
          {/* Standard img tag with error handling */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover rounded-3xl"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.jpg";
            }}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
