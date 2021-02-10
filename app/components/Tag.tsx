import React from 'react'
import { Action } from './Portfolios'

type Props = {
  title: string
  dispatch: React.Dispatch<Action>
  isSelected: boolean
}

const Tag = ({ title, dispatch, isSelected }: Props) => {
  const handleClick = () => {
    isSelected
      ? dispatch({ type: 'REMOVE_TAG', value: title })
      : dispatch({ type: 'ADD_TAG', value: title })
  }
  // console.log('Tag rendering' + title)

  return (
    <div
      className={`text-xs border-2 rounded-xl py-2 px-5 my-1 mr-2 cursor-pointer ${
        isSelected
          ? 'bg-blue-500 text-white  border-blue-500'
          : 'bg-white text-gray-400  border-gray-400'
      }
          `}
      onClick={() => handleClick()}
    >
      {title}
    </div>
  )
}

export default React.memo(Tag)
