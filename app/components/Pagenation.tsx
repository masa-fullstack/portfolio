import { withStyles } from '@material-ui/core/styles'
import MuiPagination from '@material-ui/lab/Pagination'
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
  return (
    <div style={{ textAlign: 'center' }}>
      <Pagination
        count={maxPage} //総ページ数
        color="primary" //ページネーションの色
        onChange={(e, page) => dispatch({ type: 'SET_PAGE', value: page })} //変更されたときに走る関数。第2引数にページ番号が入る
        page={page} //現在のページ番号
      />
    </div>
  )
}

export default Pagenation
