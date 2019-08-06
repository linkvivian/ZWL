

(function($) {
		$.fn.typewriter = function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);  //抽取从progress开始指定长度的字符串
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;  //substring是0到它-1的字符串
				} else {
					progress++;
				}

				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));  //progress & 1判断奇偶，偶为0 奇为1，应该是实现跳动
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
	};
})(jQuery);
