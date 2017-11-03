(function($, owner) {
	/**
	 * 获取黑名单
	 **/
	owner.getBlacklist = function() {
		var blacklist = localStorage.getItem('$blacklist') || "{}";
		return JSON.parse(blacklist);
	};

	/**
	 * 设置黑名单
	 **/
	owner.setBlacklist = function(blacklist) {
		blacklist = blacklist || {};
		localStorage.setItem('$blacklist', JSON.stringify(blacklist));
	};
	
	/**
	 * 判断是否在黑名单中
	 **/
	owner.isInBlackList = function(num,type){
		switch(type){
			case "msg":
				var msg = owner.getBlacklist().msg;
				if(msg==null||msg==''){
					return true;
				}else if(msg.contains(num)){
					return false;
				}else{
					return true;
				}
			case "tlp":
				var tlp = owner.getBlacklist().tlp;
				if(tlp==null||tlp==''){
					return true;
				}else if(tlp.contains(num)){
					return false;
				}else{
					return true;
				}
		}
	};
}(mui, window.app = {}));