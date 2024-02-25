<script setup>
// import axios from "axios";

// axios
//   .get("https://news-post-checker-backend.fly.dev/scraping")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
</script>

<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img
      class="w-full h-72 object-cover"
      src="../assets/obi-pixel7propix-UEQvUtRs224-unsplash.jpg"
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

  <div class="my-16">
    <div class="relative w-full min-w-[200px] h-10 mb-4">
      <input
        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
        placeholder=" "
      />
      <label
        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
      >
        Link
      </label>
    </div>

    <div>
      <button
        class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-main-color-blue text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full"
        type="button"
      >
        Start
      </button>
    </div>
  </div>
</template>
