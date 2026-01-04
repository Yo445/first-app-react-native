import MovieCard from "@/components/MovieCard";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const search = () => {
  const {
    data: movies,
    error: moviesError,
    loading: moviesLoading,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 w-full absolute z-0"
        resizeMode="cover"
      />
      {moviesLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center"
        />
      ) : moviesError ? (
        <Text>Error: {moviesError}</Text>
      ) : (
        <FlatList
          data={movies?.results}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item) => item.id.toString()}
          className="px-5"
          ListEmptyComponent={
            <Text className="text-white text-center text-2xl font-bold">
              No movies found
            </Text>
          }
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 16,
            marginVertical: 16,
          }}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListHeaderComponent={
            <Text className="text-white text-2xl font-bold">
              Search Results
            </Text>
          }
        />
      )}
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
