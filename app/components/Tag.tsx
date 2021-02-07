import { SelectedTags } from './Portfolios'

// todo:typesにまとめる
type Props = {
  title: string
  selectedTags: SelectedTags
  setSelectedTags: React.Dispatch<React.SetStateAction<SelectedTags>>
}

const Tag = ({ title, selectedTags, setSelectedTags }: Props) => {
  const handleClick = () => {
    selectedTags.find((tag) => tag === title)
      ? //selectedTagにクリックしたtagが存在する場合、クリックしたtagをselectedTagsから削除
        setSelectedTags(selectedTags.filter((tag) => tag !== title))
      : //selectedTagにクリックしたtagが存在しない場合、クリックしたtagをselectedTagsに追加
        setSelectedTags([...selectedTags, title])
  }

  return (
    <div
      className={`text-xs border-2 rounded-xl py-2 px-5 mr-2 ${
        selectedTags.find((tag) => tag === title)
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
