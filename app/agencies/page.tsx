import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_AGENCIES } from '@/lib/queries'
import { AgenciesData } from '@/lib/types'
import Header from '../components/Header'
import AgencyCard from '../components/AgencyCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Agencies | U.S. Department of Innovation',
  description: 'Browse agencies and offices within the U.S. Department of Innovation.',
}

async function getAgencies() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<AgenciesData>({
      query: GET_AGENCIES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeAgencies?.nodes || []
  } catch (error) {
    console.error('Error fetching agencies:', error)
    return []
  }
}

export default async function AgenciesPage() {
  const items = await getAgencies()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Agencies & Offices
            </h1>
            <p className="text-lg text-primary-200">
              Explore the agencies and offices of the U.S. Department of Innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Agencies Yet</h2>
              <p className="text-gray-500">
                Agencies will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <AgencyCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
