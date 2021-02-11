import { withStyles } from '@material-ui/core/styles'
import MuiPagination from '@material-ui/lab/Pagination'
import { useCallback, useEffect, useRef } from 'react'
import { Action } from './Portfolios'

type Props = {
  maxPage: number
  page: number
  dispatch: React.Dispatch<Action>
}

const Pagination = withStyles({
  root: {
    display: 'inline-block', //中央寄せのためインラインブロックに変更
  },
  ul: {
    '& .Mui-selected': {
      backgroundColor: 'rgba(59, 130, 246,1)',
    },
  },
})(MuiPagination)

const Pagenation = ({ maxPage, page, dispatch }: Props) => {
  // console.log('Pagenation rendering')
  const ref = useRef<HTMLDivElement>()
  const scrollToBottomOfList = useCallback(() => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }, [ref])

  const isFirstRender = useRef(false)
  useEffect(() => {
    isFirstRender.current = true
  }, [])
  useEffect(() => {
    if (isFirstRender) {
      scrollToBottomOfList()
    }
  })

  return (
    <div style={{ textAlign: 'center' }}>
      <Pagination
        count={maxPage} //総ページ数
        color="primary" //ページネーションの色
        onChange={(e, page) => {
          dispatch({ type: 'SET_PAGE', value: page })
        }} //変更されたときに走る関数。第2引数にページ番号が入る
        page={page} //現在のページ番号
      />
      <div ref={ref} />
    </div>
  )
}

export default Pagenation
