<template>
  <div id="app">
    <Menu>
      <SubMenu v-for="menu in menuList" :key="menu.title">
        <template slot="title" >
          {{menu.title}}
        </template>
        <ReSubMenu v-if="menu.children" :data="menu"></ReSubMenu>
        
        <!-- <MenuItem v-if="menu.children"></MenuItem>
        <MenuItem v-else></MenuItem> -->
      </SubMenu>
    </Menu>



    <!-- <Menu>
      <SubMenu>
        <template slot="title">菜单1</template>
        <MenuItem>
          <SubMenu>
            <template slot="title">菜单1-1</template>
            <MenuItem>菜单1-1-1</MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>菜单1-2</MenuItem>
      </SubMenu>
    </Menu> -->
  </div>
</template>

<script>
import Menu from './views/MenuComponent/Menu'
import MenuItem from './views/MenuComponent/MenuItem'
import SubMenu from './views/MenuComponent/SubMenu'
import ReSubMenu from './views/MenuComponent/ReSubMenu'
export default {
  data(){
    return{
      menuList:[
        {
          title:"菜单1",
          children:[
            {
              title:"菜单1-1",
              children:[
                {
                  title:"菜单1-1-1",
                  children:[
                    {
                      title:"菜单1-1-1-1"
                    },
                    {
                      title:"菜单1-1-1-2"
                    }
                  ]
                },{
                  title:"菜单1-1-2"
                }
              ]
            }
          ]
        },{
          title:"菜单2"
        }
      ]
    }
  },
  components:{
    Menu,
    MenuItem,
    SubMenu,
    ReSubMenu
  }
}
</script>




<style scoped>

</style>