import React, { useReducer } from 'react'
import { IPortfoliosFields, ITagFields } from '../@types/generated/contentful'
import Tags from './Tags'
import { getIsDuplicate, getMaxPage } from '../lib/commonFunction'
import { SelectedTags } from '../@types/types'
import Pagenation from './Pagenation'
import Portfolio from './Portfolio'

type Props = {
  tags: ITagFields[]
  portfolios: IPortfoliosFields[]
}

type State = {
  page: number
  selectedTags: string[]
}

export type Action =
  | { type: 'SET_PAGE'; value: number }
  | { type: 'ADD_TAG'; value: string }
  | { type: 'REMOVE_TAG'; value: string }

type TagFilter = (
  tags: SelectedTags,
  portfolios: IPortfoliosFields[]
) => IPortfoliosFields[]

type PageFilter = (
  page: number,
  portfolios: IPortfoliosFields[]
) => IPortfoliosFields[]

const initialState: State = {
  page: 1,
  selectedTags: [],
}

//tagによってPortofolioを絞り込む処理
const tagFilter: TagFilter = (selectedTags, portofolios) => {
  return selectedTags
    ? //tagが選択されている時はフィルタリングする
      [...portofolios].filter((item) => {
        //portfolioのtag名称だけの配列を作成
        const portfolioTags = item.tags.map((itemTag) => itemTag.fields.title)
        //配列同士で存在チェックし、存在すればtrue、しなければfalseを返す
        return getIsDuplicate(selectedTags, portfolioTags)
      })
    : //tagが選択されていない場合はそのまま返す
      portofolios
}

const pageFilter: PageFilter = (page, portfolios) => {
  return portfolios.slice((page - 1) * 3, page * 3)
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        page: action.value,
      }
    case 'ADD_TAG':
      return {
        ...state,
        page: initialState.page,
        selectedTags: [...state.selectedTags, action.value],
      }
    case 'REMOVE_TAG':
      return {
        ...state,
        page: initialState.page,
        selectedTags: [...state.selectedTags].filter(
          (tag) => tag !== action.value
        ),
      }
  }
}

const Portfolios = ({ tags, portfolios }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const filterdPortfolios = tagFilter(state.selectedTags, portfolios)
  const portfolioCount = filterdPortfolios.length
  const maxPage = getMaxPage(portfolioCount, 3)
  const displayPortfolios = pageFilter(state.page, filterdPortfolios)

  return (
    <div>
      <Tags
        tags={tags}
        portfolioCount={portfolioCount}
        dispatch={dispatch}
        selectedTags={state.selectedTags}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        {displayPortfolios.map((portfolio, idx) => (
          <Portfolio key={idx} portfolio={portfolio} />
        ))}
      </div>

      <Pagenation maxPage={maxPage} page={state.page} dispatch={dispatch} />
    </div>
  )
}

export default Portfolios
