<template>
	<div class="container">
		<div class="breadcrumb">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>Editor</el-breadcrumb-item>
				<el-breadcrumb-item>Markdown</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="content {full-page: fullPageStatus }">
			<div class="mark-tool">
				<ul class="mark-item-left">
					<li class="mark-button" @click="addStrong" title="加粗">
						<a class="mark-button-icon" style="background-position: 0px 0px;"></a>
					</li>
					<li class="mark-button" @click="addItalic" title="斜体">
						<a class="mark-button-icon" style="background-position: -20px 0px;"></a>
					</li>
					<li class="mark-button" @click="addLink" title="链接">
						<a class="mark-button-icon" style="background-position: -40px 0px;"></a>
					</li>
					<li class="mark-button" @click="addQuote" title="引用">
						<a class="mark-button-icon" style="background-position: -60px 0px;"></a>
					</li>
					<li class="mark-button" @click="addCode" title="代码">
						<a class="mark-button-icon" style="background-position: -80px 0px;"></a>
					</li>
					<li class="mark-button" @click="addImage" title="图片">
						<a class="mark-button-icon" style="background-position: -100px 0px;"></a>
					</li>
					<li class="mark-button" @click="addOl" title="数字列表">
						<a class="mark-button-icon" style="background-position: -120px 0px;"></a>
					</li>
					<li class="mark-button" @click="addUl" title="普通列表">
						<a class="mark-button-icon" style="background-position: -140px 0px;"></a>
					</li>
					<!-- <li class="mark-button" @click="addHTitle" title="标题">
						<a class="mark-button-icon" style="background-position: -160px 0px;"></a>
					</li> -->
					<li class="mark-button" @click="addHTitle(1)" title="标题H1">
						<a class="mark-button-title" >H1</a>
					</li>
					<li class="mark-button" @click="addHTitle(2)" title="标题H2">
						<a class="mark-button-title" >H2</a>
					</li>
					<li class="mark-button" @click="addHTitle(3)" title="标题H3">
						<a class="mark-button-title" >H3</a>
					</li>
					<li class="mark-button" @click="addHTitle(4)" title="标题H4">
						<a class="mark-button-title" >H4</a>
					</li>
					<li class="mark-button" @click="addHTitle(5)" title="标题H5">
						<a class="mark-button-title" >H5</a>
					</li>
					<li class="mark-button" @click="addHTitle(6)" title="标题H6">
						<a class="mark-button-title" >H6</a>
					</li>
					<li class="mark-button" @click="addLine" title="分割线">
						<a class="mark-button-icon" style="background-position: -180px 0px;"></a>
					</li>
			<!-- 		<li class="mark-button" @click="addStrong" title="撤销">
						<a class="mark-button-icon" style="background-position: -200px 0px;"></a>
					</li>
					<li class="mark-button" @click="addStrong" title="重做">
						<a class="mark-button-icon" style="background-position: -220px 0px;"></a>
					</li>
					<li class="mark-button" @click="addStrong" title="strong">
						<a class="mark-button-icon" style="background-position: -300px 0px;"></a>
					</li> -->
				</ul>

				<!-- <ul class="mark-item-right">
					<li class="mark-button" @click="fullPageFn" title="全屏">
						<a class="mark-button-icon" style="background-position: -240px 0px;"></a>
					</li>
					<li class="mark-button" @click="previewFn" title="编辑模式">
						<a class="mark-button-icon" style="background-position: -320px 0px;"></a>
					</li>
					<li class="mark-button" @click="addStrong" title="实况模式">
						<a class="mark-button-icon" style="background-position: -340px 0px;"></a>
					</li>
					<li class="mark-button" @click="previewAllFn" title="预览模式">
						<a class="mark-button-icon" style="background-position: -360px 0px;"></a>
					</li>
				</ul> -->
	
			</div>
			<div class="mark-content">
				<div class="mark-content-edit">
					<textarea name="" class="mark-content-input mdEditor" v-model="input"></textarea>
				</div>
				<div class="mark-content-preview previewContainer" v-html="compiledMarkdown"></div>
			</div>

			<div class="bottom">
				<el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
			</div>

		</div>
	</div>
</template>

<script>
	// import { markdownEditor } from 'vue-simplemde';
	import marked from 'marked';
	import range from '../../../static/js/rangeFn.js';
	import hljs from '../../../static/js/highlight.min.js';

	 marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false,
		highlight(code) {
			return hljs.highlightAuto(code).value
		}
	});

	function insertContent(val, that) {
		let textareaDom = document.querySelector('.mdEditor');
		let value = textareaDom.value;
		let point = range.getCursortPosition(textareaDom);
		let lastChart = value.substring(point - 1, point);
		let lastFourCharts = value.substring(point - 4, point);
		if (lastChart != '\n' && value != '' && lastFourCharts != '    ') {
			val = '\n' + val;
			range.insertAfterText(textareaDom, val);
		} else {
			range.insertAfterText(textareaDom, val);
		}
		that.input = document.querySelector('.mdEditor').value;
	}

// 	 //省去声明...    
// document.getElementById('content').innerHTML =
//       marked('# Marked in browser\n\nRendered by **marked**.');

	export default {
		data(){
			return {
				input: '',
				fullPageStatus: false
			}
		},
		components: {
			// markdownEditor
		},
		 // mounted(){
		 //   // this.initialize();
		 //   this.markdown()
		 //  },

		computed: {
			compiledMarkdown () {
				return marked(this.input, { 
					sanitize: true
				});
			}
		},
		methods: {

			addStrong() {
				let textareaDom = document.querySelector('.mdEditor');
				let value = textareaDom.value;
				let point = range.getCursortPosition(textareaDom);
				let lastChart = value.substring(point - 1, point);
				insertContent('****', this);
				if (lastChart != '\n' && value != '') {
					range.setCaretPosition(textareaDom, point + 3);
				} else {
					range.setCaretPosition(textareaDom, point + 2);
				}
			},
			addItalic() {
				let textareaDom = document.querySelector('.mdEditor');
				let value = textareaDom.value;
				let point = range.getCursortPosition(textareaDom);
				let lastChart = value.substring(point - 1, point);
				insertContent('**', this);
				if (lastChart != '\n' && value != '') {
					range.setCaretPosition(textareaDom, point + 2);
				} else {
					range.setCaretPosition(textareaDom, point + 1);
				}
			},
			 addLink() {
				insertContent("[Vue](https://cn.vuejs.org/images/logo.png)", this);
			},
			addQuote() {
				let textareaDom = document.querySelector('.mdEditor');
				let value = textareaDom.value;
				let point = range.getCursortPosition(textareaDom);
				let lastChart = value.substring(point - 1, point);
				insertContent('> ', this);
				if (lastChart != '\n' && value != '') {
					range.setCaretPosition(textareaDom, point + 3);
				} else {
					range.setCaretPosition(textareaDom, point + 2);
				}
			},
			addCode() {
				let textareaDom = document.querySelector('.mdEditor');
				let value = textareaDom.value;
				let point = range.getCursortPosition(textareaDom);
				let lastChart = value.substring(point - 1, point);
				insertContent('```\n\n```', this);
				if (lastChart != '\n' && value != '') {
					range.setCaretPosition(textareaDom, point + 5);
				} else {
					range.setCaretPosition(textareaDom, point + 4);
				}
			},
			addImage(evt) {
				insertContent("![Vue](https://cn.vuejs.org/images/logo.png)", this);
			},
			addOl() {
				insertContent('1. ', this);
			},
			addUl() {
				insertContent('* ', this);
			},
			addHTitle(index) {
				let tmp = '';
				switch (index) {
					case 1:
						tmp = '# ';
						break;
					case 2:
						tmp = '## ';
						break;
					case 3:
						tmp = '### ';
						break;
					case 4:
						tmp = '#### ';
						break;
					case 5:
						tmp = '##### ';
						break;
					case 6:
						tmp = '###### ';
						break;
					default:
						break;
				}
				insertContent(tmp, this);
			},
			addLine() {
				insertContent('\n----\n', this);
			},
			// fullPageFn() {
			// 	this.fullPageStatus = !this.fullPageStatus;
			// 	let maxEditScrollHeight=document.querySelector('.mdEditor').scrollHeight-document.querySelector('.mdEditor').clientHeight;
			// 	let maxPreviewScrollHeight=document.querySelector('.previewContainer').scrollHeight-document.querySelector('.previewContainer').clientHeight;
			// 	this.maxEditScrollHeight = maxEditScrollHeight
			// 	this.maxPreviewScrollHeight = maxPreviewScrollHeight
			// },
			// previewFn() {
			// 	if (!this.editStatus) {
			// 		this.editStatus = true;
			// 		this.previewStatus = !this.previewStatus;
			// 	} else {
			// 		this.previewStatus = !this.previewStatus;
			// 	}
			// },
			// previewAllFn() {
			// 	if (!this.editStatus && this.previewStatus) {
			// 		this.editStatus = true;
			// 		this.previewStatus = true;
			// 	} else {
			// 		this.editStatus = false;
			// 		this.previewStatus = true;
			// 	}
			// },
			  // Object.assign(configs, this.configs);
			  // 判断是否开启代码高亮
			  // if (this.highlight) {
			  //   configs.renderingConfig.codeSyntaxHighlighting = true;
			  // }
			  // 设置是否渲染输入的html
			  // marked.setOptions({ sanitize: this.sanitize });
			  // 实例化编辑器
			  // this.simplemde = new SimpleMDE(configs);
			  // 添加自定义 previewClass
			  // const className = this.previewClass || '';
			  // this.addPreviewClass(className);
			  // 绑定事件
			  // this.bindingEvents();
			// }
		  }
	}
</script>

<style scoped lang="less">

	&.full-page {
		position: fixed;
		z-index: 1000;
		left: 0;
		top: 0;
	}

	.mark-tool {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0 5px;
		border: 1px solid #CCC;

		.mark-button-icon {
			cursor: pointer;
			display: block;
			border: 5px solid #FFF;
			width: 20px;
			height: 20px;
			background-repeat: no-repeat;
			background-size: 380px 60px;
			background-image: url(./editor_icon.png);
		}

		.mark-button-title {
			color: #999;
			font-size: 14px;
			line-height: 20px;
			width: 20px;
			height: 20px;
			cursor: pointer;
			display: block;
			border: 5px solid #FFF;
		}

		.mark-item-left {
			list-style: none;
			margin: 0;
			padding: 0 5px;
			background-color: #FFF;
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.mark-item-right {
			list-style: none;
			margin: 0;
			padding: 0 5px;
			background-color: #FFF;
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.mark-button {
			margin: 0 2px;
		}
	}
	
	.mark-content {
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 432px;
		overflow: hidden;
		border: 1px solid #CCC;
		border-top: none;

		.mark-content-edit {
			width: 100%;
			height: auto;
			height: 432px;
			overflow: hidden;

			.mark-content-input {
				height: 100%;
				width: 100%;
				height: 420px;
				padding: 6px 0;
				border: none;
				font-size: 14px;
				line-height: 1.6;
				color: #555;
				outline: none;
				resize: none;
			}
		}
	
		.mark-content-preview {
			width: 100%;
			height: 100%;
			overflow: auto;
			padding: 10px;
			height: 420px;
			background-color: #f6f6f6;
			line-height: 1.6;
			word-wrap: break-word;
			border-left: 1px solid #CCC;
			overflow: auto;
		}
	}

	.bottom {
		margin-top: 10px;
	}
</style>