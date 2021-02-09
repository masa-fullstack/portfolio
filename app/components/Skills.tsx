import React from 'react'
import { ISkillsFields } from '../@types/generated/contentful'
import Card from './Card'
import ProgressBar from './ProgressBar'

type Props = {
  skills: ISkillsFields[]
}

const Skills = ({ skills }: Props) => {
  // console.log('Skills rendering')
  return (
    <Card title="SKILLS">
      <div className="grid grid-cols-2 grid-flow-row items-center">
        {skills.map((skill, idx) => (
          <React.Fragment key={idx}>
            <div className="text-base">{skill.title}</div>
            <ProgressBar
              key={idx}
              bgcolor="bg-blue-500"
              completed={skill.level}
              label=""
            />
          </React.Fragment>
        ))}
      </div>
    </Card>
  )
}

export default Skills
