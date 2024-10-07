import { Text } from "react-native"

import { useTranslation } from "react-i18next"

import { Flex } from "@/components/layouts"

export default function Index() {
  const { t } = useTranslation()

  return (
    <Flex dir="col" justify="center" items="center" gap="lg" class="bg-red-400">
      <Text className="text-center">{t("Home")}</Text>
    </Flex>
  )
}