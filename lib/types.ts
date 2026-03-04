// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Agency Division
export interface DrupalAgency extends DrupalNode {
  headOfficial?: string
  phone?: string
  email?: string
  websiteUrl?: string
  agencyType?: DrupalTerm[]
}

export interface AgenciesData {
  nodeAgencies: {
    nodes: DrupalAgency[]
  }
}

// Agency Official
export interface DrupalOfficial extends DrupalNode {
  position?: string
  division?: DrupalTerm[]
  email?: string
  phone?: string
  office?: string
  photo?: DrupalImage
}

export interface OfficialsData {
  nodeOfficials: {
    nodes: DrupalOfficial[]
  }
}

// Federal Program
export interface DrupalProgram extends DrupalNode {
  division?: DrupalTerm[]
  eligibility?: {
    processed: string
  }
  fundingAmount?: string
  deadline?: {
    timestamp: number
  }
  programCategory?: DrupalTerm[]
}

export interface ProgramsData {
  nodePrograms: {
    nodes: DrupalProgram[]
  }
}

// Press Release
export interface DrupalPressRelease extends DrupalNode {
  releaseDate?: {
    timestamp: number
  }
  contactName?: string
  contactEmail?: string
  category?: DrupalTerm[]
}

export interface PressReleasesData {
  nodePressReleases: {
    nodes: DrupalPressRelease[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
