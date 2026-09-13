import logoText from "../assets/logo-text.png";

interface FooterLink {
  label: string;
  href: string;
}

interface LinkGroup {
  title: string;
  links: FooterLink[];
}

const LINK_GROUPS: LinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "Twitter", href: "https://twitter.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand block */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#home" className="flex items-center">
  <img src={logoText} alt="Dev Stack logo" className="h-8 w-auto" />
</a>
          <p className="mt-4 max-w-xs text-sm text-slate-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm font-medium text-slate-500">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Link groups */}
        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">{group.title} </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-slate-500">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-slate-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row lg:px-8">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
