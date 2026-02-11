export interface Region {
  name: string
  description: string
  href: string
}

export interface SubProduct {
  name: string
  description: string
  href: string
}

export interface Venture {
  name: string
  description: string
  type: 'brand' | 'platform'
  regions?: Region[]
  subProducts?: SubProduct[]
  href?: string
}

export const ventures: Venture[] = [
  {
    name: 'Dwell',
    description: 'AI-powered property & leasing platform',
    type: 'brand',
    href: '/dwell',
    regions: [
      { name: 'USA', description: 'Multifamily leasing ops', href: '/dwell/us' },
      { name: 'India', description: 'Owner-first property network', href: '/dwell/in' }
    ]
  },
  {
    name: 'Gulgul',
    description: 'Ethical food & logistics ecosystem',
    type: 'brand'
  },
  {
    name: 'Builder Studio',
    description: 'Construction & contractor management platform',
    type: 'brand'
  },
  {
    name: 'FreedomLabs',
    description: 'Internal execution & engineering platform',
    type: 'platform',
    href: '/freedomlabs',
    subProducts: [
      {
        name: 'JIRA Platform',
        description: 'Internal issue tracking & delivery system',
        href: '/freedomlabs/jira'
      },
      {
        name: 'Dev & Infra Tooling',
        description: 'CI/CD, automation, platform services',
        href: '/freedomlabs/platform'
      }
    ]
  }
]
