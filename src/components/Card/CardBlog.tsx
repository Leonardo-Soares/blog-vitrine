import React from 'react';
import Image from 'next/image';

interface PropsPost {
  banner: any,
  titulo: any,
  descricao: any,
}

export default function CardBlog({ titulo, descricao,  banner }: PropsPost) {
  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a >
        <div className="relative flex items-end overflow-hidden rounded-xl">
          {banner &&
            <Image width={500} height={300} src={banner.url} alt="Imagem do Blog" />
          }
        </div>

        <div className="mt-1 p-2">
          {titulo &&
            <h2 className="text-slate-700 font-bold mb-2">
              {titulo}
            </h2>
          }

          <p className="text-sm text-slate-600 mt-3">
            {descricao}
          </p>

          <div className="mt-3 flex items-end justify-between">

            <div className="flex items-center space-x-1.5 rounded-lg bg-[#03312b] px-4 py-1.5 text-white duration-100 hover:bg-[#d0aa7c] ">
              <button className="text-sm">Saiba mais</button>
            </div>
          </div>
        </div>
      </a>
    </article>
  )
}