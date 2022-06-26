<template>
  <v-container fluid>
    <!-- <v-row justify="center">
      <v-col cols="12" sm="11" md="10" xl="8">
        <v-row>
          <v-col
            v-for="(post, i) in posts" :key="i"
            cols="12" sm="6" lg="4" xl="3"
          >
            <v-card max-width="400" class="mx-auto">
              <v-img
                :src="post.fields.image.fields.file.url"
                :alt="post.fields.image.fields.title"
                :aspect-ratio="16/9"
                max-width="200"
                class="white--text"
              >
                <v-card-title
                  class="align-end fill-height font-weight-bold"
                >
                  {{ post.fields.title }}
                </v-card-title>
              </v-img>
              <v-card-text>
                {{ post.fields.publishDate }}
              </v-card-text>
              <v-list-item
                three-line
                style="min-height: unset;"
              >
                <v-list-item-subtitle>
                  {{ post.fields.body }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-card-action>
                <v-spacer />
                <v-btn text color="primary">
                  この記事を見る
                </v-btn>
              </v-card-action>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->
    <template v-if="posts.length">
      <ul v-for="(post, i) in posts" :key="i">
        <li>{{ post.fields.title }}</li>
        <ul>
          <v-img
            :src="post.fields.image.fields.file.url"
            :alt="post.fields.image.fields.title"
            :aspect-ratio="16/9"
            max-width="400"
            max-height="225"/>
          <li>{{ post.fields.body }}</li>
          <li>{{ post.fields.publishDate }}</li>
        </ul>
      </ul>
    </template>
    <template v-else>
      投稿された記事はありません。
    </template>
  </v-container>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  async asyncData({ env }) {
    let posts = []
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishDate'
    }).then(res => (posts = res.items)).catch(console.error)
    return { posts }
  }
}
</script>
<!-- <template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template> -->
