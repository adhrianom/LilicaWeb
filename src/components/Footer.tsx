const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/lilicaempadas" },
  { label: "Facebook", href: "https://facebook.com/lilicaempadas" },
  { label: "WhatsApp", href: "https://wa.me/5511999999999" },
];

function Footer() {
  return (
    <footer className="mt-10 bg-[#fc90a2] py-8 text-white">
      <div className="page-container flex flex-col items-center justify-between gap-5 text-center md:flex-row md:items-end md:text-left">
        <div>
          <h2 className="text-lg font-bold sm:text-xl">Lilica Empadas</h2>
          <p className="mt-1 text-sm text-white/90">
            Feito com carinho para adocar seu dia.
          </p>
        </div>

        <div className="flex max-w-sm flex-wrap items-center justify-center gap-2 md:max-w-none md:justify-start">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-pill bg-white/20 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/30"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+551130301515"
          className="rounded-pill bg-white px-4 py-2 text-sm font-bold text-[#fc90a2] transition hover:scale-105 hover:brightness-95"
        >
          (11) 3030-1515
        </a>
      </div>
    </footer>
  );
}

export default Footer;

