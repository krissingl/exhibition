export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  name: string
  description: string
  techStack: string[]
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
