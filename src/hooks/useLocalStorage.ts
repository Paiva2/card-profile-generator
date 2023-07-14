import { useEffect, useState } from "react"

export const useLocalStorage = (key: string): unknown => {
  const [storageItem, setStorageItem] = useState<string | null>(null)

  useEffect(() => {
    const storageItem = localStorage.getItem(key)

    if (storageItem) {
      if (key === "profilePic") {
        setStorageItem(storageItem)

        return
      }
      const parsedStorageItem = JSON.parse(storageItem)

      if (parsedStorageItem) {
        setStorageItem(parsedStorageItem)
      }
    }
  }, [])

  return storageItem
}
