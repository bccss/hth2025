import '../index.css'
import { motion } from 'framer-motion'

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
    return (
        <div className="min-h-screen bg-sky-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Sponsors</h1>
                {SponsorList.map((category) => (
                    <div key={category.category} className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-700 mb-8 border-b-2 border-sky-200 pb-2">
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
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                                             transition-shadow duration-300
                                             flex flex-col md:flex-row items-center md:items-start gap-6"
                                >
                                    <div className="flex flex-col items-center md:items-start flex-1">
                                        <h3 className="text-3xl font-bold text-slate-800 mb-3">{sponsor.name}</h3>
                                        <h4 className="text-lg text-slate-700 mb-4">{sponsor.role}</h4>
                                        <div className="text-slate-700 space-y-3 max-w-xl">
                                            <p className="text-base leading-relaxed">{sponsor.about}</p>
                                            <p className="text-base leading-relaxed">{sponsor.background}</p>
                                        </div>
                                    </div>
                                    <motion.div 
                                        className="flex-shrink-0"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <img 
                                            src={sponsor.photo} 
                                            alt={`${sponsor.name} logo`} 
                                            className="w-32 h-32 rounded-full object-contain bg-white p-3 shadow-md"
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sponsors;