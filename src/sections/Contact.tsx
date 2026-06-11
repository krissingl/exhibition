import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-sky-400 text-sm mb-2">let&apos;s talk</p>
        <h2 className="text-3xl font-bold mb-4 text-neutral-50">Contact</h2>
        <p className="text-neutral-400 max-w-md mb-8 leading-relaxed">
          Open to interesting opportunities. The best way to reach me is by email.
        </p>
        <div className="flex gap-6 flex-wrap items-center">
          <a
            href={`mailto:${profile.email}`}
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-100 transition-colors text-sm"
          >
            GitHub ↗
          </a>
          {profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-100 transition-colors text-sm"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
