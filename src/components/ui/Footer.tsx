"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  lines: string[];
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

interface SectionType {
  lines: string[];
  imageAlt: string;
  imageSrc: string;
  id: string;
  title: string;
  // other properties
}

export default function Footer({
  brandName,
  description,
  sections,
  socialLinks,
  copyrightText,
  bottomLinks,
}: FooterProps) {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  // Debug translations
  console.log({
    locale: t('brandName'), // Should log "SEITWERK"
    description: t('description'), // Should log German description if locale is 'de'
    copyright: t('copyrightText', { currentYear }), // Should log German copyright if locale is 'de'
  });

  // Use provided props or fall back to translations
  const finalBrandName = brandName || t("brandName");
  const finalDescription = description || t("description");
  const finalSections = sections || t.raw("sections");
  const finalSocialLinks = socialLinks || t.raw("socialLinks");
  const finalBottomLinks = bottomLinks || t.raw("bottomLinks");
  const finalCopyright = copyrightText || t("copyrightText", { currentYear });

  return (
    <footer className="bg-background">
      <div className="container mx-auto py-14">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="min-h-[56px] flex items-start mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-[40px] w-auto rounded-xs"
              />
              <h3 className="text-xl font-bold ml-2">{finalBrandName}</h3>
            </div>
            <div className="text-muted-foreground text-base leading-relaxed">
              <p>{finalDescription}</p>
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {finalSocialLinks.instagram && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={finalSocialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {finalSocialLinks.facebook && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={finalSocialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {finalSocialLinks.twitter && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={finalSocialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {finalSocialLinks.linkedin && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={finalSocialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Footer Sections */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {finalSections.map((section: SectionType, index: number) => (
              <div key={index} className="flex flex-col text-left">
                {section.imageSrc ? (
                  <div className="min-h-[56px] flex items-start mb-4">
                    <img
                      src={section.imageSrc}
                      alt={section.imageAlt || ""}
                      className="h-14 w-auto rounded-xs"
                    />
                  </div>
                ) : (
                  <h4 className="font-semibold mb-4">{section.title}</h4>
                )}
                <div className="text-muted-foreground text-base leading-relaxed space-y-1">
                  {section.lines.map((line: string, lineIndex: number) => {
                    const isEmail = line.toLowerCase().includes("email:");
                    const isPhone = line.toLowerCase().includes("telefon:") || line.toLowerCase().includes("phone:");

                    if (isEmail) {
                      const email = line.split(":")[1]?.trim();
                      return (
                        <div key={lineIndex}>
                          {t("labels.email")}:{" "}
                          <a href={`mailto:${email}`} className="hover:underline text-foreground">
                            {email}
                          </a>
                        </div>
                      );
                    }

                    if (isPhone) {
                      const phone = line.split(":")[1]?.trim();
                      const telHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
                      return (
                        <div key={lineIndex}>
                          {t("labels.phone")}:{" "}
                          <a
                            href={telHref}
                            className="whitespace-nowrap hover:underline text-foreground"
                          >
                            {phone}
                          </a>
                        </div>
                      );
                    }

                    return <div key={lineIndex}>{line}</div>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-sm text-muted-foreground">
          <div className="lg:col-span-5">
            <p>{finalCopyright}</p>
          </div>
          <div className="hidden lg:block lg:col-span-1" />
          <div className="lg:col-span-6">
            <div className="flex gap-6">
              {finalBottomLinks.map((link: FooterLink, index: number) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}