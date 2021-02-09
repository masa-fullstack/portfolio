import React from 'react'
import { IPortfoliosFields } from '../@types/generated/contentful'
import Card from './Card'

type Props = {
  portfolio: IPortfoliosFields
}

const Portfolio = ({ portfolio }: Props) => {
  // console.log('Portfolio rendering')
  return (
    <div>
      <Card className="flex flex-col">
        <div className="w-full pb-32 relative mb-3">
          <img
            className="rounded-xl object-cover absolute w-full h-full"
            src={`https:${portfolio.thumbnail.fields.file.url}`}
          />
        </div>
        <div className="text-xs">
          {portfolio.tags.map((tag) => `#${tag.fields.title} `)}
        </div>
        <div className="font-bold text-lg my-3">{portfolio.title}</div>
        <div className="text-gray-500 text-sm mb-8">{portfolio.content}</div>
        <div className="text-center mt-auto mb-5">
          <a
            className="text-base no-underline bg-blue-500 text-white border-2 border-blue-500 rounded-xl py-2 px-5 mr-2"
            href={portfolio.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            demo
          </a>
          <a
            className="text-base no-underline bg-white text-blue-500 border-2 border-blue-500 rounded-xl py-2 px-5 ml-2"
            href={portfolio.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </a>
        </div>
      </Card>
    </div>
  )
}

export default React.memo(Portfolio)
