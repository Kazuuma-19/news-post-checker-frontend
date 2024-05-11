<script setup lang="ts">
import Card from "@components/base/card/Card.vue";
import CardSentence from "@components/base/card/CardSentence.vue";
</script>

<template>
  <Card>
    <template #card-img>
      <img
        class="h-72 w-full object-cover"
        src="../../../../public/home-news.jpg"
        alt="News image"
      />
    </template>

    <template #card-title>Explanation</template>

    <template #card-sentence>
      <CardSentence>
        This app is a tool created solely for the purpose of automating the
        incredibly tedious and unwanted task of checking weekly news posts and
        replies by students, a duty assigned to the vice seminar leader.
        Therefore, it is intended only to make life easier for the vice seminar
        leader. Ordinary students will never need to open this page again, so
        please quietly close this page. Also, from this point on, the text may
        not make sense to anyone who is not an engineer, so instead of reading
        this, you should probably go study.
      </CardSentence>

      <CardSentence>
        Now, for those of you who understand technology, let me explain how this
        app works. This app retrieves information by scraping the news posting
        page on Cybozu Office. Specifically, it inserts a URL into the query
        parameters and sends a GET request to the server. On the backend, it
        uses the puppeteer library to perform scraping on Cybozu Office. It
        returns the name of each poster, whether the post is a reply, and the
        posting time (JST) as a response. The tech stack includes Vue.js,
        TypeScript, and tailwind.css on the frontend, with builds via Vite and
        deployment on Vercel. On the backend, it uses the Express framework and
        TypeScript. ORM is handled by Prisma, the database is Postgres, and the
        deployment is on Fly.io. The choice of technology was driven by the lack
        of need for SEO, hence the adoption of a SPA. Vercel was chosen for
        deployment because it allows free and easy deployment integrated with
        GitHub via CI/CD. The backend uses Express, written in JavaScript, due
        to development cost considerations. Fly.io was chosen for deployment
        because it offers a free RDBMS. GitHub Actions are used to achieve
        CI/CD. ORM uses TypeScript, which ensures type safety, hence the
        adoption of Prisma.
      </CardSentence>

      <CardSentence>
        I'm planning on making improvements gradually, but I'm really hoping
        that some promising non-technical student will take this app and turn it
        into something even better in the future. Oh, and I almost forgot to
        mention privacy concerns; there is no guarantee of security since names
        are completely exposed. There is a plan to add a login feature in the
        future, but it might take some time because it's a hassle.
      </CardSentence>
    </template>
  </Card>
</template>
