import React from 'react'
import { IHobbiesFields } from '../@types/generated/contentful'
import Card from './Card'

type Props = {
  hobbies: IHobbiesFields[]
}

const Hobbies = ({ hobbies }: Props) => {
  // console.log('Hobbies rendering')
  return (
    <Card title="Hobbies">
      <div className="grid grid-cols-1 grid-flow-row">
        {hobbies.map((hobby, idx) => (
          <React.Fragment key={idx}>
            <div className="w-full pb-32 relative mb-3">
              <img
                className="rounded-xl object-cover absolute w-full h-full"
                src={`https:${hobby.thumbnail.fields.file.url}`}
              />
            </div>
            <div className="font-bold text-lg">{hobby.title}</div>
            <div className="text-gray-500 text-base mb-5">{hobby.body}</div>
          </React.Fragment>
        ))}
      </div>
    </Card>
  )
}

export default Hobbies
