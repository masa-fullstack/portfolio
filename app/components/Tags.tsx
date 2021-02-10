import React from 'react'
import { ITagFields } from '../@types/generated/contentful'
import Card from './Card'
import { Action } from './Portfolios'
import Tag from './Tag'

type Props = {
  tags: ITagFields[]
  portfolioCount: number
  dispatch: React.Dispatch<Action>
  selectedTags: string[]
}

const Tags = ({ tags, portfolioCount, dispatch, selectedTags }: Props) => {
  // console.log('Tags rendering')
  return (
    <Card className="mb-5">
      <div className="mb-3">{`Projects(${portfolioCount})`}</div>
      <div className="flex flex-wrap">
        {tags.map((tag, idx) => (
          <Tag
            key={idx}
            title={tag.title}
            dispatch={dispatch}
            isSelected={selectedTags.includes(tag.title)}
          />
        ))}
      </div>
    </Card>
  )
}

export default React.memo(Tags)
