
"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import hero1 from "../assets/sai_nerul_image_01.webp";
import hero2 from "../assets/sai_nerul_motor_04.png";
import hero3 from "../assets/sai_motor_image_03.png";

const slides = [
    {
        image: hero1,
        title: "Learn to Drive with Confidence",
        subtitle: "Professional training for all vehicle types",
    },
    {
        image: hero2,
        title: "Expert Instructors",
        subtitle: "Patient and certified driving professionals",
    },
    {
        image: hero3,
        title: "State-of-the-Art Facility",
        subtitle: "Modern vehicles and training grounds",
    },
];

export const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        width={1920}
                        height={1080}
                    />
                    <div className="absolute inset-0 bg-foreground/40" />
                </div>
            ))}

            {/* Content */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                    <div className="glass-dark rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-background mb-4">
                            {slides[current].title}
                        </h1>
                        <p className="text-xl md:text-2xl text-background/90 mb-8">
                            {slides[current].subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <a href="#contact">Enroll Now</a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-background/50 text-bg-background/20 hover:bg-background/20"
                                asChild
                            >
                                <a href="#about">Learn More</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass-dark rounded-full p-3 hover:bg-background/20 transition-colors"
            >
                <ChevronLeft className="w-6 h-6 text-background" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass-dark rounded-full p-3 hover:bg-background/20 transition-colors"
            >
                <ChevronRight className="w-6 h-6 text-background" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current
                            ? "bg-primary w-8"
                            : "bg-background/50 hover:bg-background/80"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
