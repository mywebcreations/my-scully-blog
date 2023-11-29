import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: "my-blog",
<<<<<<< HEAD
    outDir: './dist/static',
    routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
=======
    distFolder: './dist/my-blog',
    outDir: './dist/static',
    routes: {
      '/posts/:id': {
        type: 'contentFolder',
        id: {
          folder: "./mdfiles"
        }
      },
>>>>>>> SCULLY-21-Display-blog-posts-on-the-home-page

    }
}