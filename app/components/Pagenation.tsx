import { withStyles } from '@material-ui/core/styles'
import MuiPagination from '@material-ui/lab/Pagination'
import { useContext } from 'react'
import { PortfolioContext } from './Portfolios'

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

const Pagenation = () => {
  // console.log('Pagenation rendering')
  const portofolioContext = useContext(PortfolioContext)
  return (
    <div style={{ textAlign: 'center' }}>
      <Pagination
        count={portofolioContext.state.maxPage} //総ページ数
        color="primary" //ページネーションの色
        onChange={(e, page) =>
          portofolioContext.dispatch({ type: 'SETPAGE', value: page })
        } //変更されたときに走る関数。第2引数にページ番号が入る
        page={portofolioContext.state.page} //現在のページ番号
      />
    </div>
  )
}

export default Pagenation
