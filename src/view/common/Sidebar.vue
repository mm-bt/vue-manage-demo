<template>
	<div class="sidebar">
		<el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router
			background-color="#324157"
			text-color="#bfcbd9"
			active-text-color="#20a0ff"
		>
			<template v-for="item in routes">
				<template v-if="item.children">
					<el-submenu :index="item.path">
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{item.name}}</span>
						</template>
						<el-menu-item v-for="(subItem,i) in item.children" :key="i" :index="subItem.path">
							{{ subItem.name }}
						</el-menu-item>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.path">
						<i :class="item.icon"></i>
						<span slot="title">{{item.name}}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {

				isCollapse: true

				
			}
		},
		computed:{
			routes() {
				return this.$router.options.routes[1].children
			}
		}
	}
</script>

<style scoped lang="less">
	.sidebar{
		display: block;
		position: absolute;
		width: 200px;
		left: 0;
		top: 50px;
		bottom:0;
		background: #324157;

	}
	.sidebar > ul {
		height:100%;
	}

</style>
