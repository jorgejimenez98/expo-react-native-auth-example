import { Text, View } from "react-native"

import { useTranslation } from "react-i18next"

import { Flex } from "@/components/layouts"

export default function Index() {
  const { t } = useTranslation()

  return (
    <Flex dir="col" justify="center" items="center" gap="lg" class="bg-red-400 mt-20">
      <View className="bg-red-300">
        <Text className="text-center">{t("Home")}</Text>
      </View>
      <Text>ASDASDasd</Text>
      <View className="h-30 bg-blue-200 ">
        <Text>ASDASDasd</Text>
      </View>
    </Flex>
  )
}