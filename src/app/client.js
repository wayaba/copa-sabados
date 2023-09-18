'use client'

import Table from './components/Table'

export default function HomeClient({ positions }) {
  return (
    <div className="flex flex-col md:flex-row">
      <section className="w-full">
        <div className="flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div className="flex flex-wrap">
            <div className="w-full p-6">
              <Table positions={positions}></Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
