export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Blog Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"Blog Home\",\"heroImage\":\"/logo.svg\",\"heroText\":\"the name of your blog\",\"tagline\":\"You can put your slogan here\",\"heroFullScreen\":true,\"projects\":[{\"icon\":\"project\",\"name\":\"project name\",\"desc\":\"project detailed description\",\"link\":\"https://your.project.link\"},{\"icon\":\"link\",\"name\":\"link name\",\"desc\":\"link detailed description\",\"link\":\"https://link.address\"},{\"icon\":\"book\",\"name\":\"book name\",\"desc\":\"Detailed description of the book\",\"link\":\"https://link.to.your.book\"},{\"icon\":\"article\",\"name\":\"article name\",\"desc\":\"Detailed description of the article\",\"link\":\"https://link.to.your.article\"},{\"icon\":\"friend\",\"name\":\"friend name\",\"desc\":\"Detailed description of friend\",\"link\":\"https://link.to.your.friend\"},{\"icon\":\"/logo.svg\",\"name\":\"custom item\",\"desc\":\"Detailed description of this custom item\",\"link\":\"https://link.to.your.friend\"}],\"footer\":\"customize your footer text\",\"summary\":\"This is a blog home page demo. To use this layout, you should set both layout: Blog and home: true in the page front matter. For related configuration docs, please see blog homepag\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://colina-x.github.io/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Colinaの小窝\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Blog Home\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.51,\"words\":154},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
