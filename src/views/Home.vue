<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { usePostsStore } from "../stores/posts";
// router インスタンスを取得
const router = useRouter();
const url = ref("");
const isScraping = ref(false);
const posts = usePostsStore();

/**
 * スクレイピング先を定義
 * @param {*} url スクレイピング対象のURL
 */
const getScrapeData = async (url) => {
  return await axios.get("http://localhost:8080/scraping", {
    params: { url },
  });
};
/**
 * スクレイピングを実行し、結果をセットする
 * その後R
 */
const startScraping = async () => {
  isScraping.value = true;
  try {
    const response = await getScrapeData(url.value);
    posts.setResponse(response.data);
    router.push({ name: "Result" });
  } catch (error) {
    console.error("Failed to start scraping:", error);
  } finally {
    isScraping.value = false;
  }
};
</script>

<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img
      class="w-full h-72 object-cover"
      src="../assets/home-news.jpg"
      alt="Sunset in the mountains"
    />
    <div class="px-8 py-6">
      <div class="font-bold text-xl mb-2">Explanation</div>
      <p class="text-sm lg:text-base mb-4">
        This app is a tool designed exclusively to lighten the load of the
        deputy seminar leaders by automating the incredibly tedious and
        downright unappealing task of checking if students have posted or
        replied to news each week. Essentially, it's made for the sole purpose
        of making the deputy seminar leaders' lives easier. So, if you're a
        normal student, you're probably never going to open this page
        again—please, close it quietly and go on with your day. And for those
        who aren't tech-savvy, well, this might as well be rocket science to
        you, so you might want to hit the books instead of trying to understand
        this text.
      </p>
      <p class="text-sm lg:text-base mb-4">
        Alright, for those of you who speak the language of technology, let's
        dive into how this app works. It begins with the user entering the URL
        of a news posting page on cybozu office. This URL is then used as a
        query parameter in a GET request. On the backend, I'm scraping the data
        with the puppeteer library in cybozu office. I'm fetching the names of
        the posters, checking if the post is a reply, and capturing the posting
        time (in JST), then serving all this data up in a JSON response. The
        tech stack is pretty cool, if I do say so myself. On the frontend, I'm
        using Vue.js and Tailwind CSS, with Vite for building, and I've deployed
        it on Vercel. Why Vercel, you ask? Because it's free, easy to deploy
        with CI/CD via GitHub, and I don't need to worry about SEO, making a
        Single Page Application (SPA) a perfect fit. On the backend, I'm rolling
        with Express, using Prisma as our ORM, PostgreSQL for the database, and
        I've deployed on Fly.io because, hey, they offer a database for free,
        and who doesn't love free stuff? Plus, I've hooked it up with GitHub
        Actions for a sleek CI/CD pipeline. I chose Prisma for the ORM because
        I'm eyeing a future move to TypeScript, and Prisma plays nicely with
        type definitions.
      </p>
      <p class="text-sm lg:text-base mb-4">
        I'm planning on making improvements gradually, but I'm really hoping
        that some promising non-technical student will take this app and turn it
        into something even better in the future. Oh, and I almost forgot to
        mention the privacy aspect—names are pretty much leaking left and right
        here. But don't worry too much; if puppeteer doesn't manage to fetch
        anything, no names will be outputted. So, you know, fingers crossed and
        all that.
      </p>
    </div>
  </div>

  <div class="my-12">
    <div class="relative w-full min-w-[200px] h-10 mb-4">
      <input
        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
        placeholder=" "
        v-model="url"
      />
      <label
        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
      >
        Link
      </label>
    </div>

    <button
      class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-main-color-blue text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full"
      type="button"
      :disabled="isScraping"
      @click="startScraping"
    >
      <span class="relative">
        <!-- loading spinner -->
        <div
          role="status"
          class="absolute top-1/2 -left-10 -translate-y-1/2"
          v-show="isScraping"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>

        <span v-if="isScraping">Loading...</span>
        <span v-else>Start</span>
      </span>
    </button>
  </div>
</template>
