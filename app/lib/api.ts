import { createClient, EntryCollection } from 'contentful'
import { IPersonalFields } from '../@types/generated/contentful'

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
})

const fetchEntries = (content_type) => client.getEntries({ content_type })

// 全てのpostを取得
export const getPersonal = async (): Promise<IPersonalFields> => {
  const entries: EntryCollection<IPersonalFields> = await client.getEntries({
    // Content typeがpostのデータだけ取得
    content_type: 'personal',
  })
  if (entries.items[0].fields) {
    return entries.items[0].fields
  }
  console.log(`Error getting Entries for personal`)
}

export default fetchEntries
