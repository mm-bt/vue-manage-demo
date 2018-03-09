<template>
	<div class="container">
		<div class="breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>Echarts</el-breadcrumb-item>
				<el-breadcrumb-item>折线图</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="content">
			<div id="container" style="width:600px; height:500px"></div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts';

	export default {
		data: function(){
			return {}
		},
		computed:{

		},
		mounted() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('container'));
			// 绘制图表
			myChart.setOption({
				title: { text: 'ECharts 折线图' },
				tooltip: {},
				 xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line'
				}]
			});
		},
		methods:{

		}
	}
</script>

<style scoped>
	
</style>