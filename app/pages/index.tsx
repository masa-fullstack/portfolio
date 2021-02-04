import {
  IExperiencesFields,
  IHobbiesFields,
  IPersonalFields,
  ISkillsFields,
  ISnsFields,
} from '../@types/generated/contentful'
import Experiences from '../components/Experiences'
import Hobbies from '../components/Hobbies'
import Layout from '../components/Layout'
import Personal from '../components/Personal'
import Skills from '../components/Skills'
import Sns from '../components/Sns'
import {
  getExperiences,
  getHobbies,
  getPersonal,
  getSkills,
  getSns,
} from '../lib/api'

// todo:typesにまとめる
type Props = {
  personal: IPersonalFields
  skills: ISkillsFields[]
  hobbies: IHobbiesFields[]
  experiences: IExperiencesFields[]
  sns: ISnsFields
}

export const Home = ({
  personal,
  skills,
  hobbies,
  experiences,
  sns,
}: Props): JSX.Element => {
  return (
    // todo:レスポンシブで縦一列になるように
    <Layout title="Home">
      <div className="grid grid-cols-5 grid-flow-row gap-8">
        <div className="col-span-5">
          <Personal personal={personal} />
        </div>
        <div className="col-span-2">
          <Skills skills={skills} />
        </div>
        <div className="col-span-3 row-span-2">
          <Sns sns={sns} />
        </div>
        <div className="col-span-2 row-span-3">
          <Hobbies hobbies={hobbies} />
        </div>
        <div className="col-span-3">
          <Experiences experiences={experiences} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const personal = await getPersonal()
  const skills = await getSkills()
  const hobbies = await getHobbies()
  const experiences = await getExperiences()
  const sns = await getSns()

  return {
    props: { personal, skills, hobbies, experiences, sns },
  }
}
export default Home
