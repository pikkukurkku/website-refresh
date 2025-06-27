import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Using react-icons

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title?: string;
  imageSrc?: string; // ← new
  imageAlt?: string; // ← optional alt tag
  links: FooterLink[];
}


interface FooterProps {
  brandName?: string;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  copyrightText?: string;
  bottomLinks?: FooterLink[];
}

const defaultSections: FooterSection[] = [
  {
    imageSrc: "/Seitwerk_uffing.png",
    imageAlt: "Seitwerk Logo",
    links: [
      { label: "Seitwerk GmbH", href: "#" },
      { label: "Sonnensteinstraße 1", href: "#" },
      { label: "82449 Uffing am Staffelsee", href: "#" },
    ],
  },
  {
    imageSrc: "/Radio_Oberland.png",
    imageAlt: "Radio Oberland Logo",
    links: [
      { label: "Radio Oberland", href: "#" },
      { label: "Obermarkt 15", href: "#" },
      { label: "82418 Murnau", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = {
  instagram: "https://instagram.com/seitwerk",
  facebook: "https://facebook.com/seitwerk",
  twitter: "https://x.com/seitwerk",
  linkedin: "https://www.linkedin.com/company/seitwerk-gmbh/posts/?feedView=all",
};

const defaultBottomLinks: FooterLink[] = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
  { label: "Stellenangebote", href: "#" },
];

export default function Footer({
  brandName = "SEITWERK",
  description = "Seitwerk bietet seit 2004 als inhabergeführtes Unternehmen das ganze Spektrum der Neuen Medien unter einem Dach. Unsere Spezialisten liefern von der Konzeption über das Design bis zur Realisierung alles aus einer Hand. Wir beraten, analysieren, entwerfen, programmieren, erstellen Animationen, produzieren Ton- und Videosequenzen im eigenen Studio und vieles mehr.",
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  copyrightText,
  bottomLinks = defaultBottomLinks,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyright = copyrightText || `© ${currentYear} ${brandName}. All rights reserved.`;

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Logo" className="h-[30px] w-auto rounded-xs" />
              <h3 className="text-xl font-bold">{brandName}</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">{description}</p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.instagram && (
                <Button variant="outline" size="icon" asChild>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.facebook && (
                <Button variant="outline" size="icon" asChild>
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.twitter && (
                <Button variant="outline" size="icon" asChild>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
                    <FaTwitter className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.linkedin && (
                <Button variant="outline" size="icon" asChild>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Footer Sections */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                {section.imageSrc ? (
  <img
    src={section.imageSrc}
    alt={section.imageAlt || ""}
    className="h-14 mb-4"
  />
) : (
  <h4 className="font-semibold mb-4">{section.title}</h4>
)}

<div className="text-muted-foreground text-sm leading-snug">
  {section.links.map((link, linkIndex) => (
    <div key={linkIndex}>
      {link.href && link.href !== "#" ? (
        <a href={link.href} className="hover:text-foreground transition-colors">
          {link.label}
        </a>
      ) : (
        <span>{link.label}</span>
      )}
    </div>
  ))}
</div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 text-sm text-muted-foreground">
          <p>{copyright}</p>
          <div className="flex gap-6">
            {bottomLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}