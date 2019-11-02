<template>
  <div class="home">
    <div class="header">
      <div class="address_map" @click="$router.push({name:'address',params:{city:city}})">
        <i class="fa fa-map-marker"></i>
        <span>{{address}}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
    </div>
    <div class="search_wrap" :class="{'fixedview ':showFilter}" @click="$router.push('/search')">
      <div class="shop_search">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
    <div id="container">
      <!-- 轮播图 -->
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(img,index) in swipeImgs" :key="index">
          <img :src="img" alt />
        </mt-swipe-item>
      </mt-swipe>
      <!-- 商品入口 -->
      <mt-swipe :auto="4000" class="entries">
        <mt-swipe-item v-for="(entry,i) in entries" :key="i">
          <div class="foodentry" v-for="(item,index) in entry" :key="index">
            <div class="img_wrap">
              <img :src="item.image" alt />
            </div>
            <span>{{item.name}}</span>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 推荐商家 -->
    <div class="shoplist-title">推荐商家</div>
    <!-- 导航 -->
    <FilterView :filterData="filterData" @searchFixed="showFilterView" @updata="updata"></FilterView>
    <!-- 商家信息 -->
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadMore"
      :bottom-all-loaded="allLoaded"
      :bottomPullText="bottomPullText"
      :auto-fill="false"
      ref="loadmore"
    >
      <div class="shoplist">
        <IndexShop v-for="(item,index) in restaurants" :key="index" :restaurant="item.restaurant"></IndexShop>
      </div>
    </mt-loadmore>
  </div>
</template>


<script>
import { Swipe, SwipeItem, LoadMore } from "mint-ui";
import FilterView from "../components/FilterView";
import IndexShop from "../components/IndexShop";
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      swipeImgs: [], //轮播图的数据
      entries: [], //商品入口的数据
      filterData: null, //包含了排序导航的数据
      showFilter: false,
      page: 1, //第几页
      size: 5, //每页显示多少条
      restaurants: [],
      allLoaded:false,
      data:null, //条件
      bottomPullText:"上拉加载更多"
    };
  },
  methods: {
    getData() {
      // 获取轮播图数据
      this.$axios("/api/profile/shopping").then(res => {
        // console.log(res.data);
        this.swipeImgs = res.data.swipeImgs;
        this.entries = res.data.entries;
      });
      //获取导航及以下的所有数据
      this.$axios("/api/profile/filter").then(res => {
        console.log(res.data);
        this.filterData = res.data;
      });
      this.loadData();
    },

    //加载商家数据
    loadData() {
      this.$axios
        .post(`/api/profile/restaurants/${this.page}/${this.size}`,this.data)
        .then(res => {
          // console.log(res.data);
          this.restaurants = res.data;
        });
    },
    //用来实现加载更多
    loadMore(){
      if(!this.allLoaded){
        //还有数据没有加载
        this.page++;
         this.$axios
        .post(`/api/profile/restaurants/${this.page}/${this.size}`)
        .then(res => {
          // console.log(res.data);
          //得到后面的数据，重新渲染
          this.$refs.loadmore.onBottomLoaded();
          if(res.data.length>0){
            res.data.forEach(item=> {
              this.restaurants.push(item)
            });
            if(res.data.length<this.size){
              this.allLoaded = true;
              this.bottomPullText = "没有数据了"
            }
          }
        });
      }
    },
    loadTop(){},
    //搜索栏是否在最上面
    showFilterView(isShow) {
      this.showFilter = isShow;
    },
    updata(condition) {
      // console.log(condition);
      this.data = condition;
      this.loadData()
    }
  },
  computed: {
    address() {
      return this.$store.getters.address;
    },
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  components: {
    FilterView,
    IndexShop
  }
};
</script>



<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header,
.search_wrap {
  background-color: #009eef;
  padding: 10px 16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_wrap .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}

.search_wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
.swiper {
  height: 100px;
}
.swiper img {
  width: 100%;
  height: 100px;
}

.entries {
  background: #fff;
  height: 47.2vw;
  text-align: center;
  overflow: hidden;
}
.foodentry {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 2.933333vw;
}
.foodentry .img_wrap {
  position: relative;
  display: inline-block;
  width: 12vw;
  height: 12vw;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
.foodentry span {
  display: block;
  color: #666;
  font-size: 0.32rem;
}
/* 推荐商家 */
.shoplist-title {
  display: flex;
  align-items: flex;
  justify-content: center;
  height: 9.6vw;
  line-height: 9.6vw;
  font-size: 16px;
  color: #333;
  background: #fff;
}
.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "一";
  width: 5.333333vw;
  height: 0.266667vw;
  color: #999;
}
.shoplist-title:before {
  margin-right: 3.466667vw;
}
.shoplist-title:after {
  margin-left: 3.466667vw;
}

.fixedview {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999;
}

.mint-loadmore {
  height: calc(100% - 95px);
  overflow: auto;
}
</style>