import React from 'react'
import { IPortfoliosFields } from '../@types/generated/contentful'
import Button from './Button'
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
          <Button buttonType="BLUE" title="demo" hrefURL={portfolio.demoUrl} />
          <Button buttonType="WHITE" title="code" hrefURL={portfolio.codeUrl} />
        </div>
      </Card>
    </div>
  )
}

export default React.memo(Portfolio)
