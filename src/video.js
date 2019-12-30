/**
 * Video
 * =====================
 * Overwrite css of html5 video player and fix 21:9 aspect ratio
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */
window.onload = function() {
	let config = {};
	let aspect_ratio = "1.33"; // 1.33 = 21:9 | 1.48 = 32:9

	/*
	 *	__   __          _         _
	 *	\ \ / /         | |       | |
	 *	 \ V /___  _   _| |_ _   _| |__   ___
	 *	  \ // _ \| | | | __| | | | '_ \ / _ \
	 *	  | | (_) | |_| | |_| |_| | |_) |  __/
	 *	  \_/\___/ \__,_|\__|\__,_|_.__/ \___|
	 */
	if (window.location.href.includes("youtube.com")) {
		config = {
			width: "100%",
			height: "auto"
		};

		let node = document.createElement("style");
		node.innerHTML = `body video { transform: scale(${aspect_ratio},1) !important;}`;
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
	if (window.location.href.includes("netflix.com")) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		let node = document.createElement("style");
		node.innerHTML = `body video { transform: scale(${aspect_ratio},1) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
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
	if (window.location.href.includes("primevideo.com")) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		let node = document.createElement("style");
		node.innerHTML = `body video { transform: scale(${aspect_ratio},1) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
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
	if (window.location.href.includes("dailymotion.com")) {
		config = {
			width: "100%",
			height: "auto",
			left: "0",
			top: "0"
		};

		function dailymotion_interval() {
			let node = document.getElementsByClassName("dmp_VideoView-content")[0];
			if (node !== undefined) {
				node.setAttribute("style", "width: 100%; height: 100%;");
			}
		}

		setInterval(dailymotion_interval, 1000);

		let node = document.createElement("style");
		node.innerHTML = `body video { transform: scale(${aspect_ratio},1) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
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
	if (window.location.href.includes("vimeo.com")) {
		aspect_ratio = parseFloat(aspect_ratio) + 0.45;
		config = {
			width: "100%",
			height: "100%",
			left: "0",
			top: "0"
		};

		let node = document.createElement("style");
		node.innerHTML = `body video { transform: scale(${aspect_ratio},1) !important; height: ${config.height} !important; left: ${config.left} !important; top: ${config.top} !important;}`;
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
	if (window.location.href.includes("vvvvid.it")) {
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
		node.innerHTML = `body video { transform: scale(${aspect_ratio},1) !important; left: ${config.left} !important; top: ${config.top} !important;}`;
		document.body.appendChild(node);
	}

};