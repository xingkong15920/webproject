
			function tradeNum() {
				var e = (new Date).getTime(),
					a = new Date,
					t = 224e6 + 6e5 * Math.floor((e - init_date) / 864e5) + 6e5 * (3600 * a.getHours() + 60 * a.getMinutes() + a.getSeconds()) / 86400,
					n = t,
					i = 0,
					o = new CountUp("num_trade", t, n, 0, 5, options);
				o.start(), setInterval(function() {
					10 == ++i && (n += Math.floor(60 * Math.random() + 30), o.update(n), i = 0)
				}, 1e3)
			}

			function merchantNum() {
				var e = (new Date).getTime(),
					a = new Date,
					t = 89176,
					n = t,
					i = new CountUp("num_merchant", t, n, 0, 5, options);
				i.start(), setInterval(function() {
					n += Math.floor(21.25), i.update(n)
				}, 120000)
			}

			function getMonthNumber(e, a) {
				var t = e.substr(0, 4),
					n = a.substr(0, 4),
					i = e.substr(4, 2);
				return 12 * (n - t) + (a.substr(4, 2) - i)
			}

			function cityNum() {
				var e = new Date,
					a = 110 + 3 * getMonthNumber("201705", e.getFullYear().toString() + "" + (e.getMonth() + 1 > 10 ? e.getMonth() + 1 : "0" + (e.getMonth() + 1)).toString()),
					t = a,
					n = new CountUp("num_city", a, t, 0, 5, options);
				n.start(), setInterval(function() {
					t += 1, n.update(t)
				}, 36e6)
			}

			function randomData() {
				return Math.round(1e4 * Math.random())
			};
			var easingFn = function(e, a, t, n) {
					var i = (e /= n) * e,
						o = i * e;
					return a + t * (o * i + -5 * i * i + 10 * o + -10 * i + 5 * e)
				},
				options = {
					useEasing: !0,
					easingFn: easingFn,
					useGrouping: !0,
					separator: ",",
					decimal: ""
				},
				dateStr = "2017/10/1 00:00:00",
				init_date = new Date(dateStr).getTime();
			tradeNum(), merchantNum(), cityNum(), $("#contactbox").on("click", function() {
				easemobim.bind({
					tenantId: "39559",
					hide: !0
				})
			});