import { ArrowUp, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  {
    name: "GitHub",
    icon: "bi bi-github",
    href: "https://github.com/ridhoadha25",
    color: "hover:bg-white hover:text-black hover:shadow-[3px_3px_0px_0px_#ffe500]",
  },
  {
    name: "LinkedIn",
    icon: "bi bi-linkedin",
    href: "https://www.linkedin.com/in/m-ridho-adha-06b0502b1/",
    color: "hover:bg-[#0A66C2] hover:text-white hover:shadow-[3px_3px_0px_0px_#ffffff]",
  },
  {
    name: "WhatsApp",
    icon: "bi bi-whatsapp",
    href: "https://wa.me/qr/R4OEZRTCQGJXE1",
    color: "hover:bg-[#25D366] hover:text-black hover:shadow-[3px_3px_0px_0px_#ffffff]",
  },
  {
    name: "Email",
    icon: "bi bi-envelope-fill",
    href: "mailto:mridhoadha25@gmail.com",
    color: "hover:bg-accent-yellow hover:text-black hover:shadow-[3px_3px_0px_0px_#ffffff]",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer border-t-[3px] border-black bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        {/* ── Main Footer Content ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* ── Brand & Bio Column ── */}
          <div className="flex flex-col items-start max-w-md">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="group flex items-center gap-2.5 cursor-pointer"
              aria-label="Back to top"
            >
              <span className="flex h-10 w-10 items-center justify-center border-2 border-black bg-accent-yellow font-mono text-base font-black text-black shadow-[2.5px_2.5px_0px_0px_rgba(255,255,255,0.4)] group-hover:-translate-y-0.5 group-hover:shadow-[3.5px_3.5px_0px_0px_rgba(255,255,255,0.8)] transition-all duration-200">
                MR
              </span>
              <span className="font-sans text-xl font-black uppercase tracking-wider text-white">
                Ridho<span className="text-accent-yellow">.dev</span>
              </span>
            </a>

            <p className="mt-4 font-mono text-xs md:text-sm text-gray-400 font-medium leading-relaxed">
              {language === "id"
                ? "Web Developer & mahasiswa Sistem Informasi di Institut Teknologi Rokan Hilir. Berfokus membangun produk digital yang intuitif, cepat, dan terstruktur."
                : "Web Developer & Information Systems student at Institut Teknologi Rokan Hilir. Focused on building intuitive, fast, and structured digital products."}
            </p>

            {/* Availability Pill */}
            <div className="mt-5 inline-flex items-center gap-2.5 border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-xs font-semibold text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>
                {language === "id" ? "Terbuka untuk Peluang Proyek" : "Open to Project Opportunities"}
              </span>
            </div>
          </div>

          {/* ── Socials & Back-to-Top Column ── */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow mb-3">
              {language === "id" ? "Terhubung" : "Connect"}
            </h4>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className={`flex h-10 w-10 items-center justify-center border-2 border-white/30 bg-white/5 text-white transition-all duration-200 hover:-translate-y-1 hover:border-black ${item.color}`}
                >
                  <i className={`${item.icon} text-lg`} />
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-5 inline-flex items-center gap-2 border-2 border-white/30 bg-white/5 px-3.5 py-2 font-mono text-xs font-black uppercase tracking-wider text-white shadow-[2.5px_2.5px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:border-black hover:bg-accent-yellow hover:text-black hover:shadow-[3.5px_3.5px_0px_0px_#ffffff] transition-all duration-200 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={14} strokeWidth={2.5} />
              <span>{language === "id" ? "Ke Atas" : "Back to Top"}</span>
            </button>
          </div>

        </div>

        {/* ── Divider Line ── */}
        <div className="my-8 border-t border-white/10" />

        {/* ── Bottom Sub-footer ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-mono text-xs text-gray-400 font-medium">
          <p>
            © {currentYear} <span className="font-bold text-white">M. Ridho Adha</span>. {language === "id" ? "Hak cipta dilindungi." : "All rights reserved."}
          </p>

          <p className="flex items-center justify-center gap-1.5 text-gray-400">
            <span>{language === "id" ? "Dibuat dengan" : "Built with"}</span>
            <Heart size={14} strokeWidth={2.5} className="text-red-500 fill-red-500 inline" />
            <span>&amp; React + Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
