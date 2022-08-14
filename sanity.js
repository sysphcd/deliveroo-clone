import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { TabBarIOSItem } from 'react-native';

const client = sanityClient({
    projectId: "9jeo7sxj",
    dataset : "production",
    useCdn : true,
    apiVersion: "2022-08-10", 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;