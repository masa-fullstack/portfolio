import React, { useContext } from 'react'
import { ITagFields } from '../@types/generated/contentful'
import Card from './Card'
import { PortfolioContext } from './Portfolios'
import Tag from './Tag'

type Props = {
  tags: ITagFields[]
}

const Tags = ({ tags }: Props) => {
  // console.log('Tags rendering')
  const portofolioContext = useContext(PortfolioContext)
  return (
    <Card className="mb-5">
      <div className="mb-3">{`Projects(${portofolioContext.state.projectCount})`}</div>
      <div className="flex flex-wrap">
        {tags.map((tag, idx) => (
          <Tag key={idx} title={tag.title} />
        ))}
      </div>
    </Card>
  )
}

export default React.memo(Tags)
