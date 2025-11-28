import logo from "@/public/assets/logo/svg/13.svg";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-slate-light py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <img src={logo.src} alt="Tacivo" className="h-8 md:h-10" />

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-cloud-medium hover:text-ivory-light transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-cloud-medium hover:text-ivory-light transition-colors">
              Terms
            </a>
            <a href="mailto:hello@tacivo.com" className="text-sm text-cloud-medium hover:text-ivory-light transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-cloud-medium">
            © {new Date().getFullYear()} Tacivo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
