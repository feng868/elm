<template>
  <section id="footer" class="one-top-px">
    <ul >
      <li v-for="(item,index) in fullpath" @click="active(index)" ref="ali">
      	<i class="iconfont" :class="item.icon"></i>
        <router-link :to="item.path">{{item.title}}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>export default {
	data() {
		return {
			fullpath: [{
					title: "首页",
					path: "/home",
					icon: "icon-changyonglogo40"
				},
				{
					title: "发现",
					path: "/discover",
					icon: "icon-dingwei1"
				},
				{
					title: "订单",
					path: "/indent",
					icon: "icon-icondd1"
				},
				{
					title: "我的",
					path: "/mine",
					icon: "icon-wode"
				}
			]
		}
	},
	methods: {
		active(index) {
			for(let i = 0; i < this.$refs.ali.length; i++) {
				this.$refs.ali[i].className ="";
    		}
    		 this.$refs.ali[index].className="active";
    		  
    	}
    },
    mounted(){
    	this.$refs.ali[0].className="active";
    }
  }
</script>

<style scoped>

  #footer{
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.49rem;
    width: 100%;
    z-index: 1;
    background: #fff;
  }
  #footer ul{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #footer ul li{
    width: 25%;
    height: 0.49rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.16rem;
    color: #fff;
    flex-direction: column;
  }
   #footer ul li i{
   	color:  #8e8e93;
   }
  #footer ul li a{
    font-size: .12rem;
    color: #8e8e93;
  }
  /*#footer ul li:nth-child(1) a{
    color: #0089dc;
  }*/
  #footer ul .active a{
  	color: #0089dc;
  }
  #footer ul .active i{
  	color: #0089dc;
  }
  #footer ul li:nth-child(3) i{
  	font-weight: bold;
  }
  /*#footer ul li:nth-child(1) i{
    color: #0089dc;
  }*/
</style>
