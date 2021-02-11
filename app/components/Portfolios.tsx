import React, { useReducer, useRef, useCallback, useEffect } from 'react'
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

const Portfolios = ({ tags, portfolios }: Props) => {
  const initialState: State = {
    page: 1,
    selectedTags: [],
  }

  //タグフィルターやページネーション時にスクロールさせるためにrefを作成
  const topRef = useRef<HTMLDivElement>()
  const bottomRef = useRef<HTMLDivElement>()
  //useReducerのaction.typeをuseEffectから参照するためrefを作成
  const typeRef = useRef<Action['type'] | 'INIT'>('INIT')

  // このコールバックを呼び出して ref.current.scrollIntoView() を呼び出してスクロール
  const scrollToBottomOfList = useCallback(
    (ref, block) => {
      ref!.current!.scrollIntoView({
        block: block,
      })
    },
    [topRef, bottomRef]
  )

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
    typeRef.current = action.type
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

  const [state, dispatch] = useReducer(reducer, initialState)

  const filterdPortfolios = tagFilter(state.selectedTags, portfolios)
  const portfolioCount = filterdPortfolios.length
  const maxPage = getMaxPage(portfolioCount, 3)
  const displayPortfolios = pageFilter(state.page, filterdPortfolios)

  useEffect(() => {
    if (typeRef.current === 'SET_PAGE') {
      scrollToBottomOfList(bottomRef, 'start')
    } else if (
      typeRef.current === 'ADD_TAG' ||
      typeRef.current === 'REMOVE_TAG'
    ) {
      scrollToBottomOfList(topRef, 'start')
    }
  })

  return (
    <div>
      <div ref={topRef} />
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
      <div ref={bottomRef} />
    </div>
  )
}

export default Portfolios
