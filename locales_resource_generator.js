import { tocForResources } from 'i18next-resources-for-ts'

const translation = {
  name: 'translation',
  path: './public/locales/en/translation.json'
}

const home = {
  name: 'home',
  path: './public/locales/en/home.json'
}
const projects = {
  name: 'projects',
  path: './public/locales/en/projects.json'
}

const gallery = {
  name: 'gallery',
  path: './public/locales/en/gallery.json'
}

const toc = tocForResources([translation, home, projects, gallery], './src/@types/resources.d.ts')