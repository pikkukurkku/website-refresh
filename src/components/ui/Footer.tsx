import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
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
    title: "Product",
    links: [
      { label: "Overview", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Marketplace", href: "#" },
      { label: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help", href: "#" },
      { label: "Sales", href: "#" },
      { label: "Advertise", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

const defaultBottomLinks: FooterLink[] = [
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer({
  brandName = "Shadcnblocks.com",
  description = "A collection of components for your startup business or side project.",
  sections = defaultSections,
  socialLinks = {},
  copyrightText,
  bottomLinks = defaultBottomLinks,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyright = copyrightText || `© ${currentYear} ${brandName}. All rights reserved.`;

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-sm" />
              </div>
              <h3 className="text-xl font-bold">{brandName}</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.instagram && (
                <Button variant="outline" size="icon" asChild>
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.facebook && (
                <Button variant="outline" size="icon" asChild>
                  <a 
                    href={socialLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.twitter && (
                <Button variant="outline" size="icon" asChild>
                  <a 
                    href={socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.linkedin && (
                <Button variant="outline" size="icon" asChild>
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {copyright}
          </p>
          
          {bottomLinks.length > 0 && (
            <div className="flex gap-6">
              {bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}