import React from 'react'
import { ITagFields } from '../@types/generated/contentful'
import Card from './Card'
import Tag from './Tag'

// todo:typesにまとめる
type Props = {
  tags: ITagFields[]
  countProject: number
}

const Tags = ({ tags, countProject }: Props) => {
  return (
    <Card className="mb-5">
      <div className="mb-3">{`Projects(${countProject})`}</div>
      <div className="flex">
        {tags.map((tag, idx) => (
          <Tag key={idx} title={tag.title} />
        ))}
      </div>
    </Card>
  )
}

export default Tags
