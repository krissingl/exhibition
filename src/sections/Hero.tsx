import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-14">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="font-mono text-emerald-400 text-sm mb-4">hello, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-neutral-50">
          {profile.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-neutral-400 font-light mb-6">
          {profile.title}
        </h2>
        <p className="text-neutral-300 max-w-xl leading-relaxed mb-10 text-lg">
          {profile.bio}
        </p>
        <div className="flex gap-3">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded transition-colors text-sm"
          >
            GitHub
          </a>
          {profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-neutral-700 hover:border-emerald-600 text-neutral-300 hover:text-emerald-400 rounded transition-colors text-sm"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
