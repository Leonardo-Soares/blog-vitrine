import useSWR from 'swr'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { client } from '../../services/prismicClient'
import ContentRichText from '../../components/Prismic/ContentRichText'

export default function Page() {
  const router = useRouter()
  const { id } = router.query
  const [postId, setPosId] = useState('')
  const { data: detalhePost } = useSWR('getPostById', () =>
    client.getByID(postId as string)
  )
  const infospost = detalhePost?.data
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      setPosId(id as string)
    }
  }, [id])

  useEffect(() => {
    if (!infospost) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [id, infospost])

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* {infospost &&
            <h2 className="text-base font-semibold leading-7 text-[#d0aa7c]">
              {infospost.categoria}
            </h2>
          } */}

          {infospost &&
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#03312b] sm:text-4xl">
              {infospost.titulo.map((item: any) => (item.text))}
            </p>
          }
          <p className="mt-6 text-sm leading-2 text-[#03312b]/80">
            {infospost && infospost.resumo}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          {infospost &&
            <ContentRichText data={infospost.conteudo} />
          }
        </div>
      </div>
    </div>
  )
}