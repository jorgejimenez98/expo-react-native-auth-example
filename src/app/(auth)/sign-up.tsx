import { Image, StatusBar, TextInput, TouchableOpacity, View } from "react-native"

import { useRouter } from "expo-router"
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated"

import { Flex } from "@/components/layouts"
import { Label } from "@/components/ui"


export default function SignUp() {
  const router = useRouter()

  return (
    <View className="bg-white h-full w-full">
      <StatusBar barStyle="light-content" />

      {/* Background */}
      <Image
        className="w-full h-full absolute"
        source={require("../../assets/images/background.png")}
      />

      {/* Ligth Images */}
      <Flex dir="row" justify="around" class="absolute w-full">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require("../../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require("../../assets/images/light.png")}
        />
      </Flex>

      <View className="w-full h-full flex justify-around pt-40 pb-10">
        {/* Login Text */}
        <Flex justify="center" class="mt-10">
          <Label type="white" weight="bd" tracking="wider" size="5xl">
            Register
          </Label>
        </Flex>

        <View className="flex items-center mx-4 space-y-4">
          {/* Username */}
          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput
              placeholder="Username"
              placeholderTextColor={"gray"}
            />
          </Animated.View>

          {/* Email */}
          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput
              placeholder="E-mail"
              placeholderTextColor={"gray"}
            />
          </Animated.View>

          {/* Password */}
          <Animated.View
            entering={FadeInUp.delay(400).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          {/* Submit Text */}
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity className="w-full bg-sky-400 rounded-2xl p-3 mb-3">
              <Label type="white" weight="bd" size="2xl" align="center">
                Register
              </Label>
            </TouchableOpacity>
          </Animated.View>

          {/* Link */}
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Label class="mr-2">Already have an account?</Label>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Label class="text-sky-600">Login</Label>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  )
}