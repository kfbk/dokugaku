import defaultEyeCatch from '~/assets/images/defaultEyeCatch.png'

export const getters = {
  // 使い方： ...mapGetters(['setEyeCatch'])
  setEyeCatch: () => (post) => {
    // if (!!post.fields.image && !!post.fields.image.fields)
    if (post.fields.image && post.fields.image.fields)
      return {
        url: `https:${post.fields.image.fields.file.url}`,
        title: post.fields.image.fields.title
      }
    else
      return {
        url: defaultEyeCatch,
        title: 'defaultImage'
      }
  }
}
