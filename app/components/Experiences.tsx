import React from 'react'
import { IExperiencesFields } from '../@types/generated/contentful'
import Card from './Card'
import { format } from 'date-fns'

// todo:typesにまとめる
type Props = {
  experiences: IExperiencesFields[]
}

const Experiences = ({ experiences }: Props) => {
  return (
    <Card title="Experiences">
      <div className="grid grid-cols-4 grid-flow-row gap-4">
        {experiences.map((experience, idx) => (
          <React.Fragment key={idx}>
            <div className="w-full pb-20 relative ml-3">
              <img
                className="rounded-xl object-contain absolute w-full h-full"
                src={`https:${experience.thumbnail.fields.file.url}`}
              />
            </div>
            <div className="col-span-3 ml-10 mb-14">
              <div className="text-xs">
                {format(new Date(experience.fromDay.substr(0, 10)), 'MMM yyyy')}
                -
                {experience.toDay !== null
                  ? format(new Date(experience.toDay.substr(0, 10)), 'MMM yyyy')
                  : 'current'}
              </div>
              <div className="font-bold text-lg mb-2">{experience.title}</div>
              <div className="text-gray-500 text-base">
                {experience.position}
              </div>
              <div className="text-gray-500 text-sm mt-5">
                {experience.body}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Card>
  )
}

export default Experiences
