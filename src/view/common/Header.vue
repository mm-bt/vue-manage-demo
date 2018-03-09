<template>
	<div class="header">
		<div class="logo">管理后台</div>
		<div class="user-info">
			<el-dropdown trigger="click" @command="handleCommand">
				<span class="el-dropdown-link">
					<img class="user-logo" src="../../../static/img/img.jpg">
					{{adminer.username}}
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="loginout">退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>
<script>
import storage from '@/util/storage';
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			adminer () {
				return this.$store.state.adminer;
			}
		},
		methods:{
			handleCommand(command) {
				if(command == 'loginout'){
					this.$confirm('退出后将返回管理员登录界面, 是否退出登录?', '真的要退出吗？', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						this.$store.dispatch('adminlogout');
						this.$router.push('/login');
					}).catch(() => {

					});
				}
			}
		}
	}
</script>
<style scoped lang="less">
	.header {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 50px;
		font-size: 22px;
		line-height: 50px;
		color: #fff;
		background-color: #242f42;

		.logo{
			float: left;
			width:200px;
			text-align: center;
		}

		.user-info {
			float: right;
			padding-right: 50px;
			font-size: 16px;
			color: #fff;

			.el-dropdown-link{
				position: relative;
				display: inline-block;
				padding-left: 40px;
				color: #fff;
				cursor: pointer;
				vertical-align: middle;

				.user-logo{
					position: absolute;
					left:0;
					top:10px;
					width:30px;
					height:30px;
					border-radius: 50%;
				}
			}
		}
	}
</style>