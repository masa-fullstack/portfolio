import { IPersonalFields } from '../@types/generated/contentful'
import Layout from '../components/Layout'
import Personal from '../components/Personal'
import { getPersonal } from '../lib/api'

// todo:typesにまとめる
type Props = {
  personal: IPersonalFields
}

export const Home = ({ personal }: Props): JSX.Element => {
  return (
    <Layout title="Home">
      <Personal personal={personal} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const personal = await getPersonal()

  return {
    props: { personal },
  }
}
export default Home
