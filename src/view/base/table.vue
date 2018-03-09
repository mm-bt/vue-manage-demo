<template>
	<div class="container">
		<div class="breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>基础组件</el-breadcrumb-item>
				<el-breadcrumb-item>表格</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="content">
			<div class="handle-box">
				<div>
					<el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
						<el-option key="1" label="广东省" value="广东省"></el-option>
						<el-option key="2" label="湖南省" value="湖南省"></el-option>
					</el-select>
					<el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
					<el-button type="primary" icon="search" @click="search">搜索</el-button>
				</div>
				<div>
					<el-button type="success" @click="dialogAddVisible = true">新增</el-button>
				</div>
			</div>
			<div class="table">
				<el-table
					:data="tableData"
					style="width: 100%"
					border>
					<el-table-column type="expand">
						<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand">
							<el-form-item label="商品名称">
							<span>{{ props.row.name }}</span>
							</el-form-item>
							<el-form-item label="所属店铺">
							<span>{{ props.row.shop }}</span>
							</el-form-item>
							<el-form-item label="商品 ID">
							<span>{{ props.row.id }}</span>
							</el-form-item>
							<el-form-item label="店铺 ID">
							<span>{{ props.row.shopId }}</span>
							</el-form-item>
							<el-form-item label="商品分类">
							<span>{{ props.row.category }}</span>
							</el-form-item>
							<el-form-item label="店铺地址">
							<span>{{ props.row.address }}</span>
							</el-form-item>
							<el-form-item label="商品描述">
							<span>{{ props.row.desc }}</span>
							</el-form-item>
						</el-form>
						</template>
					</el-table-column>
					<el-table-column label="商品 ID" prop="id" sortable></el-table-column>
					<el-table-column label="商品名称" prop="name"></el-table-column>
					<el-table-column label="描述" prop="desc" width="450"></el-table-column>
					<el-table-column label="操作" width="150">
						<template slot-scope="scope">
							<el-button size="small" @click="handleEdit(scope.$index, scope.row)" type="primary">编辑</el-button>
							<el-button size="small" @click="handleDelete(scope.$index, scope.row)" type="danger">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

				<div class="pagination">
					<el-pagination
						@current-change ="handleCurrentChange"
						background
						layout="total, prev, pager, next, jumper"
						:total="1000">
					</el-pagination>
				</div>
			</div>

			<el-dialog title="添加" :visible.sync="dialogAddVisible" width="40%">
				<el-form :model="addForm" :rules="addFormRules" ref="addForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="商品名称" prop="name">
						<el-input v-model="addForm.name" :maxlength="20" class="input-width"></el-input>
					</el-form-item>
					<el-form-item label="商品描述" prop="desc">
						<el-input v-model="addForm.desc" type="textarea" :rows="3" class="input-width"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogAddVisible = false">取 消</el-button>
					<el-button type="primary" @click="submitAddForm('addForm')">确 认</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				url: './static/vuetable.json',
				// tableData: [],
				cur_page: 1,
				select_cate: '',
				select_word: '',
				is_search: false,

				 tableData: [{
					id: '12987122',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}, {
					id: '12987123',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}, {
					id: '12987125',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}, {
					id: '12987126',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}],
				// 新增
				dialogAddVisible: false,
				addForm: {
					name: '',
					telphone: '',
					position: ''
				},
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
			}
		},
		created(){
			// this.getData();
		},
		computed: {

		},
		methods: {
			// 分页
			handleCurrentChange(val){
				this.$message('点击第'+(val)+'页');
				this.cur_page = val;
				// this.getData();
			},
			// getData(){
			// 	let self = this;
			// 	if(process.env.NODE_ENV === 'development'){
			// 		self.url = '/ms/table/list';
			// 	};
			// 	self.$axios.post(self.url, {page:self.cur_page}).then((res) => {
			// 		self.tableData = res.data.list;
			// 	})
			// },
			search(){
				this.is_search = true;
			},
			handleEdit(index, row) {
				this.$message('编辑第'+(index+1)+'行');
			},
			handleDelete(index, row) {
				this.$message.error('删除第'+(index+1)+'行');
			},
			// 新增
			submitAddForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
		}
	}
</script>

<style scoped >
	.handle-box{
		margin-bottom: 20px;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.handle-select{
		width: 120px;
	}
	.handle-input{
		width: 300px;
		display: inline-block;
	}

	.demo-table-expand {
		font-size: 0;
	}
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}

	.input-width {
		width: 85%;
	}
</style>