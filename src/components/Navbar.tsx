const links = [
  { label: 'About', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="font-mono text-emerald-400 font-semibold tracking-tight text-sm">
          exhibition
        </a>
        <ul className="flex gap-6">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
