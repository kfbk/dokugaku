<template>
  <v-container fluid>
    <template v-if="currentPost">
      <v-row>
        <v-col cols="4">
          <h1>{{ currentPost.fields.title }}</h1>
        </v-col>
        <v-spacer />
        <v-col cols="6">
        <div align="right">
          <v-btn
            outlined
            color="primary"
            to="/"
          >
            <!-- <v-icon size="16">
              fas fa-angle-double-left
            </v-icon> -->
            <span class="ml-1">ホームへ戻る</span>
          </v-btn>
        </div>
        </v-col>
      </v-row>

      <v-img
        :src="setEyeCatch(currentPost).url"
        :alt="setEyeCatch(currentPost).title"
        :aspect-ratio="16/9"
        width="700"
        height="400"
        class="mx-auto"
      />
        <!-- :src="currentPost.fields.image.fields.file.url"
        :alt="currentPost.fields.image.fields.title" -->
      <!-- {{ currentPost.fields.publishDate }}<br> -->
      {{ new Date(currentPost.fields.publishDate).toLocaleDateString() }}<br>
      {{ currentPost.fields.body }}
    </template>

    <template v-else>
      お探しの記事は見つかりませんでした。
    </template>

    <!-- <div>
      <v-btn
        outlined
        color="primary"
        to="/"
      >
        <v-icon size="16">
          fas fa-angle-double-left
        </v-icon>
        <span class="ml-1">ホームへ戻る</span>
      </v-btn>
    </div> -->
  </v-container>
</template>

<script>
import client from '~/plugins/contentful'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['setEyeCatch'])
  },
  async asyncData({ env, params }) {
    let currentPost = null
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(res => (currentPost = res.items[0])).catch(console.error)

    return { currentPost }
  }
}
</script>
