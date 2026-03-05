'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import {
  Award,
  FlaskConical,
  BookOpen,
  BarChart3,
  Briefcase,
  Phone,
  Building2,
  Globe,
  Shield,
  Lightbulb,
  Users,
  FileText,
  ArrowRight,
  Megaphone,
  Info,
} from 'lucide-react'
import Image from 'next/image'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const quickLinks = [
  { title: 'Programs & Grants', description: 'Find federal programs, grants, and funding opportunities', icon: Award, href: '/programs', color: 'bg-primary-600' },
  { title: 'Research', description: 'Access federal research, reports, and scientific findings', icon: FlaskConical, href: '/agencies', color: 'bg-primary-700' },
  { title: 'Publications', description: 'Browse official publications and policy documents', icon: BookOpen, href: '/press', color: 'bg-primary-800' },
  { title: 'Data & Statistics', description: 'Explore government data, datasets, and statistics', icon: BarChart3, href: '/agencies', color: 'bg-accent-600' },
  { title: 'Careers', description: 'Search federal job openings and career opportunities', icon: Briefcase, href: '/agencies', color: 'bg-primary-900' },
  { title: 'Contact', description: 'Reach out to department offices and representatives', icon: Phone, href: '/contact', color: 'bg-primary-600' },
]

const departmentServices = [
  { title: 'Office of Innovation', description: 'Leading federal technology and innovation policy', icon: Lightbulb },
  { title: 'Bureau of Research', description: 'Conducting and funding scientific research', icon: FlaskConical },
  { title: 'International Affairs', description: 'Global partnerships and international cooperation', icon: Globe },
  { title: 'National Security', description: 'Technology security and critical infrastructure', icon: Shield },
  { title: 'Workforce Development', description: 'Training programs and workforce initiatives', icon: Users },
  { title: 'Regulatory Affairs', description: 'Federal regulations and compliance guidance', icon: FileText },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80&fit=crop', alt: 'Federal government building', caption: 'Department Headquarters' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&fit=crop', alt: 'Government meeting room', caption: 'Congressional Briefing' },
  { src: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80&fit=crop', alt: 'Research laboratory', caption: 'Federal Research Lab' },
  { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80&fit=crop', alt: 'Government office building', caption: 'Regional Office' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Alert / Announcement Banner */}
      <div className="bg-accent-50 border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Megaphone className="w-5 h-5 text-accent-700" />
            </div>
            <p className="text-sm text-accent-900 font-medium">
              <span className="font-bold">Federal Notice:</span> New grant application period opens March 15.{' '}
              <a href="/programs" className="underline hover:text-accent-700">View programs and eligibility</a>
            </p>
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Quick Links Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Quick Links</h2>
            <p className="text-gray-600 mt-1">Access key department resources and services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="h-1 bg-primary-600" />
                <div className="p-6 flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${link.color} rounded-lg flex items-center justify-center`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{link.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Department Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Department Offices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the offices and bureaus within the U.S. Department of Innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-1 bg-primary-600" />
                <div className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/agencies"
              className="inline-flex items-center px-6 py-3 bg-primary-700 text-white rounded hover:bg-primary-800 transition-colors font-bold"
            >
              View All Agencies
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Department</h2>
            <p className="text-gray-600">Inside the U.S. Department of Innovation</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.caption} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Official Multi-Column Footer */}
      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-800" />
                </div>
                <span className="text-lg font-bold text-white">U.S. Dept. of Innovation</span>
              </div>
              <p className="text-primary-300 text-sm mb-4">
                An official website of the United States Government. The Department of Innovation drives technological advancement and strengthens America&apos;s global competitiveness.
              </p>
              <div className="text-primary-400 text-sm space-y-1">
                <p>1800 Innovation Drive, Washington, DC 20500</p>
                <p>(202) 555-0100</p>
                <p>info@doi.gov</p>
              </div>
            </div>

            {/* Department */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Department</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/agencies" className="hover:text-accent-400 transition-colors">Agencies & Offices</a></li>
                <li><a href="/officials" className="hover:text-accent-400 transition-colors">Leadership</a></li>
                <li><a href="/press" className="hover:text-accent-400 transition-colors">Press Releases</a></li>
                <li><a href="/programs" className="hover:text-accent-400 transition-colors">Programs & Grants</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Resources</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/programs" className="hover:text-accent-400 transition-colors">All Programs</a></li>
                <li><a href="/agencies" className="hover:text-accent-400 transition-colors">Research</a></li>
                <li><a href="/press" className="hover:text-accent-400 transition-colors">Publications</a></li>
                <li><a href="/agencies" className="hover:text-accent-400 transition-colors">Data & Statistics</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Connect</h4>
              <ul className="space-y-2 text-primary-300 text-sm">
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Contact Us</a></li>
                <li><a href="/agencies" className="hover:text-accent-400 transition-colors">FOIA</a></li>
                <li><a href="/press" className="hover:text-accent-400 transition-colors">Newsroom</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar with accessibility statement */}
        <div className="border-t border-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-400">
              <p>&copy; {new Date().getFullYear()} U.S. Department of Innovation. All rights reserved.</p>
              <div className="flex items-center gap-1">
                <Info className="w-3 h-3" />
                <span>An official website of the United States Government</span>
              </div>
              <div className="flex gap-4">
                <a href="/contact" className="hover:text-accent-400 transition-colors">Accessibility</a>
                <a href="/contact" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
                <a href="/contact" className="hover:text-accent-400 transition-colors">Terms of Use</a>
                <a href="/programs" className="hover:text-accent-400 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
