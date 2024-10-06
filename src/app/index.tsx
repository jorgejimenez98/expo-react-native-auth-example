import { Text, View } from "react-native"

import { useTranslation } from "react-i18next"

import { Flex } from "@/components/layouts"
import { styles } from "@/lib/constants"

export default function Index() {
  const { t } = useTranslation()

  return (
    <Flex dir="col" justify="center" items="center" gap="lg" style={styles.mt3}>
      <View className="bg-red-300 w-full">
        <Text className="text-center">{t("Home")}</Text>
      </View>
      <Text className="mt-5">ASDASDasd</Text>
      <View className="h-30 bg-blue-200 ">
        <Text>ASDASDasd</Text>
      </View>
    </Flex>
  )
}