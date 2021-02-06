import { useState } from 'react'

// todo:typesにまとめる
type Props = {
  title: string
}

const Tag = ({ title }: Props) => {
  const [isToggleOn, setIsToggleOn] = useState(false)

  const handleClick = () => {
    setIsToggleOn(!isToggleOn)
  }

  return (
    <div
      className={`text-xs border-2 rounded-xl py-2 px-5 mr-2 ${
        isToggleOn
          ? 'bg-blue-400 text-white  border-blue-400'
          : 'bg-white text-gray-400  border-gray-400'
      }
          `}
      onClick={() => handleClick()}
    >
      {title}
    </div>
  )
}

export default Tag
