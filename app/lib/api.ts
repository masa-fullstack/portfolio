import { createClient, EntryCollection } from 'contentful'
import {
  IExperiencesFields,
  IHobbiesFields,
  IPersonalFields,
  IPortfoliosFields,
  ISkillsFields,
  ISnsFields,
  ITagFields,
} from '../@types/generated/contentful'

// todo:API最適化：graphQLなので１度でFETCHできないか？
// todo:API最適化：必要なデータのみは FETCHできないか？d.tsの型から必要な型に変換？
const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
})

const fetchEntries = (contentType) => client.getEntries({ contentType })

// Personalを1件取得
export const getPersonal = async (): Promise<IPersonalFields> => {
  const entries: EntryCollection<IPersonalFields> = await client.getEntries({
    content_type: 'personal',
    limit: 1,
  })
  if (entries.items[0].fields) {
    return entries.items[0].fields
  }
}

// Skillsを全件取得
export const getSkills = async (): Promise<ISkillsFields[]> => {
  const entries: EntryCollection<ISkillsFields> = await client.getEntries({
    content_type: 'skills',
    order: 'fields.sortNumber',
  })
  if (entries.items) {
    const skills = entries.items.map((entry) => entry.fields)
    return skills
  }
}

// Hobbiesを全件取得
export const getHobbies = async (): Promise<IHobbiesFields[]> => {
  const entries: EntryCollection<IHobbiesFields> = await client.getEntries({
    content_type: 'hobbies',
    order: 'fields.sortNumber',
  })
  if (entries.items) {
    const hobbies = entries.items.map((entry) => entry.fields)
    return hobbies
  }
}

// Snsを1件取得
export const getSns = async (): Promise<ISnsFields> => {
  const entries: EntryCollection<ISnsFields> = await client.getEntries({
    content_type: 'sns',
    limit: 1,
  })
  if (entries.items[0].fields) {
    return entries.items[0].fields
  }
}

// Experiencesを全件取得
export const getExperiences = async (): Promise<IExperiencesFields[]> => {
  const entries: EntryCollection<IExperiencesFields> = await client.getEntries({
    content_type: 'experiences',
    order: '-fields.fromDay',
  })
  if (entries.items) {
    const experiences = entries.items.map((entry) => entry.fields)
    return experiences
  }
}

// Tagsを全件取得
export const getTags = async (): Promise<ITagFields[]> => {
  const entries: EntryCollection<ITagFields> = await client.getEntries({
    content_type: 'tag',
    order: 'fields.sortNumber',
  })
  if (entries.items) {
    const tags = entries.items.map((entry) => entry.fields)
    return tags
  }
}

// Portfoliosを全件取得
export const getPortfolios = async (): Promise<IPortfoliosFields[]> => {
  const entries: EntryCollection<IPortfoliosFields> = await client.getEntries({
    content_type: 'portfolios',
    order: 'fields.sortNumber',
  })
  if (entries.items) {
    const portfolios = entries.items.map((entry) => entry.fields)
    return portfolios
  }
}

export default fetchEntries
