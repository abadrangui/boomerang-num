const { readFile } = require('fs/promises');
const sharp = require('sharp');
// import { } from './assets/png/'

const IMGURL = '/Users/badrangui/proj/boomerang/src/assets/png/'
const NEWPATH = '/Users/badrangui/proj/boomerang/src/assets/compressed/'

const compress = async () => {
  for (let index = 1; index < 60; index++) {
    const file = await readFile(`${IMGURL}${index}.PNG`)
    await sharp(file)
      .png({
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true,
        force: true,
      })
      .resize(1024, 1024)
      .withMetadata()
      .toFile(`${NEWPATH}${index}.png`)
  }
}

compress()