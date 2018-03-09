/*自定义校验规则*/

/*校验手机号码*/
export function checkMobile(str) {
	const reg = /^1[23456789]\d{9}$/;
	return reg.test(str.trim());
}


