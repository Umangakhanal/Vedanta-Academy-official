import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import dotenv from 'dotenv';
dotenv.config();

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset:process.env.SANITY_DATASET,
    token: process.env.SANITY_WRITE_TOKEN,
    useCdn: false,
    apiVersion: "2025-09-23",
});

const builder= imageUrlBuilder(client);
export const urlFor=(source)=> builder.image(source);