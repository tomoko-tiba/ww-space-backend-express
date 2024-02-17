import bcrypt from 'bcryptjs'

export const bhash = async (str: string): Promise<string> => {
  return await bcrypt.hash(str, 10)
}

export const bcompare = async (str: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(str, hash)
}
