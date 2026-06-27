import Image from "next/image";

interface GalleryItem {
    id: string;
    title: string;
    tag: string;
    description: string;
    image: string;
    gridClass: string;
}

export default function GalleryPage() {
    const galleryItems: GalleryItem[] = [
        {
            id: "launch-1",
            title: "CETAA Alumni Day",
            tag: "",
            description: "VeloCET team with the UG dean for the CETAA Alumni Day.",
            image: "/gallery/1.jpeg",
            gridClass: "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2",
        },
        {
            id: "workshop-2",
            title: "SD1000 MVP",
            tag: "",
            description: "The base version of SD1000",
            image: "/gallery/2.jpeg",
            gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
        },
        {
            id: "test-3",
            title: "VeloDay 2025",
            tag: "",
            description: "Our first public event, VeloDay 2025 along with CEO @Hex20 ",
            image: "/gallery/3.jpeg",
            gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
        },
        {
            id: "structures-4",
            title: "Club Apparel launch",
            tag: "",
            description: "With Kiran Mohan, Project Head @VSSC",
            image: "/gallery/4.jpeg",
            gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
        },
        {
            id: "electronics-5",
            title: "PCB Fab",
            tag: "",
            description: "Initial PCB fabrication of our flagship Flight Computer",
            image: "/gallery/5.jpeg",
            gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
        },
        {
            id: "layup-6",
            title: "Nova-1 Static Fire Test",
            tag: "",
            description: "Maiden SFT of our homemade motor. The test was a a success",
            image: "/gallery/6.jpeg",
            gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
        },
        {
            id: "railprep-7",
            title: "CETAA Day Pitchup",
            tag: "",
            description: "Pitching VeloCET's success at CETAA Day with an Alumni",
            image: "/gallery/7.jpeg",
            gridClass: "lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2",
        },
        {
            id: "video-8",
            title: "Ignitor Testing",
            tag: "",
            description: "Testing of our home made ignitors. These were further developed to initiate the SD1000",
            image: "/gallery/8.mp4",
            gridClass: "lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1",
        },
        {
            id: "deployment-9",
            title: "2025 Batch",
            tag: "",
            description: "Batch of 2025",
            image: "/gallery/9.jpg",
            gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
        },
        {
            id: "padsetup-10",
            title: "Nova-1 in Action !!",
            tag: "",
            description: "The motor could deliver over 650N of thrust with a burn time of over 2s",
            image: "/gallery/10.jpg",
            gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
        },
        {
            id: "teamcelebration-11",
            title: "Ejection flame",
            tag: "",
            description: "The same motor that will propel SD1000",
            image: "/gallery/11.jpg",
            gridClass: "lg:col-span-3 lg:row-span-1 md:col-span-2 md:row-span-1",
        },
        {
            id: "teststand-12",
            title: "Test Stand Setup",
            tag: "",
            description: "The complete setup of our static test stand used for motor runs.",
            image: "/gallery/teststand.jpeg",
            gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
        },
    ];

    return (
        <div className="relative pt-32 pb-24 px-4 min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
            {/* Background starry sky */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/dark_sky.webp"
                    alt="Starry Sky Background"
                    fill
                    className="object-cover object-center opacity-45 hidden sm:block"
                    sizes="100vw"
                    quality={90}
                    priority
                />
                <div className="absolute inset-0 bg-slate-950/40" />
            </div>

            {/* Top fade-in transition */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-1" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-1" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-wider">
                        Our Gallery
                    </h1>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A visual chronicle of VeloCET's journey - engineering workshops, test beds, engine fires, and high-altitude launches.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[280px]">
                    {galleryItems.map((item) => {
                        const isVideo = item.image.endsWith(".mp4");
                        return (
                            <div
                                key={item.id}
                                className={`relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 group ${item.gridClass}`}
                            >
                                {/* Visual Content (Image or Video) */}
                                <div className="absolute inset-0 z-0">
                                    {isVideo ? (
                                        <video
                                            src={item.image}
                                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    )}
                                    {/* Gradient overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                                    <div className="absolute inset-0 bg-violet-950/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                                    {/* Tag and Title container - slides up slightly on hover */}
                                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <span className="inline-block text-[10px] uppercase tracking-widest text-violet-400 font-bold bg-violet-950/50 px-2 py-0.5 rounded-sm border border-violet-500/20 mb-2">
                                            {item.tag}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Description - fades and slides in from below on hover */}
                                    <p className="text-xs text-slate-300 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
