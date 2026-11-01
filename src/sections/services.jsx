import { useRef, useEffect } from "react";
import { Layout, Palette, Server, Sparkles, Check, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionLabel from "../components/SectionLabel";

/* ── Scroll reveal hook ── */
function useReveal(delay = 0) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setTimeout(() => el.classList.add("visible"), delay);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.08, rootMargin: "-20px 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [delay]);
    return ref;
}

const servicesData = [
    {
        id: "frontend",
        number: "01",
        Icon: Layout,
        accent: "bg-[#bfdbfe]",
        title_id: "Frontend Web Development",
        title_en: "Frontend Web Development",
        subtitle_id: "Website Responsif & Interaktif",
        subtitle_en: "Responsive & Interactive Web",
        desc_id:
            "Membangun antarmuka web modern yang cepat, responsif di semua perangkat, dan ramah SEO dengan React.js, Tailwind CSS, serta integrasi REST API yang optimal.",
        desc_en:
            "Crafting high-performance, responsive web interfaces with React.js, Tailwind CSS, and clean REST API integrations that feel smooth on every screen.",
        features_id: [
            "Single Page Application (SPA) React",
            "Desain Responsif & Mobile-First",
            "Performa Cepat & Praktik SEO",
            "Integrasi API & State Management",
        ],
        features_en: [
            "React Single Page Applications (SPA)",
            "Responsive & Mobile-First Design",
            "Fast Performance & SEO Best Practices",
            "API Integrations & State Management",
        ],
    },
    {
        id: "uiux",
        number: "02",
        Icon: Palette,
        accent: "bg-[#fce7f3]",
        title_id: "Desain UI/UX & Prototipe",
        title_en: "UI/UX Design & Prototyping",
        subtitle_id: "Desain Antarmuka Intuitif",
        subtitle_en: "Intuitive Interface Design",
        desc_id:
            "Merancang konsep desain produk digital yang estetik dan intuitif menggunakan Figma—mulai dari wireframing, alur pengguna, hingga prototipe interaktif.",
        desc_en:
            "Designing clean and intuitive digital product interfaces in Figma—from wireframing and user journeys to interactive high-fidelity prototypes.",
        features_id: [
            "Wireframing & Rancangan Alur Pengguna",
            "Prototipe Interaktif di Figma",
            "Design System & Konsistensi Komponen",
            "Pendekatan User-Centered UI/UX",
        ],
        features_en: [
            "Wireframing & User Flow Mapping",
            "Interactive Figma Prototypes",
            "Design Systems & Reusable Components",
            "User-Centered UI/UX Approach",
        ],
    },
    {
        id: "fullstack",
        number: "03",
        Icon: Server,
        accent: "bg-[#bbf7d0]",
        title_id: "Sistem Informasi & Backend",
        title_en: "Information Systems & Backend",
        subtitle_id: "Aplikasi Web & Basis Data",
        subtitle_en: "Web Applications & Databases",
        desc_id:
            "Mengembangkan aplikasi sistem informasi berbasis web dengan PHP/Laravel dan MySQL. Menghubungkan logika bisnis, autentikasi aman, dan struktur database efisien.",
        desc_en:
            "Building full-featured information system web applications with PHP/Laravel and MySQL. Ensuring reliable business logic, authentication, and database integrity.",
        features_id: [
            "Manajemen Database Relasional MySQL",
            "Sistem Otentikasi & Otorisasi Pengguna",
            "Operasi CRUD & Logika Backend",
            "Dashboard Manajemen & Panel Admin",
        ],
        features_en: [
            "Relational MySQL Database Design",
            "User Authentication & Authorization",
            "CRUD Operations & Server Logic",
            "Admin Dashboards & Data Management",
        ],
    },
    {
        id: "maintenance",
        number: "04",
        Icon: Sparkles,
        accent: "bg-[#fef08a]",
        title_id: "Optimasi & Redesain Web",
        title_en: "Web Redesign & Optimization",
        subtitle_id: "Modernisasi & Perbaikan Performa",
        subtitle_en: "Modernization & Performance Boost",
        desc_id:
            "Memperbarui tampilan website yang sudah usang agar lebih modern, memperbaiki bug teknis/tampilan, serta meningkatkan kecepatan loading situs secara optimal.",
        desc_en:
            "Refreshing outdated websites with modern visuals, resolving UI or functional bugs, and fine-tuning speed for a superior visitor experience.",
        features_id: [
            "Refactoring Kode & Pembersihan Bug",
            "Optimasi Kecepatan Loading Website",
            "Modernisasi Tampilan Visual & Layout",
            "Pengujian Lintas Browser & Perangkat",
        ],
        features_en: [
            "Code Refactoring & Bug Squashing",
            "Page Speed & Asset Optimization",
            "Modern UI/UX Visual Refresh",
            "Cross-Browser & Device Testing",
        ],
    },
];

/* ── Service Card Item ── */
function ServiceCard({ service, delay }) {
    const { language } = useLanguage();
    const refCard = useReveal(delay);

    const title = language === "id" ? service.title_id : service.title_en;
    const subtitle = language === "id" ? service.subtitle_id : service.subtitle_en;
    const desc = language === "id" ? service.desc_id : service.desc_en;
    const features = language === "id" ? service.features_id : service.features_en;

    return (
        <article
            ref={refCard}
            className="reveal-scale group neo-card card-neo-soft relative flex flex-col justify-between bg-white p-6 md:p-8 border-[3px] border-black transition-all duration-300"
        >
            <div>
                {/* Top Header: Icon + Number Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                        className={`w-14 h-14 border-[3px] border-black ${service.accent} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                    >
                        <service.Icon size={26} strokeWidth={2.5} className="about-contact-icon text-black" />
                    </div>
                    <span className="font-mono text-xs font-black px-3 py-1 bg-black text-white border-2 border-black tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {service.number}
                    </span>
                </div>

                {/* Subtitle & Title */}
                <div className="mb-4">
                    <span className="inline-block font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        {subtitle}
                    </span>
                    <h3 className="font-sans text-xl md:text-2xl font-black text-black group-hover:text-accent-blue transition-colors duration-200">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <p className="font-mono text-sm text-gray-700 font-medium leading-relaxed mb-6">
                    {desc}
                </p>

                {/* Features Checklist */}
                <div className="border-t-2 border-black/10 pt-5 flex flex-col gap-2.5">
                    <p className="font-mono text-[11px] font-black uppercase text-gray-500 tracking-wider">
                        {language === "id" ? "Termasuk Layanan:" : "What's Included:"}
                    </p>
                    <ul className="flex flex-col gap-2">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 text-xs font-mono font-bold text-black">
                                <div className="w-4 h-4 border-2 border-black bg-accent-yellow flex items-center justify-center shrink-0">
                                    <Check size={11} strokeWidth={3.5} className="text-black" />
                                </div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer / CTA Link */}
            <div className="mt-8 pt-4 border-t-[3px] border-black/10 flex items-center justify-between">
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-black uppercase text-black hover:text-accent-blue transition-colors group/link"
                >
                    <span>{language === "id" ? "Mulai Proyek" : "Get Started"}</span>
                    <ArrowUpRight
                        size={16}
                        strokeWidth={3}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                </a>
                <span className="font-mono text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                    {language === "id" ? "Tersedia" : "Available"}
                </span>
            </div>
        </article>
    );
}

/* ══ Main Services Section ══ */
function Services({ number = "04" }) {
    const { language } = useLanguage();
    const refLabel = useReveal(0);
    const refCta = useReveal(250);

    return (
        <section id="services" className="bg-dots px-4 py-16 md:px-6 md:py-24">
            <div className="mx-auto max-w-5xl">
                {/* ── Section Label ── */}
                <SectionLabel
                    revealRef={refLabel}
                    number={number}
                    title={language === "id" ? "Layanan" : "Services"}
                    count={language === "id" ? `${servicesData.length} Layanan` : `${servicesData.length} Services`}
                    className="mb-14"
                />

                {/* ── Services Grid: 1 col on mobile, 2 cols on md/lg ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            delay={100 + index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;

