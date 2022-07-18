import sanityClinet from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClinet({
    projectId: '0prmbfxp',
    dataset: 'production',
    apiVersion: '2022-07-17',
    useCdn: true,
    token: 'skOuGY1bfg2wiWHFeAKUqTBW4UA1sbfjJAXAoShk85e6Jk83QJZdPwSMNoNBzwtVzKrxi8wZJiZhdtN3tlEH9QRkv9H15Bc5NMePMqWHraPOtPhojFcXRuZnEMw3KtgKJRLIH0Vg9HNdvZDLMb4P0FdQJT6idtCBiLRWyspB7hnaueCbBe6A',
    
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

