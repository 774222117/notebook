<template>
  <div class="hello">
		  <div class="leftBtn" @click="leftBtnClick">立即抽奖</div>
	  <div class="demoImg" :class="rotate ? 'rotate1' : ''">
		  <img alt="Vue logo" src="../assets/logo.png">
	  </div>
	  
	  
	  <div class='demo'>
	  		  <p class="ccc" :class="show ? 'aaa':'bbb'">Hello</p>
	  </div>
	  
	  
  </div>
  
  
 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
	  return {
		  show:false,
		  rotate:false
	  }
  },
  methods:{
	  leftBtnClick(){
		  this.rotate = !this.rotate
		  this.show = !this.show
		  console.log(this.rotate)
		  console.log(this.show)
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.rotate1 {
		transform: rotate(90deg);
	}
	
	.ccc {
		color: orange;
		transition: 2s;
		font-size: 32px;
	}
	.aaa {
		color:red
		
	}


	
	.leftBtn {
		width: 200px;
		height: 40px;
		background-color: red;
		margin: 20px;
		cursor: pointer;
		color: white;
		font-size: 16px;
		text-align: center;
		line-height: 40px;
	}
	.hello {
		width: 800px;
		height: 800px;
		border: 1px black solid;
		position: relative;
		margin: 0 auto;
		display: flex;
	}
	.demoImg {
		width: 50px;
		height: 50px;
		border: 1px red solid;
		margin: 16px 100px;
		transition: 1s;
		
	}
	.demoImg img {
		width: 100%;
		height: 100%;
	}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
