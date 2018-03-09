<template>
	<div class="wrapper">
		<Header/>
		<Sidebar/>
		<div class="main">
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	import Header from '@/view/common/header';
	import Sidebar from '@/view/common/sidebar';

	export default {
		components:{
			Header,
			Sidebar
		}
	}
</script>

<style scoped lang="less">
	/*页面切换动画*/
	.fade-enter-active,.fade-leave-active{
		transition: opacity .5s;
	}
	.fade-enter{
		opacity: 0;
	}
	.fade-leave{
		opacity: 1;
	}
	.fade-leave-active {
		 opacity:0;
	}
</style>