import React from 'react'
import { ITagFields } from '../@types/generated/contentful'
import { SelectedTags } from '../@types/types'
import Card from './Card'
import Tag from './Tag'

type Props = {
  tags: ITagFields[]
  countProject: number
  selectedTags: SelectedTags
  setSelectedTags: React.Dispatch<React.SetStateAction<SelectedTags>>
}

const Tags = ({ tags, countProject, selectedTags, setSelectedTags }: Props) => {
  return (
    <Card className="mb-5">
      <div className="mb-3">{`Projects(${countProject})`}</div>
      <div className="flex">
        {tags.map((tag, idx) => (
          <Tag
            key={idx}
            title={tag.title}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        ))}
      </div>
    </Card>
  )
}

export default Tags
