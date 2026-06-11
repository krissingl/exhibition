import { profile } from '../data/profile'

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current shrink-0" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const githubHandle = profile.githubUrl.split('/').pop() ?? 'GitHub'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-emerald-400 text-sm mb-2">let&apos;s talk</p>
        <h2 className="text-3xl font-bold mb-4 text-neutral-50">Contact</h2>
        <p className="text-neutral-400 max-w-md mb-10 leading-relaxed">
          Open to interesting opportunities. Find me on GitHub or LinkedIn.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-neutral-900 border border-neutral-700 hover:border-emerald-700 rounded-lg transition-colors duration-150 group min-w-48"
          >
            <span className="text-neutral-400 group-hover:text-emerald-400 transition-colors">
              <GitHubIcon />
            </span>
            <div>
              <div className="text-sm font-semibold text-neutral-100">GitHub</div>
              <div className="text-xs text-neutral-500 font-mono">@{githubHandle}</div>
            </div>
            <span className="ml-auto text-neutral-600 group-hover:text-emerald-400 transition-colors">
              <ExternalLinkIcon />
            </span>
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-neutral-900 border border-neutral-700 hover:border-emerald-700 rounded-lg transition-colors duration-150 group min-w-48"
          >
            <span className="text-neutral-400 group-hover:text-emerald-400 transition-colors">
              <LinkedInIcon />
            </span>
            <div>
              <div className="text-sm font-semibold text-neutral-100">LinkedIn</div>
              <div className="text-xs text-neutral-500">Krista Singleton</div>
            </div>
            <span className="ml-auto text-neutral-600 group-hover:text-emerald-400 transition-colors">
              <ExternalLinkIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
