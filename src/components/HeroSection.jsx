import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >

            <div className="container max-w-6xl mx-auto z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Text column */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1">
                                {" "}
                                Bimsara
                            </span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                                {" "}
                                Wickramanayaka
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
                            I craft scalable web and mobile experiences that blend clean design with AI-driven functionality. Specializing in full-stack development with React, Flutter, and Node.js, I build user-focused apps that perform in production.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>

                    {/* Image column */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        {/* image + accent: match hero fade-in timing */}
                        <div className="relative opacity-0 animate-fade-in-delay-2">
                                {/* decorative blurred circular accent behind the photo (pulsing) */}
                                <div
                                    className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 to-transparent opacity-60 blur-2xl pointer-events-none animate-[pulse-subtle_4s_ease-in-out_infinite] motion-reduce:animate-none"
                                    aria-hidden="true"
                                />

                                {/* circular framed photo container with hover + focus effects */}
                                <div className="relative p-1 rounded-full bg-gradient-to-br from-background/60 to-background/40 ring-1 ring-background/20 shadow-md transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-2xl focus-within:scale-105 overflow-hidden">
                                    <div tabIndex={0} className="rounded-full overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50">
                                        <img
                                            src="/projects/Profile pic2.jpg"
                                            alt="Pedro Machado"
                                            loading="lazy"
                                            className="block w-35 h-35 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};