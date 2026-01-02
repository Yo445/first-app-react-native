import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className='text-5xl text-accent font-bold'>Hello</Text>
      <Link href="/saved" className="mt-5 px-4 py-2 bg-accent rounded">
        <Text className="text-primary text-lg font-semibold">saved</Text>
      </Link>
{/*       
      <Link href="/movie/avangers" className="mt-5 px-4 py-2 bg-accent rounded">
        <Text className="text-primary text-lg font-semibold">Avangers</Text>
      </Link> */}
    </View>
  );
}
