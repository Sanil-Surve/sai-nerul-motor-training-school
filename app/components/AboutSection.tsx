import { Award, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        icon: Award,
        title: "RTO Certified",
        description: "Government approved training with official certification",
    },
    {
        icon: Users,
        title: "Expert Instructors",
        description: "Experienced and patient trainers for all skill levels",
    },
    {
        icon: Clock,
        title: "Flexible Timings",
        description: "Morning, afternoon, and evening batches available",
    },
    {
        icon: Shield,
        title: "Safe Training",
        description: "Dual-control cars with comprehensive insurance",
    },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        About Sai Nerul Motor Training School
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Trusted by thousands of students in Navi Mumbai, we provide
                        comprehensive driving education for cars, two-wheelers, and
                        commercial vehicles.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="glass border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <CardContent className="p-6 text-center">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="glass rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Our Courses
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Light Motor Vehicle (LMV) - Car Training",
                                    "Two Wheeler Training - Scooty & Bike",
                                    "Heavy Motor Vehicle (HMV) Training",
                                    "Refresher Courses for Licensed Drivers",
                                    "RTO Test Preparation & Assistance",
                                ].map((course, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-foreground"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        {course}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-light rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Why Choose Us?
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: "30+", label: "Years Experience" },
                                    { value: "5000+", label: "Students Trained" },
                                    { value: "98%", label: "Pass Rate" },
                                    { value: "4.8★", label: "Google Rating" },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center p-4">
                                        <div className="text-3xl font-bold text-primary mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
