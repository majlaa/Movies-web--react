import React from "react";

const Footer = () => {

  return (
    <footer class="bg-gray-950">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex items-center  justify-center text-white"> 
           <p>Majla</p>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" class="hover:underline">    </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;