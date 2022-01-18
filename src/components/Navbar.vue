<template>
  <nav class="flex items-center justify-between flex-wrap bg-cv-color p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img :src="profileImage" alt="ImagenPerfil" class="h-14 w-14 rounded-full px-auto mr-4">
      <div class="hidden text-2xl font-semibold md:flex tracking-tight text-white">Diego Bustamante
      </div>  
    </div>
    <Menu>
        <MenuButton class="text-white inline-flex p-3 hover:bg-cv-hover rounded md:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </MenuButton>
        <div class="hidden md:block md:ml-6">
          <div class="flex space-x-4">
            <MenuItems>
              <MenuItem>                
              </MenuItem>
            </MenuItems>
          </div>
        </div>
    </Menu>    
  </nav>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
export default {
  name: 'Navbar',
  props:['profileImage'],
  components: {
      Menu,
      MenuButton,
      MenuItems,
      MenuItem,
    },
}
</script>


<style>

</style>