import { ISnsFields } from '../@types/generated/contentful'
import Card from './Card'

type Props = {
  sns: ISnsFields
}

const Sns = ({ sns }: Props) => {
  return (
    <Card title="SNS">
      <div className="grid grid-cols-5 grid-flow-row">
        <div className="col-span-2 pr-5">
          <div className="text-2xl">{sns.title}</div>
        </div>
        <div className="col-span-3 mb-5">
          <div className="w-full pb-52 relative">
            <img
              className="rounded-xl object-cover absolute w-full h-full"
              src={`https:${sns.thumbnail.fields.file.url}`}
            />
          </div>
        </div>
        <div className="col-span-5 mb-5">
          <div className="text-gray-500 text-base">{sns.body}</div>
        </div>
        <div className="col-span-5">
          <a
            className="text-base text-blue-600 no-underline hover:underline"
            href={sns.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sns.url}
          </a>
        </div>
      </div>
    </Card>
  )
}

export default Sns
