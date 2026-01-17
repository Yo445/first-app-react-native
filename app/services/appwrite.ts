import { Client, Databases, Query } from "react-native-appwrite";

// // track the searches made by a user

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;

const client = new Client()
  .setEndpoint("https://sfo.cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  const result = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
    Query.equal("searchTerm", query),
  ]);

  console.log("Search Record Result:", result);
  // check if a record of that search has already been stored
  // if a document is found increment the searchCount field
  // if no document is found
  // create a new doument in appwrite database -> 1
};
