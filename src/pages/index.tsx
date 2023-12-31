import useSWR from 'swr'
import Head from 'next/head'
import type { NextPage } from 'next'
import { client } from '../services/prismicClient'
import CardBlog from '../components/Card/CardBlog'

const Home: NextPage = () => {
  const { data: bannersHome } = useSWR('getBlogHome', () =>
    client.getAllByType('blog')
  )

  return (
    <div>
      <Head>
        <title>Next Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center flex-col gap-5 pt-4 h-screen">
        <section className=" max-w-6xl my-40">
          <h1 className='mx-auto text-center text-4xl font-bold text-[#03312b]'>Blog</h1>
          <div className="mx-auto grid  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {bannersHome && bannersHome.map((item: any, index: number) => (
              <CardBlog
                key={index}
                id={item.id}
                banner={item.data.capa.url} // Acessando a propriedade "url" do objeto "capa"
                titulo={item.data.titulo[0].text} // Acessando o texto dentro do array "titulo"
                descricao={item.data.descricao[0].text} // Acessando o texto dentro do array "descricao"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
