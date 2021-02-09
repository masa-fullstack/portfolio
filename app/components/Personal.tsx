import { IPersonalFields } from '../@types/generated/contentful'
import Card from './Card'

type Props = {
  personal: IPersonalFields
}

const Personal = ({ personal }: Props) => {
  // console.log('Personal rendering')

  return (
    <Card>
      <div className="grid grid-cols-5 grid-rows-3 grid-flow-row">
        <div className="md:col-span-1 col-span-2 row-span-3 mr-5">
          <img
            className="rounded-xls"
            src={`https:${personal.thumbnail.fields.file.url}`}
          />
        </div>
        <div className="md:col-span-2 col-span-4">
          <div className="">
            <div className="md:text-2xl font-bold text-gray-500">
              {personal.name}
            </div>
            <div className="md:text-lg text-xs text-gray-400">
              {personal.position}
            </div>
          </div>
        </div>
        <div className="md:text-right md:col-span-2 col-span-4">
          <div className="md:text-lg text-xs text-gray-500 align-middle">
            {personal.email && (
              <span className="material-icons align-middle mr-1">email</span>
            )}
            {personal.email}
          </div>
          <div className="md:text-lg text-xs text-gray-500">
            {personal.phone && (
              <span className="material-icons align-middle mr-1">phone</span>
            )}
            {personal.phone}
          </div>
        </div>
        <div className="row-span-2 col-span-4 md:text-lg text-xs text-gray-400 mt-3">
          {personal.body}
        </div>
      </div>
    </Card>
  )
}

export default Personal
