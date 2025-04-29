import '../index.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import colors from '../styles/colors'

// Placeholder image for fallback
const PLACEHOLDER_IMAGE = 'https://placehold.co/200x200?text=Sponsor'

// these are generated for example purposes, but having as category is clean asf
const SponsorList = [
    {
        category: "Technology",
        sponsors: [
            {
                name: "OpenAI",
                photo: "/src/assets/openai-logo.png",
                role: "AI Research & Deployment",
                about: "OpenAI is an AI research and deployment company, dedicated to ensuring that artificial general intelligence benefits all of humanity. They are the creators of ChatGPT, GPT-4, and DALL-E.",
                background: "OpenAI leads breakthrough advancements in artificial intelligence, focusing on developing safe and beneficial AI that can solve complex problems and enhance human capabilities.",
                link: "https://openai.com"
            },
            {
                name: "Microsoft",
                photo: "/src/assets/microsoft-logo.png",
                role: "Cloud & Enterprise Solutions",
                about: "Microsoft is a global technology leader providing cloud computing services, software, and hardware solutions. Their Azure platform powers countless enterprises and startups worldwide.",
                background: "Microsoft has been at the forefront of computing innovation for decades, enabling digital transformation across industries and supporting developer communities globally.",
                link: "https://microsoft.com"
            }
        ]
    },
    {
        category: "Finance",
        sponsors: [
            {
                name: "Fidelity Investments",
                photo: "/src/assets/fidelity-logo.png",
                role: "Financial Services & Technology",
                about: "Fidelity Investments is a leading financial services firm that makes financial expertise broadly accessible to people across all wealth brackets.",
                background: "Fidelity combines cutting-edge technology with traditional financial expertise, investing heavily in blockchain, AI, and other emerging technologies.",
                link: "https://www.fidelity.com"
            },
            {
                name: "Capital One",
                photo: "/src/assets/capitalone-logo.png",
                role: "Banking & Technology",
                about: "Capital One is reimagining banking for the digital age, combining financial services with innovative technology solutions.",
                background: "As a technology-first bank, Capital One is leading digital transformation in finance, using machine learning and cloud computing to revolutionize banking.",
                link: "https://www.capitalone.com"
            }
        ]
    }
]

function Sponsors() {
    // Track loaded images
    const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

    const handleImageLoad = (name: string) => {
        setLoadedImages((prev) => ({...prev, [name]: true}))
    }

    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = PLACEHOLDER_IMAGE
    }

    return (
        <section className="min-h-screen bg-backgroundPurple py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.h1 
                    className="text-4xl font-bold text-center text-fontCream mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Sponsors
                </motion.h1>
                {SponsorList.map((category, categoryIndex) => (
                    <motion.div 
                        key={category.category} 
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-fontCream mb-8 border-b-2 border-[var(--color-lightPurple)] pb-2">
                            {category.category}
                        </h2>
                        <div className="grid grid-cols-1 gap-8 relative">
                            {category.sponsors.map((sponsor, index) => (
                                <motion.div
                                    key={sponsor.name}
                                    initial={{ 
                                        opacity: 0, 
                                        y: -50,
                                        scale: 0.9,
                                        rotateX: 45
                                    }}
                                    whileInView={{ 
                                        opacity: 1, 
                                        y: 0,
                                        scale: 1,
                                        rotateX: 0
                                    }}
                                    viewport={{ 
                                        once: true,
                                        margin: "-100px"
                                    }}
                                    transition={{ 
                                        duration: 0.5,
                                        delay: index * 0.2,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className="bg-[var(--color-lightPurple)]/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl 
                                             transition-shadow duration-300
                                             flex flex-col md:flex-row items-center md:items-start gap-6"
                                >
                                    <div className="flex flex-col items-center md:items-start flex-1">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-fontCream mb-3">{sponsor.name}</h3>
                                        <h4 className="text-lg text-[var(--color-lightPink)] mb-4">{sponsor.role}</h4>
                                        <div className="text-[var(--color-secondaryCream)]/80 space-y-3 max-w-xl">
                                            <p className="text-base leading-relaxed">{sponsor.about}</p>
                                            <p className="text-base leading-relaxed">{sponsor.background}</p>
                                        </div>
                                        <motion.a
                                            href={sponsor.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-flex items-center text-[var(--color-lightPink)] hover:text-fontCream transition-colors"
                                            whileHover={{ x: 5 }}
                                            aria-label={`Visit ${sponsor.name} website`}
                                        >
                                            <span>Learn more</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </motion.a>
                                    </div>
                                    <motion.div 
                                        className="flex-shrink-0"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <img 
                                            src={sponsor.photo} 
                                            alt={`${sponsor.name} logo`} 
                                            className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full object-contain bg-backgroundCream p-3 shadow-md 
                                                      transition-opacity duration-300 ${loadedImages[sponsor.name] ? 'opacity-100' : 'opacity-0'}`}
                                            onLoad={() => handleImageLoad(sponsor.name)}
                                            onError={handleImageError}
                                            loading="lazy"
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Sponsors;