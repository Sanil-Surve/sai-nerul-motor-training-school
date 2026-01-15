import { Phone, Mail, Clock, MapPin, Car, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer id="contact" className="bg-foreground text-background">
            {/* Contact Section */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Contact Us
                        </h2>
                        <p className="text-background/70 text-lg">
                            Ready to start your driving journey? Get in touch today!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Phone */}
                        <div className="glass-dark rounded-xl p-6 text-center">
                            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Phone</h3>
                            <a
                                href="tel:+919892457369"
                                className="text-background/70 hover:text-primary transition-colors"
                            >
                                +91 9892457369
                            </a>
                        </div>

                        {/* Email */}
                        <div className="glass-dark rounded-xl p-6 text-center">
                            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Email</h3>
                            <a
                                href="mailto:sainerulmotor@gmail.com"
                                className="text-background/70 hover:text-primary transition-colors text-sm"
                            >
                                sainerulmotor@gmail.com
                            </a>
                        </div>

                        {/* Timings */}
                        <div className="glass-dark rounded-xl p-6 text-center">
                            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Timings</h3>
                            <p className="text-background/70 text-sm">
                                Wed - Sat: 7AM - 8PM
                                <br />
                                Sunday: 8AM - 2PM
                            </p>
                        </div>

                        {/* Address */}
                        <div className="glass-dark rounded-xl p-6 text-center">
                            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Address</h3>
                            <p className="text-background/70 text-sm">
                                Shop No. 1, Plot No. 10, Sector 19, Nerul, Navi Mumbai - 400706
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <Button size="lg" className="gap-2" asChild>
                            <a href="tel:+919892457369">
                                <Phone className="w-5 h-5" />
                                Call to Book Your Lessons
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-background/10 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                <Car className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold">Sai Nerul Motor Training School</span>
                        </div>

                        {/* Copyright */}
                        <p className="text-background/60 text-sm">
                            © {new Date().getFullYear()} Sai Nerul Motor Training School. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
