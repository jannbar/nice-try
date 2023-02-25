export const niceTry = async <T>(promise: Promise<T>) => {
  try {
    const data = await promise
    return [data, null] as const
  } catch (error) {
    return [null, error] as const
  }
}
