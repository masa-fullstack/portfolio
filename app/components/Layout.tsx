import Head from 'next/head'

const Layout = ({ children, title = 'Default title' }) => {
  return (
    <div className="flex justify-center item-center flex-col min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="font-montserrat container mx-auto lg:px-40 mt-5 flex flex-1 justify-center item-center w-screen flex-col mb-10">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center item-center text-gray-400 mb-10">
        <div className="w-2/6 border-t text-center pt-5">
          masa @ DevChallenges.io
        </div>
      </footer>
    </div>
  )
}

export default Layout
