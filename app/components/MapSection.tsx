import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
    const address =
        "Shop no: 1 plot no 75 Vishal Corner, near Iyengar bakery, Nerul East, Sector 19, Navi Mumbai, Maharashtra 400706";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <section id="map" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Find Us
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Conveniently located in Nerul East, Navi Mumbai
                    </p>
                </div>

                <div className="glass rounded-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-3">
                        {/* Map */}
                        <div className="lg:col-span-2 h-80 lg:h-auto min-h-[400px]">
                            <iframe
                                title="Sai Nerul Motor Training School Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5551!2d73.0158!3d19.0330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24c0a0a0a0a%3A0x0!2sNerul%20East%2C%20Sector%2019%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>

                        {/* Address Info */}
                        <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        Our Address
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {address}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="glass-light rounded-lg p-4">
                                    <h4 className="font-semibold text-foreground mb-2">
                                        Landmarks
                                    </h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Near Iyengar Bakery</li>
                                        <li>• Vishal Corner, Plot No. 75</li>
                                        <li>• Sector 19, Nerul East</li>
                                    </ul>
                                </div>

                                <Button className="w-full gap-2" size="lg" asChild>
                                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                        <Navigation className="w-5 h-5" />
                                        Get Directions
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
