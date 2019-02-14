import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components/stories/', true, /.stories.tsx$/);
function loadStories() {
   req.keys().forEach(filename => req(filename));
 }

//  configure(loadStories, module);

// StoryBookロードに必要な設定
// import { configure } from '@storybook/react'

// function loadStories() {
//   // カタログの設置ディレクトリを指定する。
//   require('../src/components/stories')
// }

// configure(loadStories, module)