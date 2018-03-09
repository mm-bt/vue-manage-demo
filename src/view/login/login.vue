<template>
	<div class="login-wrap">
		<div class="ms-title">登录</div>
		<div class="ms-login">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
				<el-form-item prop="username">
					<el-input placeholder="用户名" v-model="ruleForm.username"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
				</el-form-item>
				<div class="login-btn">
					<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				</div>
				<p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
			</el-form>
		</div>
	</div>
</template>

<script>
	import storage from '@/util/storage';

	export default {
		data: function(){
			return {
				ruleForm: {
					username: '',
					password: ''
				},
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// 登陆成功
						let adminer = {
							username: this.ruleForm.username,
						}
						// 存储登陆信息
						storage.setItem('adminUser', adminer);
						//分发管理员登录的action
						this.$store.dispatch('adminlogin');
						// 跳转到后端首页
						this.$router.push('/home');

						// Fetch.post('/api/test/index.php', self.ruleForm).then(response => {
						// 	  // const data = response.data;
						// 	  console.log(response.data);
						// 	  // Cookies.set('Admin-Token', response.data.token);
						// 	  // commit('SET_TOKEN', data.token);
						// 	  // commit('SET_EMAIL', email);
						// 	  // resolve();

						// 	  self.$router.push('/readme');
							  
						// }).catch(error => {
						// 	console.log(error);
						// 	  // reject(error);
						// });

						// Fetch.get('/api/test/index.php').then(response => {
						// 	  // const data = response.data;
						// 	  console.log(response.data);
						// 	  // Cookies.set('Admin-Token', response.data.token);
						// 	  // commit('SET_TOKEN', data.token);
						// 	  // commit('SET_EMAIL', email);
						// 	  // resolve();
						// }).catch(error => {
						// 	console.log(error);
						// 	  // reject(error);
						// });
						// localStorage.setItem('ms_username',self.ruleForm.username);
						// self.$router.push('/readme');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style scoped>
	.login-wrap{
		position: relative;
		width:100%;
		height:100%;
		background: #324157;
	}
	.ms-title{
		position: absolute;
		top:50%;
		width:100%;
		margin-top: -230px;
		text-align: center;
		font-size:30px;
		color: #fff;

	}
	.ms-login{
		position: absolute;
		left:50%;
		top:50%;
		width:300px;
		height:160px;
		margin:-150px 0 0 -190px;
		padding:40px;
		border-radius: 5px;
		background: #fff;
	}
	.login-btn{
		text-align: center;
	}
	.login-btn button{
		width:100%;
		height:36px;
	}
</style>