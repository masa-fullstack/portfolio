import React, { createContext, useEffect, useReducer } from 'react'
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
  maxPage: number
  projectCount: number
  selectedTags: string[]
  displayPortfolios: IPortfoliosFields[]
  portfolios: IPortfoliosFields[]
}

type Action =
  | { type: 'SETINITPORTFOLIO'; value: IPortfoliosFields[] }
  | { type: 'SETPAGE'; value: number }
  | { type: 'ADDTAG'; value: string }
  | { type: 'REMOVETAG'; value: string }

type TagFilter = (
  tags: SelectedTags,
  portfolios: IPortfoliosFields[]
) => { count: number; filterdPortfolios: IPortfoliosFields[] }

type PageFilter = (
  page: number,
  portfolios: IPortfoliosFields[]
) => IPortfoliosFields[]

export const PortfolioContext = createContext(
  {} as { state: State; dispatch: React.Dispatch<Action> }
)

const initialState: State = {
  page: 1,
  maxPage: 1,
  projectCount: 0,
  selectedTags: [],
  displayPortfolios: [],
  portfolios: [],
}

//tagによってPortofolioを絞り込む処理
const tagFilter: TagFilter = (selectedTags, portofolios) => {
  const filterdPortfolios = [...portofolios].filter((item) => {
    //portfolioのtag名称だけの配列を作成
    const portfolioTags = item.tags.map((itemTag) => itemTag.fields.title)
    //配列同士で存在チェックし、存在すればtrue、しなければfalseを返す
    return getIsDuplicate(selectedTags, portfolioTags)
  })

  return {
    count: filterdPortfolios.length,
    filterdPortfolios: filterdPortfolios.slice(0, 3),
  }
}

const pageFilter: PageFilter = (page, portfolios) => {
  return portfolios.slice((page - 1) * 3, page * 3)
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SETINITPORTFOLIO':
      return {
        ...state,
        maxPage: getMaxPage(action.value.length, 3),
        projectCount: action.value.length,
        displayPortfolios: action.value.slice(0, 3),
        portfolios: action.value,
      }
    case 'SETPAGE':
      return {
        ...state,
        page: action.value,
        displayPortfolios: pageFilter(action.value, state.portfolios),
      }
    case 'ADDTAG': {
      const addSelectedTags = [...state.selectedTags, action.value]
      const { count, filterdPortfolios } = tagFilter(
        addSelectedTags,
        state.portfolios
      )
      return {
        ...state,
        page: initialState.page,
        maxPage: getMaxPage(count, 3),
        projectCount: count,
        selectedTags: addSelectedTags,
        displayPortfolios: filterdPortfolios,
      }
    }
    case 'REMOVETAG': {
      const removeSelectedTags = [...state.selectedTags].filter(
        (tag) => tag !== action.value
      )
      const { count, filterdPortfolios } = tagFilter(
        removeSelectedTags,
        state.portfolios
      )

      return {
        ...state,
        page: initialState.page,
        maxPage: getMaxPage(count, 3),
        projectCount: count,
        selectedTags: removeSelectedTags,
        displayPortfolios: filterdPortfolios,
      }
    }
  }
}

const Portfolios = ({ tags, portfolios }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // console.log('Portfolios rendering')
  useEffect(() => dispatch({ type: 'SETINITPORTFOLIO', value: portfolios }), [])

  return (
    <div>
      <PortfolioContext.Provider value={{ state, dispatch }}>
        <Tags tags={tags} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {state.displayPortfolios.map((portfolio, idx) => (
            <Portfolio key={idx} portfolio={portfolio} />
          ))}
        </div>

        <Pagenation />
      </PortfolioContext.Provider>
    </div>
  )
}

export default Portfolios
