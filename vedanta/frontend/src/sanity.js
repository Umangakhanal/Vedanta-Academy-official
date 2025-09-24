import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '4ixmv4co',
    dataset:'production',
    useCdn: true,
    apiVersion: "2023-01-01"
});

const builder= imageUrlBuilder(client);
export const urlFor=(source)=> builder.image(source);