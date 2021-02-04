import { createClient, EntryCollection } from 'contentful'
import {
  IExperiencesFields,
  IHobbiesFields,
  IPersonalFields,
  ISkillsFields,
  ISnsFields,
} from '../@types/generated/contentful'

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

export default fetchEntries
