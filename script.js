class Component {
	constructor(item_name, price, link, image, attributes = {}) {
		this.item_name = item_name;
		this.price = price;
		this.link = link;
		this.image = image;
		this.attributes = attributes;
	}
}

// Data komponen (contoh data, perlu disesuaikan dengan data sebenarnya)
const cpus = [
	new Component('AMD Ryzen 5 5600G', 1929001, 'https://www.tokopedia.com/queenprocessor/amd-ryzen-5-5600g-3-9ghz-6-cpu-cores-12-threads-7-gpu-cores-box', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/12/5c1979f4-2691-46bd-b210-16993e39dce5.jpg', {
		boost_clock: 4.4,
		core: 6,
		threads: 12,
		soket: 'AM4',
		type_ddr: 'DDR4',
	}),
	new Component('Intel Core i5 14400F', 3349001, 'https://www.tokopedia.com/queenprocessor/cpu-processor-intel-core-i5-14400f-3-5ghz-box-socket-1700', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/12/1/e0f56fda-bd39-41bd-bf61-0ed8378578d0.jpg', {
		boost_clock: 4.7,
		core: 10,
		threads: 16,
		soket: 'LGA1700',
		type_ddr: 'DDR5',
	}),
	new Component('AMD Ryzen 7 5700X', 2859000, 'https://www.tokopedia.com/enterkomputer/amd-ryzen-7-5700x-3-4ghz-up-to-4-6ghz-cache-32mb-am4-box-8-core', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/5/b0c913b5-9839-4cc6-92b1-e3fb906fc883.png', {
		boost_clock: 4.6,
		core: 8,
		threads: 16,
		soket: 'AM4',
		type_ddr: 'DDR4',
	}),
];

const psus = [
	new Component(
		(item_name = 'PSU Innovation 500W 80+ Gold'),
		573000,
		'https://www.tokopedia.com/jayakomputa-1/psu-innovation-500w-80-gold-power-supply-garansi-8th-ganti-baru?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/5/21/7b65379b-6b16-4661-91e1-6e1bbbe2aa1b.jpg',
		{ rating: '80+ GOLD', daya: 550 }
	),
	new Component((item_name = 'MSI MAG A650BN 650W 80+ Bronze'), 900000, 'https://www.tokopedia.com/msi-id/msi-mag-a650bn-650w-80-bronze-psu', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/11/c414467d-95d5-47d8-9a5f-e114e91d1a6e.jpg', {
		rating: '80+ Bronze',
		daya: 650,
	}),
	new Component((item_name = 'MSI MPG A1000G 1000W 80+ GOLD'), 2740000, 'https://www.tokopedia.com/msi-id/msi-mpg-a1000g-1000w-80-gold-psu', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/11/bc293d61-4af2-4d61-9ad2-802bb849ce72.jpg', {
		rating: '80+ GOLD',
		daya: 1000,
	}),
];

const casings = [
	new Component((item_name = 'Alseye Casing PC Gaming Pinwheel - Black'), 550000, 'https://www.tokopedia.com/alseyeofficial/alseye-casing-pc-gaming-pinwheel-black', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/6/3cb7ec58-4cfd-4678-a7b1-50e57a61b5eb.jpg', {
		size_casing: 'ATX',
	}),
	new Component(
		(item_name = 'Einarex Kiem | Casing Pc E-Atx | Cpu Pc Case Gaming Original Best'),
		798000,
		'https://www.tokopedia.com/tktopan/einarex-kiem-casing-pc-e-atx-cpu-pc-case-gaming-original-best?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/9/1e24b1c2-69b5-4215-8342-7b1d4362f8fd.jpg',
		{ size_casing: 'E-ATX' }
	),
	new Component(
		(item_name = 'Gamemax Infinity Mini White Black | Casing PC M-ATX ITX | CPU PC Case - Hitam'),
		350000,
		'https://www.tokopedia.com/foursquarecomp/gamemax-infinity-mini-white-black-casing-pc-m-atx-itx-cpu-pc-case-hitam-7673e?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/8/af57f9f4-7366-4f5e-a166-0055dc8ccdba.png',
		{ size_casing: 'Mini ITX' }
	),
	new Component(
		(item_name = 'CASING PC MINI MICRO ATX CASING KOMPUTER STANDART - CASING ONLY'),
		200000,
		'https://www.tokopedia.com/dnetwork-1/casing-pc-mini-micro-atx-casing-komputer-standart-casing-only-ea446?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/1/467e6b32-3390-470c-aca0-473703d8f2b0.jpg',
		{ size_casing: 'Micro ATX' }
	),
];

const storages = [
	new Component(
		(item_name = 'SSD ADATA SU650 256GB - SSD SATA 3 / SSD SATA III - SSD 2.5 inch'),
		415000,
		'https://www.tokopedia.com/adataxpgofficialstore/ssd-adata-su650-256gb-ssd-sata-3-ssd-sata-iii-ssd-2-5-inch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/20/84a571b8-af9c-4e8c-b769-9ad376018a55.jpg',
		{ read: 520, write: 450, size: 256, type: 'SATA' }
	),
	new Component(
		(item_name = 'ADATA SSD XPG SX6000 PRO 256GB M.2 NVME PCIE GEN 3X4 RESMI / 256GB'),
		315000,
		'https://www.tokopedia.com/swiftcomp/adata-ssd-xpg-sx6000-pro-256gb-m-2-nvme-pcie-gen-3x4-resmi-256gb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/15/80ba62ea-1050-47f9-b1d2-cce3ac7986cf.png',
		{ read: 2100, write: 1500, size: 256, type: 'M.2 NVME' }
	),
	new Component((item_name = 'SSD V-Gen 512GB - Sata 3 VGen 512 GB'), 542000, 'https://www.tokopedia.com/jayapc/ssd-v-gen-512gb-sata-3-vgen-512-gb?extParam=ivf%3Dfalse%26src%3Dsearch', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/26/283ddb6b-dd73-457b-846b-156ffa494d56.jpg', {
		read: 530,
		write: 477,
		size: 512,
		type: 'SATA',
	}),
];

const rams = [
	new Component(
		(item_name = 'TEAM T-CREATE EXPERT RAM 32GB 2x16GB DDR4 3600Mhz GREY'),
		1055000,
		'https://www.tokopedia.com/agreskomputerofficial/team-t-create-expert-ram-32gb-2x16gb-ddr4-3600mhz-grey?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/26/c846f931-eaa1-4093-8b11-2fe900b820d3.jpg',
		{ size_ram: 32, speed_ram: 3600, type_ddr: 'DDR4' }
	),
	new Component(
		(item_name = 'TEAM T-FORCE DELTA RAM DDR5 32GB (16GBX2) PC-5600 RGB WHITE'),
		1735000,
		'https://www.tokopedia.com/agreskomputerofficial/team-t-force-delta-ram-ddr5-32gb-16gbx2-pc-5600-rgb-white?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/26/6b3a716b-a6a3-4585-b763-f0e1f7473986.jpg',
		{ size_ram: 32, speed_ram: 5600, type_ddr: 'DDR5' }
	),
	new Component(
		(item_name = 'ADATA XPG D50 RAM PC DDR4 8GB 16GB 32GB PC25600 3200MHz SINGLE DUAL - Putih, 8GB DUAL'),
		998000,
		'https://www.tokopedia.com/adataxpgofficialstore/adata-xpg-d50-ram-pc-ddr4-8gb-16gb-32gb-pc25600-3200mhz-single-dual-putih-8gb-dual?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/15/999d4f5e-5574-4443-b7b8-040b41e861d3.jpg',
		{ size_ram: 16, speed_ram: 3200, type_ddr: 'DDR4' }
	),
];

const motherboards = [
	new Component(
		(item_name = 'Motherboard KYO KAIZEN A520M PRO AMD AM4 A520 DDR4 Mobo A520M PRO'),
		750000,
		'https://www.tokopedia.com/kyo-official/motherboard-kyo-kaizen-a520m-pro-amd-am4-a520-ddr4-mobo-a520m-pro?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/8/535c9b96-39ab-43ac-878e-d1c95c67126a.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR4', soket_mobo: 'AM4', support_storage: 'SATA' }
	),
	new Component(
		(item_name = 'Motherboard ASROCK - B450M-HDV R4.0 Ryzen AM4 Micro ATX Form Factor'),
		979000,
		'https://www.tokopedia.com/nanokomputer/motherboard-asrock-b450m-hdv-r4-0-ryzen-am4-micro-atx-form-factor?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/23/9b384a7e-fac1-4b50-ac1b-e59f9b9f18d6.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR4', soket_mobo: 'AM4', support_storage: 'M.2 NVME' }
	),
	new Component(
		(item_name = 'KYO SOYO iCRAFT B760 WIFI Motherboard Intel B760 LGA1700 DDR5 M-ATX'),
		2350000,
		'https://www.tokopedia.com/kyo-official/kyo-soyo-icraft-b760-wifi-motherboard-intel-b760-lga1700-ddr5-m-atx',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/8/18508f25-0740-4b6b-8ff7-53d4df150a87.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR5', soket_mobo: 'LGA1700', support_storage: 'SATA' }
	),
];

const monitors = [
	new Component(
		(item_name = 'MSI MONITOR PRO MP243XW - 24 inch Full HD, IPS 100Hz, 24" - WHITE'),
		1555000,
		'https://www.tokopedia.com/tokoexpert/msi-monitor-pro-mp243xw-24-inch-full-hd-ips-100hz-24-white?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/20/a1664449-161c-4eaa-8f86-978e227c28dc.jpg',
		{ size_monitor: 24, refresh_rate: 100 }
	),
	new Component(
		(item_name = 'SAMSUNG Monitor 27" inch LF27T450 FHD IPS 75Hz Bezel-less F27T450 T45F - 27" F27T450, Monitor T45F'),
		2215000,
		'https://www.tokopedia.com/kliksierrra/samsung-monitor-27-inch-lf27t450-fhd-ips-75hz-bezel-less-f27t450-t45f-27-f27t450-monitor-t45f-d6e78',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/20/b4601246-b507-4b0e-aef7-90a7fb828307.png',
		{ size_monitor: 27, refresh_rate: 75 }
	),
	new Component(
		(item_name = 'Monitor Xiaomi A27i LED 27 Inch IPS 100Hz Desktop Low Blue Light HDMI'),
		1493000,
		'https://www.tokopedia.com/ichi-tech/monitor-xiaomi-a27i-led-27-inch-ips-100hz-desktop-low-blue-light-hdmi?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/21/e494a4cb-ea12-4b91-a01b-2f54b1a7083e.jpg',
		{ size_monitor: 27, refresh_rate: 100 }
	),
];

const mouses = [
	new Component(
		(item_name = 'Mouse Gaming Lenovo Legion M500 RGB Gaming Mouse (wired) - GY50T26467'),
		699000,
		'https://www.tokopedia.com/lenovo-tangerang/mouse-gaming-lenovo-legion-m500-rgb-gaming-mouse-wired-gy50t26467?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/5/30/3a655333-b0a1-4dba-a410-7e843550c6eb.jpg',
		{ dpi: 16000 }
	),
	new Component(
		(item_name = 'Logitech G203 Mouse Gaming Wired RGB Lightsync with Macro [FS] - Hitam'),
		245000,
		'https://www.tokopedia.com/logitech-g/logitech-g203-mouse-gaming-wired-rgb-lightsync-with-macro-fs-hitam?extParam=cmp%3D1%26ivf%3Dtrue%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/15/415d6387-1b49-4f6c-aa86-4aec4fbdf893.jpg',
		{ dpi: 8000 }
	),
	new Component(
		(item_name = 'Rexus Mouse Gaming Bara X17 Crystal RGB'),
		200000,
		'https://www.tokopedia.com/v-technology/rexus-mouse-gaming-bara-x17-crystal-rgb?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/19/502207a8-3e5f-4486-aea7-f471225b70be.jpg',
		{ dpi: 12800 }
	),
];

const keyboards = [
	new Component(
		(item_name = 'Logitech MX Keys S Keyboard Wireless Bluetooth Smart Backlight - Graphite'),
		1557000,
		'https://www.tokopedia.com/logitech/logitech-mx-keys-s-keyboard-wireless-bluetooth-smart-backlight-graphite-3a743?extParam=ivf%3Dtrue&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/26/c704142c-4d90-419e-aa37-9dd501a99685.jpg',
		{ size_keyboard: 100 }
	),
	new Component(
		(item_name = 'Keychron Keyboard Carrying Case - For Keychron Keyboard Aluminum Frame - K14 Aluminum'),
		550000,
		'https://www.tokopedia.com/keychron/keychron-keyboard-carrying-case-for-keychron-keyboard-aluminum-frame-k14-aluminum?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/23/dc2673c7-d493-48ff-838a-da79b8fe60b9.jpg',
		{ size_keyboard: 80 }
	),
	new Component(
		(item_name = 'Nuphy Air 60 Wireless Mechanical Keyboard + Nuphy Air 60 NuFolio V2 - Red Switch'),
		2399000,
		'https://www.tokopedia.com/ptnmtindo/nuphy-air-60-wireless-mechanical-keyboard-nuphy-air-60-nufolio-v2-red-switch?extParam=ivf%3Dtrue&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/3/43d8d441-781e-4267-bed7-739a64c58444.jpg',
		{ size_keyboard: 60 }
	),
];

const gpus = [
	new Component(
		(item_name = 'GIGABYTE GeForce RTX 3050 EAGLE OC 6GB GDDR6 96-bit'),
		3358000,
		'https://www.tokopedia.com/gigabyteofficial/gigabyte-geforce-rtx-3050-eagle-oc-6gb-gddr6-96-bit-gpu?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/18/55dad88e-05f2-439d-90d6-12e24cf31b99.jpg',
		{ size_GPU: 6 }
	),
	new Component(
		(item_name = 'GIGABYTE Intel ARC A380 WINDFORCE OC 6GB GDDR6 96-bit'),
		2330000,
		'https://www.tokopedia.com/gigabyteofficial/gigabyte-intel-arc-a380-windforce-oc-6gb-gddr6-96-bit-gpu?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/26/8992be4a-efcc-4995-8c8f-f0dda1dc299b.jpg',
		{ size_GPU: 6 }
	),
];

const categories = ['CPU', 'PSU', 'Casing', 'Storage', 'RAM', 'Motherboard', 'Monitor', 'Mouse', 'Keyboard', 'GPU'];

const componentsDict = {
	CPU: cpus,
	PSU: psus,
	Casing: casings,
	Storage: storages,
	RAM: rams,
	Motherboard: motherboards,
	Monitor: monitors,
	Mouse: mouses,
	Keyboard: keyboards,
	GPU: gpus,
};

// Fungsi untuk memeriksa kompatibilitas
function isCompatible(selectedComponents) {
	const cpu = selectedComponents['CPU'];
	const motherboard = selectedComponents['Motherboard'];
	const ram = selectedComponents['RAM'];
	const casing = selectedComponents['Casing'];
	const storage = selectedComponents['Storage'];
	const psu = selectedComponents['PSU'];
	// const gpu = selectedComponents['GPU'];

	// Cek kompatibilitas soket CPU dan motherboard
	if (cpu.attributes.soket !== motherboard.attributes.soket_mobo) {
		return false;
	}

	// Cek kompatibilitas jenis RAM dan motherboard
	if (ram.attributes.type_ddr !== motherboard.attributes.type_ddr_mobo) {
		return false;
	}

	// Cek kompatibilitas ukuran motherboard dan casing
	const validSizes = {
		'Mini ITX': ['Mini ITX'],
		'Micro ATX': ['Micro ATX', 'ATX', 'E-ATX'],
		ATX: ['ATX', 'E-ATX'],
		'E-ATX': ['E-ATX'],
	};
	if (!validSizes[motherboard.attributes.size_mobo].includes(casing.attributes.size_casing)) {
		return false;
	}

	// Cek kompatibilitas penyimpanan
	const supportedStorageTypes = motherboard.attributes.support_storage.split(', ');
	if (!supportedStorageTypes.includes(storage.attributes.type)) {
		return false;
	}

	// Cek apakah PSU memiliki daya yang cukup (misal: minimal 500W)
	const requiredPower = 500; // ini contoh, bisa disesuaikan
	if (psu.attributes.daya < requiredPower) {
		return false;
	}

	// (Opsional) Cek ukuran GPU dan casing
	// Misalkan kita cek jika casing Micro ATX hanya bisa menampung GPU dengan ukuran tertentu (tidak lebih dari 2 slot misalnya)
	// if (gpu.attributes.size > 2 && casing.attributes.size === 'Micro ATX') {
	//	return false;
	// }

	return true;
}

function selectComponentsBranchAndBound(budget) {
	let bestCombination = null;
	let bestPrice = Infinity;

	function branchAndBound(selectedComponents, remainingCategories, currentPrice) {
		if (remainingCategories.length === 0) {
			if (currentPrice <= budget && currentPrice < bestPrice) {
				if (isCompatible(selectedComponents)) {
					bestCombination = { ...selectedComponents };
					bestPrice = currentPrice;
				}
			}
			return;
		}

		const category = remainingCategories[0];
		for (const component of componentsDict[category]) {
			const newSelectedComponents = { ...selectedComponents };
			newSelectedComponents[category] = component;
			const newPrice = currentPrice + component.price;

			if (newPrice > budget) {
				continue; // Skip branches that exceed the budget
			}

			branchAndBound(newSelectedComponents, remainingCategories.slice(1), newPrice);
		}
	}

	const initialSelectedComponents = {};
	const remainingCategories = [...categories];

	branchAndBound(initialSelectedComponents, remainingCategories, 0);

	let total = 0;

	if (bestCombination) {
		document.getElementById('bnb_tdk_oke').classList.add('hidden');
		document.getElementById('bnb_oke').classList.remove('hidden');
		console.log('Rekomendasi komponen PC:');
		for (const [category, component] of Object.entries(bestCombination)) {
			console.log(`Category: ${category}`);
			console.log(`Item Name: ${component.item_name}`);
			console.log(`Price: ${component.price}`);
			console.log(`Link: ${component.link}`);
			console.log(`Image: ${component.image}`);
			console.log('Attributes:');
			for (const [key, value] of Object.entries(component.attributes)) {
				console.log(`  ${key}: ${value}`);
				if (component.attributes.core != null) {
					document.getElementById(`core_CPU`).textContent = component.attributes.core;
					document.getElementById(`thread_CPU`).textContent = component.attributes.threads;
					document.getElementById(`boost_CPU`).textContent = component.attributes.boost_clock;
					document.getElementById(`soket_CPU`).textContent = component.attributes.soket;
					document.getElementById(`type_ddr_CPU`).textContent = component.attributes.type_ddr;
				}
				if (component.attributes.rating != null) {
					document.getElementById(`rating_PSU`).textContent = component.attributes.rating;
					document.getElementById(`daya_PSU`).textContent = component.attributes.daya;
				}
				if (component.attributes.size_casing != null) {
					document.getElementById(`size_Casing`).textContent = component.attributes.size_casing;
				}
				if (component.attributes.read != null) {
					document.getElementById(`read_Storage`).textContent = component.attributes.read;
					document.getElementById(`write_Storage`).textContent = component.attributes.write;
					document.getElementById(`size_Storage`).textContent = component.attributes.size;
					document.getElementById(`type_Storage`).textContent = component.attributes.type;
				}
				if (component.attributes.size_ram != null) {
					document.getElementById(`size_Ram`).textContent = component.attributes.size_ram;
					document.getElementById(`speed_Ram`).textContent = component.attributes.speed_ram;
					document.getElementById(`type_Ram`).textContent = component.attributes.type_ddr;
				}
				if (component.attributes.size_mobo != null && component.attributes.type_ddr_mobo != null && component.attributes.soket_mobo != null && component.attributes.support_storage != null) {
					document.getElementById(`size_Motherboard`).textContent = component.attributes.size_mobo;
					document.getElementById(`type_ddr_Motherboard`).textContent = component.attributes.type_ddr_mobo;
					document.getElementById(`soket_Motherboard`).textContent = component.attributes.soket_mobo;
					document.getElementById(`support_storage_Motherboard`).textContent = component.attributes.support_storage;
				}
				if (component.attributes.refresh_rate != null && component.attributes.size_monitor != null) {
					document.getElementById('size_Monitor').textContent = component.attributes.size_monitor;
					document.getElementById('refresh_rate_Monitor').textContent = component.attributes.refresh_rate;
				}
				if (component.attributes.dpi != null) {
					document.getElementById('dpi_Mouse').textContent = component.attributes.dpi;
				}
				if (component.attributes.size_keyboard != null) {
					document.getElementById('size_Keyboard').textContent = component.attributes.size_keyboard;
				}
				if (component.attributes.size_GPU != null) {
					document.getElementById('size_GPU').textContent = component.attributes.size_GPU;
				}
			}
			total += component.price;
			document.getElementById(`img_${category}`).src = component.image;
			document.getElementById(`price_${category}`).textContent = `Rp. ${component.price.toLocaleString()}`;
			document.getElementById(`name_${category}`).textContent = component.item_name;
			document.getElementById(`link_${category}`).href = component.link;
			console.log('----------------------');
		}
		console.log(`Sisa budget: ${budget - bestPrice}`);
		document.getElementById('total').textContent = `Rp. ${total.toLocaleString()}`;
		document.getElementById('sisa_budget').textContent = `Rp. ${(budget - bestPrice).toLocaleString()}`;

		return bestCombination;
	} else {
		document.getElementById('bnb_oke').classList.add('hidden');
		document.getElementById('bnb_tdk_oke').classList.remove('hidden');
		console.log('Tidak ada konfigurasi yang kompatibel ditemukan.');
		return null;
	}
}

function main() {
	// Contoh penggunaan dengan budget
	// const budget = 100000000; // Contoh budget
	const budget = 9999000; // Contoh budget

	const start = performance.now();
	selectComponentsBranchAndBound(budget);
	const end = performance.now();

	const durationInMilliseconds = end - start;
	const durationInSeconds = durationInMilliseconds / 1000;

	console.log(`Waktu durasi BNB: ${durationInSeconds} detik`);
	document.getElementById('durasi_bnb').textContent = `${durationInSeconds.toString()} detik`;
}

// main();
// main2();

document.getElementById('budgetForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Mencegah form dari pengiriman default

	// Ambil nilai dari input budget
	const budget = document.getElementById('budget').value;

	// Ambil elemen radio button yang dipilih
	const algorithm = document.querySelector('input[name="algoritma"]:checked');

	// Ambil elemen alert dan pesan alert
	const alertElement = document.getElementById('alert-2');
	const alertMessage = document.getElementById('alert-message');

	// Periksa apakah budget kosong atau tidak dan apakah algoritma dipilih atau tidak
	if (!budget || !algorithm) {
		// Tentukan pesan yang akan ditampilkan pada alert
		if (!budget && !algorithm) {
			alertMessage.textContent = 'Silahkan masukkan budget dan pilih algoritma yang akan digunakan terlebih dahulu!';
		} else if (!budget) {
			alertMessage.textContent = 'Silahkan masukkan budget terlebih dahulu!';
		} else {
			alertMessage.textContent = 'Silahkan pilih algoritma yang akan digunakan terlebih dahulu!';
		}
		// Tampilkan alert jika kondisi tidak terpenuhi
		alertElement.classList.remove('hidden');
	} else {
		// Tampilkan nilai di console jika semua kondisi terpenuhi
		console.log('Budget:', budget);
		console.log('Algorithm:', algorithm.value);
		main();
		// main2();
		document.getElementById('tampilan').classList.remove('h-screen');
		document.getElementById('rekomendasi_bnb').classList.remove('hidden');
		console.log('Value :', value);

		// Lakukan sesuatu dengan nilai budget dan algorithm, misalnya kirim ke server atau tampilkan di halaman
	}
});

document.addEventListener('DOMContentLoaded', () => {
	// Mendapatkan semua elemen tombol close
	const closeButtons = document.querySelectorAll('[data-dismiss-target]');

	closeButtons.forEach((button) => {
		button.addEventListener('click', function () {
			const target = document.querySelector(this.getAttribute('data-dismiss-target'));
			if (target) {
				target.classList.add('hidden');
			}
		});
	});
});

// Bruteforce
// Data komponen (contoh data, perlu disesuaikan dengan data sebenarnya)

function selectComponentsBruteforce(budget) {
	let bestCombination = null;
	let bestPrice = Infinity;

	// Dapatkan semua kombinasi komponen
	const allCombinations = getAllCombinations2([
		componentsDict['CPU'],
		componentsDict['PSU'],
		componentsDict['Casing'],
		componentsDict['Storage'],
		componentsDict['RAM'],
		componentsDict['Motherboard'],
		componentsDict['Monitor'],
		componentsDict['Mouse'],
		componentsDict['Keyboard'],
		componentsDict['GPU'],
	]);

	for (const combination of allCombinations) {
		const totalPrice = combination.reduce((acc, component) => acc + component.price, 0);

		if (totalPrice <= budget) {
			const selectedComponents = categories.reduce((obj, category, index) => {
				obj[category] = combination[index];
				return obj;
			}, {});

			if (isCompatible(selectedComponents)) {
				if (totalPrice < bestPrice) {
					bestPrice = totalPrice;
					bestCombination = selectedComponents;
				}
			}
		}
	}

	if (bestCombination) {
		console.log('Rekomendasi komponen PC:');
		for (const [category, component] of Object.entries(bestCombination)) {
			console.log(`Category: ${category}`);
			console.log(`Item Name: ${component.item_name}`);
			console.log(`Price: ${component.price}`);
			console.log(`Link: ${component.link}`);
			console.log(`Image: ${component.image}`);
			console.log('Attributes:');
			for (const [key, value] of Object.entries(component.attributes)) {
				console.log(`  ${key}: ${value}`);
			}
			console.log('----------------------');
		}
		console.log(`Sisa budget: ${budget - bestPrice}`);
		return bestCombination;
	} else {
		console.log('Tidak ada konfigurasi yang kompatibel ditemukan.');
		return null;
	}
}

function getAllCombinations2(arrays) {
	if (arrays.length === 0) {
		return [[]];
	}

	const combinations = [];
	const restCombinations = getAllCombinations2(arrays.slice(1));

	for (const value of arrays[0]) {
		for (const combination of restCombinations) {
			combinations.push([value, ...combination]);
		}
	}

	return combinations;
}

function main2() {
	// Contoh penggunaan dengan budget
	const budget = 9999000; // Contoh budget

	const start = performance.now();
	selectComponentsBruteforce(budget);
	const end = performance.now();

	const durationInMilliseconds = end - start;
	const durationInSeconds = durationInMilliseconds / 1000;

	console.log(`Waktu durasi BNB: ${durationInSeconds} detik`);
}

// Ambil elemen input
var budgetInput = document.getElementById('budget');
var value;

// Tambahkan event listener untuk 'input' event
budgetInput.addEventListener('input', function (event) {
	// Ambil nilai input
	value = event.target.value;

	// Hapus semua karakter selain angka
	var cleanedValue = value.replace(/[^\d]/g, '');

	// Format angka dengan pemisah titik setiap tiga digit
	var formattedValue = parseInt(cleanedValue).toLocaleString();

	// Masukkan kembali nilai yang diformat ke dalam input
	event.target.value = formattedValue;
});
