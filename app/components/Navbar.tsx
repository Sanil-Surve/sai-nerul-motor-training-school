"use client";

import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Location", href: "#map" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-background py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Car className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-lg font-bold text-primary">
                        Sai Nerul Motor Training School
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-primary/80 hover:text-primary transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button asChild>
                        <a href="tel:+919892457369">Call Now</a>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden glass-light mt-2 mx-4 rounded-lg p-4">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-primary/80 hover:text-primary transition-colors font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button asChild className="w-full">
                            <a href="tel:+919892457369">Call Now</a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
