import { IPersonalFields } from '../@types/generated/contentful'
import Card from './Card'

type Props = {
  personal: IPersonalFields
}

const Personal = ({ personal }: Props) => {
  return (
    <Card>
      <div className="grid grid-cols-5 grid-rows-3 grid-flow-row">
        <div className="row-span-3 mr-5">
          <img
            className="rounded-xl"
            src={`https:${personal.thumbnail.fields.file.url}`}
          />
        </div>
        <div className="col-span-2">
          <div className="">
            <div className="md:text-2xl font-bold text-gray-500">
              {personal.name}
            </div>
            <div className="md:text-lg text-xs text-gray-400">
              {personal.position}
            </div>
          </div>
        </div>
        <div className="text-right col-span-2">
          <div className="md:text-lg text-xs text-gray-500 align-middle">
            {personal.email && (
              <span className="material-icons align-middle mr-2">email</span>
            )}
            {personal.email}
          </div>
          <div className="md:text-lg text-xs text-gray-500">
            {personal.phone && (
              <span className="material-icons align-middle mr-2">phone</span>
            )}
            {personal.phone}
          </div>
        </div>
        <div className="row-span-2 col-span-4 md:text-lg text-xs text-gray-400">
          {personal.body}
        </div>
      </div>
    </Card>
  )
}

export default Personal
