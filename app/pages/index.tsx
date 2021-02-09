import {
  IExperiencesFields,
  IHobbiesFields,
  IPersonalFields,
  IPortfoliosFields,
  ISkillsFields,
  ISnsFields,
  ITagFields,
} from '../@types/generated/contentful'
import Experiences from '../components/Experiences'
import Hobbies from '../components/Hobbies'
import Layout from '../components/Layout'
import Personal from '../components/Personal'
import Portfolios from '../components/Portfolios'
import Skills from '../components/Skills'
import Sns from '../components/Sns'
import {
  getExperiences,
  getHobbies,
  getPersonal,
  getPortfolios,
  getSkills,
  getSns,
  getTags,
} from '../lib/api'

type Props = {
  personal: IPersonalFields
  skills: ISkillsFields[]
  hobbies: IHobbiesFields[]
  experiences: IExperiencesFields[]
  sns: ISnsFields
  tags: ITagFields[]
  portfolios: IPortfoliosFields[]
}

export const Home = ({
  personal,
  skills,
  hobbies,
  experiences,
  sns,
  tags,
  portfolios,
}: Props): JSX.Element => {
  // console.log('Home rendering')
  return (
    <Layout title="Home">
      <div className="grid grid-cols-5 grid-flow-row gap-8">
        <div className="col-span-5">
          <Personal personal={personal} />
        </div>
        <div className="col-span-5 md:col-span-2">
          <Skills skills={skills} />
        </div>
        <div className="col-span-5 md:col-span-3 md:row-span-2">
          <Sns sns={sns} />
        </div>
        <div className="col-span-5 md:col-span-2 md:row-span-3">
          <Hobbies hobbies={hobbies} />
        </div>
        <div className="col-span-5 md:col-span-3">
          <Experiences experiences={experiences} />
        </div>
        <div className="col-span-5">
          <Portfolios tags={tags} portfolios={portfolios} />
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
  const tags = await getTags()
  const portfolios = await getPortfolios()

  return {
    props: { personal, skills, hobbies, experiences, sns, tags, portfolios },
  }
}
export default Home
