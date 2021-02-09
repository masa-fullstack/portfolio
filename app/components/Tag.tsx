import React, { useContext } from 'react'
import { PortfolioContext } from './Portfolios'

type Props = {
  title: string
}

const Tag = ({ title }: Props) => {
  const portofolioContext = useContext(PortfolioContext)

  const handleClick = () => {
    portofolioContext.state.selectedTags.find((tag) => tag === title)
      ? //selectedTagにクリックしたtagが存在する場合、クリックしたtagをselectedTagsから削除
        portofolioContext.dispatch({ type: 'REMOVETAG', value: title })
      : //selectedTagにクリックしたtagが存在しない場合、クリックしたtagをselectedTagsに追加
        portofolioContext.dispatch({ type: 'ADDTAG', value: title })
  }
  // console.log('Tag rendering')

  return (
    <div
      className={`text-xs border-2 rounded-xl py-2 px-5 my-1 mr-2 cursor-pointer ${
        portofolioContext.state.selectedTags.find((tag) => tag === title)
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
