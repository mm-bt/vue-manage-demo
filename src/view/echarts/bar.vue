<template>
	<div class="container">
		<div class="breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>Echarts</el-breadcrumb-item>
				<el-breadcrumb-item>柱状图</el-breadcrumb-item>
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
				title: { text: 'ECharts 柱状图' },
				tooltip: {},
				xAxis: {
					data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			});
		},
		methods:{

		}
	}
</script>

<style scoped>
	
</style>