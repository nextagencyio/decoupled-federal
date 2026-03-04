import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Agency Divisions
export const GET_AGENCIES = gql`
  query GetAgencies($first: Int = 20) {
    nodeAgencies(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeAgency {
          body {
            processed
            summary
          }
          headOfficial
          phone
          email
          websiteUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          agencyType {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const GET_AGENCY_BY_PATH = gql`
  query GetAgencyByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAgency {
            id
            title
            path
            body {
              processed
            }
            headOfficial
            phone
            email
            websiteUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            agencyType {
              ... on TermInterface {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`

// Officials
export const GET_OFFICIALS = gql`
  query GetOfficials($first: Int = 50) {
    nodeOfficials(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeOfficial {
          body {
            processed
          }
          position
          division {
            ... on TermInterface {
              id
              name
            }
          }
          email
          phone
          office
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_OFFICIAL_BY_PATH = gql`
  query GetOfficialByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeOfficial {
            id
            title
            path
            body {
              processed
            }
            position
            division {
              ... on TermInterface {
                id
                name
              }
            }
            email
            phone
            office
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Programs
export const GET_PROGRAMS = gql`
  query GetPrograms($first: Int = 20) {
    nodePrograms(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          body {
            processed
            summary
          }
          division {
            ... on TermInterface {
              id
              name
            }
          }
          eligibility {
            processed
          }
          fundingAmount
          deadline {
            timestamp
          }
          programCategory {
            ... on TermInterface {
              id
              name
            }
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_PROGRAM_BY_PATH = gql`
  query GetProgramByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            division {
              ... on TermInterface {
                id
                name
              }
            }
            eligibility {
              processed
            }
            fundingAmount
            deadline {
              timestamp
            }
            programCategory {
              ... on TermInterface {
                id
                name
              }
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Press Releases
export const GET_PRESS_RELEASES = gql`
  query GetPressReleases($first: Int = 20) {
    nodePressReleases(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodePressRelease {
          body {
            processed
            summary
          }
          releaseDate {
            timestamp
          }
          contactName
          contactEmail
          category {
            ... on TermInterface {
              id
              name
            }
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_PRESS_RELEASE_BY_PATH = gql`
  query GetPressReleaseByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePressRelease {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            releaseDate {
              timestamp
            }
            contactName
            contactEmail
            category {
              ... on TermInterface {
                id
                name
              }
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeAgency {
            id
            title
            path
            body {
              processed
            }
            headOfficial
            phone
            email
            websiteUrl
            agencyType {
              ... on TermInterface {
                id
                name
              }
            }
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeOfficial {
            id
            title
            path
            body {
              processed
            }
            position
            division {
              ... on TermInterface {
                id
                name
              }
            }
            email
            phone
            office
            photo {
              url
              alt
              width
              height
            }
          }
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            division {
              ... on TermInterface {
                id
                name
              }
            }
            eligibility {
              processed
            }
            fundingAmount
            deadline {
              timestamp
            }
            programCategory {
              ... on TermInterface {
                id
                name
              }
            }
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodePressRelease {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            releaseDate {
              timestamp
            }
            contactName
            contactEmail
            category {
              ... on TermInterface {
                id
                name
              }
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured programs for homepage
export const GET_FEATURED_PROGRAMS = gql`
  query GetFeaturedPrograms {
    nodePrograms(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          body {
            summary
          }
          fundingAmount
          deadline {
            timestamp
          }
          programCategory {
            ... on TermInterface {
              id
              name
            }
          }
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured press releases for homepage
export const GET_FEATURED_PRESS_RELEASES = gql`
  query GetFeaturedPressReleases {
    nodePressReleases(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodePressRelease {
          body {
            summary
          }
          releaseDate {
            timestamp
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`
