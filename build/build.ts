import {
  withLeftAlign,
  createReadMeWithContent,
  withCenterAlign,
} from './helpers'
import { techStack } from './techStack'
import { socials } from './socials'
import { stats } from './stats'

createReadMeWithContent(`
# 👋 Hello! My name is Ivan Polushin!

I am middle backend/fullstack developer.

## My tech stack:

${withLeftAlign(techStack)}

## My socials and contacts:

${withLeftAlign(socials)}

## My GitHub stats:

${withCenterAlign(stats)}
`)
