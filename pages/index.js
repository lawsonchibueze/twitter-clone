import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'

export default function Home({ newsResults, randomUsers }) {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex min-h-screen  mx-auto '>
        {/* Sidebar*/}
        <Sidebar />

        {/* Feeds */}
        <Feed />

        {/* Widgets */}
        <Widget
          newsResults={newsResults.articles}
          randomUsers={randomUsers.results}
        />

        {/* Modal */}
      </main>
    </div>
  )
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/usa.json

export async function getServerSideProps() {
  const newsResults = await fetch(
    'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json'
  ).then((res) => res.json())

  // Who to follow section

  const randomUsers = await fetch(
    'https://randomuser.me/api/?results=30&inc=name,login,picture'
  ).then((res) => res.json())
  return {
    props: {
      newsResults,
      randomUsers,
    },
  }
}
