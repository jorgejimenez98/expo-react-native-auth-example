import { Stack } from 'expo-router';
import "@/lib/config/i18n"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
    </Stack>
  );
}
