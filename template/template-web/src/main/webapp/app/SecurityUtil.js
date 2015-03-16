define([ ], function() {

	var SecurityUtil = {
		isAuthorised : function(data, authoritiesCollection) {
			var self = this;
			if ($.isArray(data)) {
				var lnt = data.length;
				for (var i = 0; i < lnt; i++) {
					if (self.permCheck(data[i], authoritiesCollection)) {
						return true;
					}
				}
			} else {
				return self.permCheck(data, authoritiesCollection);
			}
			return false;
		},

		permCheck : function(text, authoritiesCollection) {
			var isAuthorised = false;
			var authorities = authoritiesCollection;
			$.each(authorities, function(key, value) {
				if (authorities[key] === text) {
					isAuthorised = true;
				}
			});
			return isAuthorised;
		}
	};
	return SecurityUtil;
});
