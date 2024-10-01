// import { Image } from '@shadcn/ui';
import { cn } from "@/lib/utils"
interface FeatureShowcaseProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  textPosition?: 'left' | 'right'
}

export default function FeatureShowcase({
  title,
  description,
  imageSrc,
  imageAlt,
  textPosition = 'left'
}: FeatureShowcaseProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 py-12">
      <div
        className={cn(
          "w-full lg:w-1/2 order-2",
          textPosition === 'right' ? 'lg:order-1' : 'lg:order-2'
        )}
      >
        <div className="relative w-full aspect-[9/16] max-w-[300px] mx-auto">
          {/* <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-3xl"
          /> */}
        </div>
      </div>
      <div
        className={cn(
          "w-full lg:w-1/2 order-1",
          textPosition === 'right' ? 'lg:order-2' : 'lg:order-1'
        )}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
          {title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}