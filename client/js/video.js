/**
 * Video
 * =====================
 * Overwrite css of html5 video player and fix 21:9 aspect ratio
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *
 * @link: http://patorjk.com/software/taag/#p=display&f=Doom&t=Netflix
 *
 * @license: This code and contributions have 'MIT License'
 *
 * @param {Array} aspectratio_settings - array from popup
 *
 */
function aspect_ratio(aspectratio_settings) {
	let config = {};
	let aspect_ratio_x = aspectratio_settings.aspect_x; // 1.33 = 21:9 | 1.48 = 32:9
	let aspect_ratio_y = aspectratio_settings.aspect_y;

	/*
	 *	__   __          _         _
	 *	\ \ / /         | |       | |
	 *	 \ V /___  _   _| |_ _   _| |__   ___
	 *	  \ // _ \| | | | __| | | | '_ \ / _ \
	 *	  | | (_) | |_| | |_| |_| | |_) |  __/
	 *	  \_/\___/ \__,_|\__|\__,_|_.__/ \___|
	 */
	if (window.location.href.includes("youtube.com") && aspectratio_settings.youtube === true) {
		config = {
			width: "100%",
			height: "auto"
		};

		let node = document.createElement("style");
		node.setAttribute("id", "aspect_ratio_youtube");
		node.setAttribute("class", `aspect_ratio`);
		node.innerHTML = `body video { transform: scale(${aspect_ratio_x},${aspect_ratio_y}) !important;}`;
		document.body.appendChild(node);
	}

	/*
	 *	 _   _      _    __ _ _
	 *	| \ | |    | |  / _| (_)
	 *	|  \| | ___| |_| |_| |___  __
	 *	| . ` |/ _ \ __|  _| | \ \/ /
	 *	| |\  |  __/ |_| | | | |>  <
	 *	\_| \_/\___|\__|_| |_|_/_/\_\
	*/
	if (window.location.href.includes("netflix.com") && aspectratio_settings.netflix === true) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		let node = document.createElement("style");
		node.setAttribute("id", "aspect_ratio_netflix");
		node.setAttribute("class", `aspect_ratio`);
		node.innerHTML = `body video { transform: translate(-50%, -50%) scale(${aspect_ratio_x},${aspect_ratio_y}) !important;}`;
		document.body.appendChild(node);
	}

	/*
	 *	______     _                  _   _ _     _
	 *	| ___ \   (_)                | | | (_)   | |
	 *	| |_/ / __ _ _ __ ___   ___  | | | |_  __| | ___  ___
	 *	|  __/ '__| | '_ ` _ \ / _ \ | | | | |/ _` |/ _ \/ _ \
	 *	| |  | |  | | | | | | |  __/ \ \_/ / | (_| |  __/ (_) |
	 *	\_|  |_|  |_|_| |_| |_|\___|  \___/|_|\__,_|\___|\___/
	*/
	if (window.location.href.includes("primevideo.com") && aspectratio_settings.primevideo === true) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		let node = document.createElement("style");
		node.setAttribute("id", "aspect_ratio_primevideo");
		node.setAttribute("class", `aspect_ratio`);
		node.innerHTML = `body video { transform: scale(${aspect_ratio_x},${aspect_ratio_y}) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
		document.body.appendChild(node);
	}

	/*
	 *	______      _ _                       _   _
	 *	|  _  \    (_) |                     | | (_)
	 *	| | | |__ _ _| |_   _ _ __ ___   ___ | |_ _  ___  _ __
	 *	| | | / _` | | | | | | '_ ` _ \ / _ \| __| |/ _ \| '_ \
	 *	| |/ / (_| | | | |_| | | | | | | (_) | |_| | (_) | | | |
	 *	|___/ \__,_|_|_|\__, |_| |_| |_|\___/ \__|_|\___/|_| |_|
	 *	                 __/ |
	 *	                |___/
	 */
	if (window.location.href.includes("dailymotion.com") && aspectratio_settings.dailymotion === true) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		function dailymotion_interval() {
			let node = dom.class("dmp_VideoView-content")[0];
			if (node !== undefined) {
				node.setAttribute("style", "width: 100%; height: 100%;");
			}
		}

		setInterval(dailymotion_interval, 1000);

		let node = document.createElement("style");
		node.setAttribute("id", "aspect_ratio_dailymotion");
		node.setAttribute("class", `aspect_ratio`);
		node.innerHTML = `body video { transform: scale(${aspect_ratio_x},${aspect_ratio_y}) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
		document.body.appendChild(node);
	}

	/*
	 *	 _   _ _
	 *	| | | (_)
	 *	| | | |_ _ __ ___   ___  ___
	 *	| | | | | '_ ` _ \ / _ \/ _ \
	 *	\ \_/ / | | | | | |  __/ (_) |
	 *	 \___/|_|_| |_| |_|\___|\___/
	 */
	if (window.location.href.includes("vimeo.com") && aspectratio_settings.vimeo === true) {
		aspect_ratio_x = parseFloat(aspect_ratio_x) + 0.45;
		config = {
			width: "100%",
			height: "100%",
			left: "0",
			top: "0"
		};

		let node = document.createElement("style");
		node.setAttribute("id", "aspect_ratio_vimeo");
		node.setAttribute("class", `aspect_ratio`);
		node.innerHTML = `body video { transform: scale(${aspect_ratio_x},${aspect_ratio_y}) !important; height: ${config.height} !important; left: ${config.left} !important; top: ${config.top} !important;}`;
		document.body.appendChild(node);
	}

	/*
	 *	 _   _  _   _  _   _  _   _ ___________
	 *	| | | || | | || | | || | | |_   _|  _  \
	 *	| | | || | | || | | || | | | | | | | | |
	 *	| | | || | | || | | || | | | | | | | | |
	 *	\ \_/ /\ \_/ /\ \_/ /\ \_/ /_| |_| |/ /
	 *	 \___/  \___/  \___/  \___/ \___/|___/
	 */
	if (window.location.href.includes("vvvvid.it") && aspectratio_settings.vvvvid === true) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		function vvvvid_interval() {
			let node = document.getElementsByClassName("mpe-play-container")[0];
			if (node !== undefined) {
				node.setAttribute("style", "width: 100%; height: 100%;");
			}
			node = document.getElementsByClassName("mpe-play-container")[1];
			if (node !== undefined) {
				node.setAttribute("style", "width: 100%; height: 100%;");
			}
		}

		setInterval(vvvvid_interval, 1000);

		let node = document.createElement("style");
		node.setAttribute("id", "aspect_ratio_vvvvid");
		node.setAttribute("class", `aspect_ratio`);
		node.innerHTML = `body video { transform: scale(${aspect_ratio_x},${aspect_ratio_y}) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
		document.body.appendChild(node);
	}

	/*
	 *	______ _
	 *	|  _  (_)                       _
	 *	| | | |_ ___ _ __   ___ _   _ _| |_
	 *	| | | | / __| '_ \ / _ \ | | |_   _|
	 *	| |/ /| \__ \ | | |  __/ |_| | |_|
	 *	|___/ |_|___/_| |_|\___|\__, |
	 *							__/ |
	 *							|___/
	 */
	if (window.location.href.includes("disneyplus.com") && aspectratio_settings.disney === true) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		let node = document.createElement("style");
		node.setAttribute("id", "aspect_ratio_disney");
		node.setAttribute("class", `aspect_ratio`);
		node.innerHTML = `body video { transform: scale(${aspect_ratio_x},${aspect_ratio_y}) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
		document.body.appendChild(node);
	}

	/*
	 *	 _____                       _                     _ _
	 *	/  __ \                     | |                   | | |
	 *	| /  \/_ __ _   _ _ __   ___| |__  _   _ _ __ ___ | | |
	 *	| |   | '__| | | | '_ \ / __| '_ \| | | | '__/ _ \| | |
	 *	| \__/\ |  | |_| | | | | (__| | | | |_| | | | (_) | | |
	 *	 \____/_|   \__,_|_| |_|\___|_| |_|\__, |_|  \___/|_|_|
	 *	                                    __/ |
	 *	                                   |___/
	*/
	if (window.location.href.includes("crunchyroll.com") && aspectratio_settings.crunchyroll === true) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		let node = document.createElement("style");
		node.setAttribute("id", "aspect_ratio_crunchyroll");
		node.setAttribute("class", `aspect_ratio`);
		node.innerHTML = `body video { transform: scale(${aspect_ratio_x},${aspect_ratio_y}) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
		document.body.appendChild(node);
	}

	/*
	 *	 _____        _ _       _
	 *	|_   _|      (_) |     | |
	 *	  | |_      ___| |_ ___| |__
	 *	  | \ \ /\ / / | __/ __| '_ \
	 *	  | |\ V  V /| | || (__| | | |
	 *	  \_/ \_/\_/ |_|\__\___|_| |_|
	 *
	*/
	if (window.location.href.includes("twitch.tv") && aspectratio_settings.twitch === true) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		let node = document.createElement("style");
		node.setAttribute("id", "aspect_ratio_twitch");
		node.setAttribute("class", `aspect_ratio`);
		node.innerHTML = `body video { transform: scale(${aspect_ratio_x},${aspect_ratio_y}) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
		document.body.appendChild(node);
	}

	/*
	 *	 _____                      _
	 *	|  __ \                    (_)
	 *	| |  \/ ___ _ __   ___ _ __ _  ___
	 *	| | __ / _ \ '_ \ / _ \ '__| |/ __|
	 *	| |_\ \  __/ | | |  __/ |  | | (__
	 *	 \____/\___|_| |_|\___|_|  |_|\___|
	 *
	*/
	var domains_list = aspectratio_settings.domains.split(",");
	for (let i = 0; i < domains_list.length; i++) {
		if (window.location.href.includes(domains_list[i]) && domains_list[i] != "") {
			config = {
				width: "100%",
				height: "auto",
				left: "0",
				top: "0"
			};

			let node = document.createElement("style");
			node.setAttribute("id", `aspect_ratio_generic`);
			node.setAttribute("class", `aspect_ratio`);
			node.innerHTML = `body video { transform: scale(${aspect_ratio_x},${aspect_ratio_y}) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
			document.body.appendChild(node);
			break;
		}
	}
}

window.onload = function() {
	chrome.storage.local.get(["fullscreen", "youtube", "netflix", "primevideo", "dailymotion", "twitch", "vimeo", "vvvvid", "disney", "crunchyroll", "aspect_x", "aspect_y", "domains"], function(aspectratio_settings) {
		if (aspectratio_settings.fullscreen === true) {
			document.addEventListener("fullscreenchange", () => {
				if (document.webkitIsFullScreen) {
					aspect_ratio(aspectratio_settings);
				} else {
					document.getElementsByClassName("aspect_ratio")[0].remove();
				}
			});
		} else {
			aspect_ratio(aspectratio_settings);
		}
	});
};