export interface Project {
  name: string
  description: string
  techStack: string[]
  repoUrl?: string
  liveUrl?: string
  type: 'personal' | 'volunteer'
}

export interface Profile {
  name: string
  title: string
  bio: string
  githubUrl: string
  linkedinUrl: string
}
