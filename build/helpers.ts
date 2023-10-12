import fs from 'node:fs'
import path from 'node:path'

export function withLeftAlign(content: string) {
  return `
<p align="left">
${content}
</p>
`.trim()
}

export function withCenterAlign(content: string) {
  return `
<p align="center">
${content}
</p>
`.trim()
}

export function icon(url: string, imgUrl: string, alt: string) {
  return `
<a href="${url}" target="_blank" rel="noreferrer"
  ><img
    src="${imgUrl}"
    width="36"
    height="36"
    alt="${alt}"
/></a>
  `.trim()
}

export function createReadMeWithContent(content: string) {
  const dist = path.join(process.cwd(), './README.md')
  fs.rmSync(dist, { force: true })
  fs.writeFileSync(dist, content.trim(), { encoding: 'utf8' })
}
