import React, { useEffect, useState } from 'react'
import { IPortfoliosFields, ITagFields } from '../@types/generated/contentful'
import Card from './Card'
import MuiPagination from '@material-ui/lab/Pagination'
import { withStyles } from '@material-ui/core/styles'
import Tags from './Tags'

// todo:typesにまとめる
type Props = {
  tags: ITagFields[]
  portfolios: IPortfoliosFields[]
}
// export type TagState = {
//   title: string
//   isToggleOn: boolean
// }

const Portfolios = ({ tags, portfolios }: Props) => {
  const [page, setPage] = useState(1)
  const [currentPortfolios, setCurrentPortfolios] = useState(
    portfolios.slice(0, 3)
  )

  // const initialTagState: TagState[] = tags.map((tag) => {
  //   return { title: tag.title, isToggleOn: false }
  // })

  // const [tagState, setTagState] = useState(initialTagState)

  useEffect(() => {
    setCurrentPortfolios(portfolios.slice((page - 1) * 3, page * 3))
    // setCurrentPortfolios(
    //   portfolios
    //     .filter((item) => {
    //       //itemはポートフォリオ
    //       return item.tags.map((itemTag) => {
    //         //itemTagはポートフォリオのTag
    //         tagState
    //           .filter((tag) => (tag.isToggleOn ? tag.title : false))
    //           .map((selectedTag) => {
    //             selectedTag.title === itemTag.fields.title
    //           })
    //       })
    //     })
    //     .slice((page - 1) * 3, page * 3)
    // )
  }, [page])

  const Pagination = withStyles({
    root: {
      display: 'inline-block', //中央寄せのためインラインブロックに変更
    },
  })(MuiPagination)

  return (
    <div>
      <Tags
        tags={tags}
        countProject={portfolios.length}
        // tagState={tagState}
        // setTagState={setTagState}
      />
      <div className="grid grid-cols-3 gap-4 mb-5">
        {currentPortfolios.map((portfolio, idx) => (
          <Card key={idx} className="flex flex-col">
            <div className="w-full pb-32 relative mb-3">
              <img
                className="rounded-xl object-cover absolute w-full h-full"
                src={`https:${portfolio.thumbnail.fields.file.url}`}
              />
            </div>
            <div className="text-xs">
              {portfolio.tags.map((tag) => `#${tag.fields.title} `)}
            </div>
            <div className="font-bold text-lg my-3">{portfolio.title}</div>
            <div className="text-gray-500 text-sm mb-8">
              {portfolio.content}
            </div>
            <div className="text-center mt-auto mb-5">
              <a
                className="text-base no-underline bg-blue-400 text-white border-2 border-blue-400 rounded-xl py-2 px-5 mr-2"
                href={portfolio.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                demo
              </a>
              <a
                className="text-base no-underline bg-white text-blue-400 border-2 border-blue-400 rounded-xl py-2 px-5 ml-2"
                href={portfolio.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        {/* todo:色を水色に変更したい */}
        <Pagination
          count={2} //総ページ数
          color="primary" //ページネーションの色
          onChange={(e, page) => setPage(page)} //変更されたときに走る関数。第2引数にページ番号が入る
          page={page} //現在のページ番号
        />
      </div>
    </div>
  )
}

export default Portfolios
