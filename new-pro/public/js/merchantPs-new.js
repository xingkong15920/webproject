
var merInfo = (function(){
	function getPws(){
		var merpws = JSON.parse(sessionStorage.getItem('userSh')).refundPassWord
		return merpws
	}
	return {
		getPws:getPws
	}
})()
        
