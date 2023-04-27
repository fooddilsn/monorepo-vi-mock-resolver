import { main } from 'sample'
import { request } from 'undici'

export async function quote() {
  const { body } = await request('https://dummyjson.com/quotes/7')
  const { quote, author } = await body.json()

  return { quote, author }
}

export function boolean() {
  return main()
}
