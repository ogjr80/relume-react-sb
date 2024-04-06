"use client";

import clsx from "clsx";
import { useState } from "react";
import { SolidChevronDown, Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";

type LinkProps = {
  title: string;
  url: string;
};

type MenuLinkProps = LinkProps & {
  subLinks?: LinkProps[];
};

type Props = {
  logo: ImageProps;
  links: MenuLinkProps[];
  buttons: ButtonProps[];
};

export type Navbar1Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Navbar1 = (props: Navbar1Props) => {
  const { logo, links, buttons } = {
    ...Navbar1Defaults,
    ...props,
  } as Props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-6 my-[3px] bg-black transition ease-in-out transform duration-300 lg:hidden`;
  return (
    <nav className="flex h-auto w-full items-center border-b border-border bg-white lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto h-full w-full items-center justify-between lg:flex">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <img src={logo.src} alt={logo.alt} />
          <button
            className="group -mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "translate-y-2 -rotate-45")}
            />
            <div className={clsx(genericHamburgerLine, mobileMenuOpen && "opacity-0")} />
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "-translate-y-2 rotate-45")}
            />
          </button>
        </div>
        <ul
          className={clsx(
            "h-dvh px-[5%] pt-4 lg:flex lg:h-auto lg:items-center lg:px-0 lg:pt-0",
            mobileMenuOpen ? "block" : "hidden",
          )}
        >
          {links.map((link, index) => (
            <li key={`${link.title}-${index}`}>
              {link.subLinks && link.subLinks.length > 0 ? (
                <NavItemDropdown subLinks={link.subLinks} title={link.title} />
              ) : (
                <a
                  href={link.url}
                  className="relative mx-auto block py-3 text-left text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 lg:px-4 lg:py-2 lg:text-base"
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            {buttons.map((button, index) => (
              <Button
                key={`${button.title}-${index}
              `}
                className="w-full"
                variant={button.variant}
                size={button.size}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

const NavItemDropdown = ({ title, subLinks }: { title: string; subLinks: LinkProps[] }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="group">
      <button
        className="flex w-full items-center justify-between py-3 text-left text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <SolidChevronDown
          className={clsx("size-4 transition duration-300 lg:ml-2 lg:group-hover:rotate-180", {
            "rotate-180": dropdownOpen,
          })}
        />
      </button>

      <ul
        className={clsx(
          "border-border bg-white transition-all duration-300 lg:absolute lg:h-auto lg:border lg:p-2 lg:group-hover:block lg:group-hover:opacity-100 lg:group-hover:animate-in lg:group-hover:slide-in-from-bottom-1/2",
          {
            block: dropdownOpen,
            hidden: !dropdownOpen,
          },
        )}
      >
        {subLinks.map((subLink, index) => (
          <li
            key={`${subLink.title}-${index}`}
            className="relative mx-auto whitespace-nowrap py-3 pl-[5%] text-left align-top text-md lg:px-4 lg:py-2 lg:text-base"
          >
            <a
              href={subLink.url}
              className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2"
            >
              {subLink.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Navbar1Defaults: Navbar1Props = {
  logo: {
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  links: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    { title: "Link Three", url: "#" },
    {
      title: "Link Four",
      url: "#",
      subLinks: [
        { title: "Link Five", url: "#" },
        { title: "Link Six", url: "#" },
        { title: "Link Seven", url: "#" },
      ],
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      variant: "primary",
      size: "sm",
    },
  ],
};
