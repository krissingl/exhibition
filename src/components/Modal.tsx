import { useEffect, useState } from 'react'
import type { Project } from '../types'
import Badge from './Badge'

interface ModalProps {
  project: Project
  onClose: () => void
}

export default function Modal({ project, onClose }: ModalProps) {
  const links = project.links ?? []
  const images = project.images ?? []
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) setLightboxIndex(null)
        else onClose()
      }
      if (lightboxIndex === null || images.length < 2) return
      if (e.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, lightboxIndex, images.length])

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-bold text-neutral-50">{project.name}</h2>
              <span
                className={`text-xs px-2 py-0.5 rounded-full border font-mono ${
                  project.type === 'volunteer'
                    ? 'border-teal-700 text-teal-400'
                    : 'border-emerald-800 text-emerald-400'
                }`}
              >
                {project.type}
              </span>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 text-neutral-500 hover:text-neutral-200 transition-colors text-2xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <p className="text-neutral-300 leading-relaxed mb-6">{project.description}</p>

          {images.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {images.map((image, i) => (
                <button
                  key={image.src}
                  onClick={() => setLightboxIndex(i)}
                  className="rounded overflow-hidden border border-neutral-700 hover:border-emerald-600 transition-colors"
                  aria-label={`Enlarge image: ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-20 w-32 object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>

          {links.length > 0 && (
            <div className="flex gap-3 pt-4 border-t border-neutral-800">
              {links.map((link, i) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? 'px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold rounded transition-colors'
                      : 'px-4 py-2 border border-neutral-700 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 text-sm rounded transition-colors'
                  }
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 p-4 bg-neutral-950/95"
          onClick={() => setLightboxIndex(null)}
        >
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-full max-h-[80vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-sm text-neutral-400 text-center max-w-xl">
            {images[lightboxIndex].alt}
          </p>
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-100 transition-colors text-3xl leading-none"
            aria-label="Close image"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
