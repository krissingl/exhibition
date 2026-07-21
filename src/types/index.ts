export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  name: string
  description: string
  techStack: string[]
  images?: ProjectImage[]
  links?: [] | [ProjectLink] | [ProjectLink, ProjectLink]
  type: 'personal' | 'volunteer'
}

export interface Profile {
  name: string
  title: string
  bio: string
  githubUrl: string
  linkedinUrl: string
}
