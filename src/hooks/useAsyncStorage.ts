import { useState, useEffect, useCallback } from "react"

import AsyncStorage from "@react-native-async-storage/async-storage"

export function useAsyncStorage<T>(key: string, initialValue?: T) {
  const [storedValue, setStoredValue] = useState<T | null>(null)

  // Get value from AsyncStorage
  const getValue = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        setStoredValue(JSON.parse(value))
      } else if (initialValue !== undefined) {
        setStoredValue(initialValue)
      }
    } catch (error) {
      console.error(`Error Get AsyncStorage: ${key}`, error)
    }
  }, [key, initialValue])

  // Save value on AsyncStorage
  const setValue = async (value: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (error) {
      console.error(`Error Set AsyncStorage: ${key}`, error)
    }
  }

  // Delete value from async storage
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem(key)
      setStoredValue(null)
    } catch (error) {
      console.error(`Error Delete AsyncStorage: ${key}`, error)
    }
  }

  useEffect(() => {
    getValue()
  }, [getValue])

  return {
    // State
    value: storedValue,

    // Functions
    setValue,
    removeValue
  }
}
