import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TELEGRAM_CONTACT_URL } from "@/lib/contacts";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакт", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-5 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50">
      <a href="#" className="font-heading text-xl font-bold tracking-tight">
        МАНЧЕСТЕР<span className="text-primary">.</span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a
          href={TELEGRAM_CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Связаться
        </a>
      </nav>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-foreground"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-heading text-foreground"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
