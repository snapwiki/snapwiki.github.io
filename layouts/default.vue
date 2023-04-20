<template>
  <div>
<div>
  <nav class="bg-blue-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
           <nuxt-link to="/"> <img class="h-10 w-10 inline" src="~/static/icon.png" alt="Snap! Wiki"> <span class="inline text-white font-bold text-1xl">Snap<i>!</i> Wiki</span></nuxt-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-blue-900 text-white", Default: "text-blue-300 hover:bg-blue-700 hover:text-white" -->

              <a href="/SnapWikiUptime" class="text-gray-200 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Status</a>

              <a href="https://github.com/snapwiki" class="text-gray-200 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Organization</a>

              <a href="https://snapwiki.miraheze.org" class="bg-gray-200 text-blue-700 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Visit The Wiki</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button type="button" class="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-blue-900 text-white", Default: "text-blue-300 hover:bg-blue-700 hover:text-white" -->
        <nuxt-link to="/status" class="text-gray-200 hover:bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium">Status</nuxt-link>

        <a href="https://github.com/snapwiki" class="text-gray-200 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Organization</a>

        <a href="https://snapwiki.miraheze.org" class="text-gray-200 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Visit The Wiki</a>

      </div>
    </div>
  </nav>

  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <Nuxt />
    </div>
  </main>
</div>

  </div>
</template>

<style>
@import url('https://rsms.me/inter/inter.css');


</style>
