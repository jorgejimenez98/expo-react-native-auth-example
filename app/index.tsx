import { Text, View } from 'react-native';
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation()

  return (
    <View>
      <Text>{t('Home')}</Text>
    </View>
  );
}
