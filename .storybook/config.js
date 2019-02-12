// import { configure } from '@kadira/storybook';

// function loadStories() {
//   require('../stories');
// }

// configure(loadStories, module);
import React from 'react';
import { configure } from "@storybook/react";
const req = require.context("../src/components/stories", true, /\.(js|ts|tsx)$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);