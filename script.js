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

// Icon Dark
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const logo = document.getElementById('logo');

function updateLogo() {
	if (darkModeMediaQuery.matches) {
		logo.src = 'https://mdp.ac.id/mdp2020/wp-content/uploads/2021/07/logo-umdp-light-300x248-2.png';
	} else {
		logo.src = 'https://mdp.ac.id/mdp2020/wp-content/uploads/2021/07/logo-umdp-1-300x248-2.png';
	}
}

updateLogo();
darkModeMediaQuery.addEventListener('change', updateLogo);

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
			alertMessage.textContent = 'Please enter your budget and select the algorithm you will use first!';
		} else if (!budget) {
			alertMessage.textContent = 'Please enter the budget first!';
		} else {
			alertMessage.textContent = 'Please select the algorithm that will be used first!';
		}
		alertElement.classList.remove('hidden');
	} else if (budget == 'NaN') {
		alertMessage.textContent = 'Budget is not allowed Nan! Please change the budget!';

		alertElement.classList.remove('hidden');
	} else {
		alertElement.classList.add('hidden');
		console.log('Budget', budget);
		// Hilangkan Koma pada budget
		var budgetWithoutComma = budget.replace(/,/g, '');
		if (algorithm.value === 'bnb') {
			document.getElementById('rekomendasi_bnb').classList.remove('hidden');
			document.getElementById('rekomendasi_bruteforce').classList.add('hidden');
			main(budgetWithoutComma);
		} else if (algorithm.value === 'bruteforce') {
			document.getElementById('rekomendasi_bnb').classList.add('hidden');
			document.getElementById('rekomendasi_bruteforce').classList.remove('hidden');
			main2(budgetWithoutComma);
		} else if (algorithm.value === 'bnb_bruteforce') {
			main(budgetWithoutComma);
			document.getElementById('rekomendasi_bnb').classList.remove('hidden');
			main2(budgetWithoutComma);
			document.getElementById('rekomendasi_bruteforce').classList.remove('hidden');
		}
		document.getElementById('tampilan').classList.remove('lg:h-screen');
		document.getElementById('tampilan').classList.remove('md:h-screen');
		document.getElementById('your_budget_bnb').textContent = `Rp. ${budget.toLocaleString()}`;
		document.getElementById('your_budget_bruteforce').textContent = `Rp. ${budget.toLocaleString()}`;
	}
});

document.addEventListener('DOMContentLoaded', () => {
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

class Component {
	constructor(item_name, price, link, image, attributes = {}) {
		this.item_name = item_name;
		this.price = price;
		this.link = link;
		this.image = image;
		this.attributes = attributes;
	}
}


// Data komponen
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

	new Component(
		'Intel® Core™ i3-13100 Processor 12M Cache, up to 4.50 GHz',
		2589000,
		'https://www.tokopedia.com/anekakomputer/intel-core-i3-13100-processor-12m-cache-up-to-4-50-ghz?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/27/dc08be31-1e2e-40e9-aad2-da3fde211371.jpg',
		{
			boost_clock: 4.8,
			core: 4,
			threads: 8,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),

	new Component('AMD RYZEN 7 7800X3D (Socket AM5)', 6288000, 'https://www.tokopedia.com/tokoexpert/amd-ryzen-7-7800x3d-socket-am5', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/17/941cd749-3cf6-4016-ab42-98be16db63d4.jpg', {
		boost_clock: 5.0,
		core: 8,
		threads: 16,
		soket: 'AM5',
		type_ddr: 'DDR5',
	}),
];

// PSU =========================================================================================

const psus = [
	new Component('MSI MPG A1000G 1000W 80+ GOLD', 2740000, 'https://www.tokopedia.com/msi-id/msi-mpg-a1000g-1000w-80-gold-psu', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/11/bc293d61-4af2-4d61-9ad2-802bb849ce72.jpg', {
		rating: '80+ GOLD',
		daya: 1000,
	}),

	//
	new Component(
		'Enermax Revolution DF 80+ GOLD 750W - ERF750EWT / PSU 750W',
		1470000,
		'https://www.tokopedia.com/baworcomp/enermax-revolution-df-80-gold-750w-erf750ewt-psu-750w?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/12/14/65ba1d38-1c35-4352-88c0-b6f739b69aeb.jpg',
		{
			rating: '80+ GOLD',
			daya: 750,
		}
	),

	//
	new Component(
		'PSU eMachines Gaming 1000W 80+ Bronze - Full Modular | Power Supply 1000 Watt',
		1908000,
		'https://www.tokopedia.com/baworcomp/psu-emachines-gaming-1000w-80-bronze-full-modular-power-supply-1000-watt?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/7/e0cedc59-dd58-4a86-be15-8a2a5bc64a1d.jpg',
		{
			rating: '80+ Bronze',
			daya: 1000,
		}
	),
	//
	new Component(
		'MSI MPG A850G 850W 80+ Gold PCIe 5.0 ATX 3.0 16 Pin [PSU]',
		2230000,
		'https://www.tokopedia.com/msi-id/msi-mpg-a850g-850w-80-gold-pcie-5-0-atx-3-0-16-pin-psu?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/10/2dd221a8-df63-41f3-b55f-f251e8846aa7.jpg',
		{
			rating: '80 Plus Gold ',
			daya: 850,
		}
	),

	//
	new Component(
		'ASUS ROG Loki SFX L 750 Watt 80 Plus Platinum - PSU',
		3045000,
		'https://www.tokopedia.com/gamingpcstore/asus-rog-loki-sfx-l-750-watt-80-plus-platinum-psu?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/10/20/58cbd541-90be-4439-aaa0-f32bf260852e.png',
		{
			rating: '80 Plus Platinum',
			daya: 750,
		}
	),
];

// CASING =========================================================================================

const casings = [
	new Component('Alseye Casing PC Gaming Pinwheel - Black', 550000, 'https://www.tokopedia.com/alseyeofficial/alseye-casing-pc-gaming-pinwheel-black', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/6/3cb7ec58-4cfd-4678-a7b1-50e57a61b5eb.jpg', {
		size_casing: 'ATX',
	}),
	new Component(
		'Einarex Kiem | Casing Pc E-Atx | Cpu Pc Case Gaming Original Best',
		798000,
		'https://www.tokopedia.com/tktopan/einarex-kiem-casing-pc-e-atx-cpu-pc-case-gaming-original-best?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/9/1e24b1c2-69b5-4215-8342-7b1d4362f8fd.jpg',
		{ size_casing: 'E-ATX' }
	),
	new Component(
		'Gamemax Infinity Mini White Black | Casing PC M-ATX ITX | CPU PC Case - Hitam',
		350000,
		'https://www.tokopedia.com/foursquarecomp/gamemax-infinity-mini-white-black-casing-pc-m-atx-itx-cpu-pc-case-hitam-7673e?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/8/af57f9f4-7366-4f5e-a166-0055dc8ccdba.png',
		{ size_casing: 'Mini ITX' }
	),
	new Component(
		'CASING PC MINI MICRO ATX CASING KOMPUTER STANDART - CASING ONLY',
		200000,
		'https://www.tokopedia.com/dnetwork-1/casing-pc-mini-micro-atx-casing-komputer-standart-casing-only-ea446?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/1/467e6b32-3390-470c-aca0-473703d8f2b0.jpg',
		{ size_casing: 'Micro ATX' }
	),

	new Component(
		'Gamemax Aero Mini White Micro ATX Gaming PC case',
		418000,
		'https://www.tokopedia.com/gamemaxofficial/gamemax-aero-mini-white-micro-atx-gaming-pc-case?extParam=cmp%3D1%26ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/2/cf0d4726-cee8-434c-a644-49f61e772e6f.jpg',
		{ size_casing: 'ATX' }
	),
];

// STORAGE =========================================================================================
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

	//
	new Component(
		'SSD M2 SATA 256GB 2242 M.2 SATA / M2SATA KYO KAIZEN (GARANSI 5 TAHUN)',
		278000,
		'https://www.tokopedia.com/rajaramnusantara/ssd-m2-sata-256gb-2242-m-2-sata-m2sata-kyo-kaizen-garansi-5-tahun?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/7/4f846ddf-7bf4-4327-ba3f-9d869273be4a.jpg',
		{
			read: 560,
			write: 480,
			size: 256,
			type: 'M.2 NVME',
		}
	),
	//
	new Component('TEAMGROUP SSD 2.5" CX2 Series 256GB Sata3', 375000, 'https://www.tokopedia.com/teamgroup/teamgroup-ssd-2-5-cx2-series-256gb-sata3?extParam=ivf%3Dfalse%26src%3Dsearch', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2020/12/24/de6df641-8112-4dcb-8274-77b49f38fa29.jpg', {
		read: 520,
		write: 430,
		size: 256,
		type: 'SATA',
	}),

	new Component('SSD PNY CS2241 M.2 NVME 4TB - Gen4x4', 3310000, 'https://www.tokopedia.com/tokoexpert/ssd-pny-cs2241-m-2-nvme-4tb-gen4x4?extParam=ivf%3Dfalse%26src%3Dsearch', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/4/87362211-d132-4483-a522-db602f6c65ea.jpg', {
		read: 5000,
		write: 4200,
		size: 4096,
		type: 'M.2 NVME',
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
	//
	new Component(
		'XPG LANCER RAM PC DDR5 32GB (2X16GB) PC 44800 5600MHz Dual Channel - Hitam',
		1772000,
		'https://www.tokopedia.com/adataxpgofficialstore/xpg-lancer-ram-pc-ddr5-32gb-2x16gb-pc-44800-5600mhz-dual-channel-hitam-86f5f?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/14/61a6fc54-8a7c-419c-82cd-ac0c3d0a1a47.jpg',
		{ size_ram: 32, speed_ram: 5600, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'TEAM T-Force Delta RGB (2x16) 32GB DDR4 kit 3600MHz - White Memory RAM',
		1310000,
		'https://www.tokopedia.com/gasol/team-t-force-delta-rgb-2x16-32gb-ddr4-kit-3600mhz-white-memory-ram?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/19/9f0f2be1-4d59-435c-9577-7ad6dc6cc9ea.jpg',
		{ size_ram: 32, speed_ram: 3600, type_ddr: 'DDR4' }
	),
];

// Kurang 1
const motherboards = [
	new Component(
		'Motherboard KYO KAIZEN A520M PRO AMD AM4 A520 DDR4 Mobo A520M PRO',
		750000,
		'https://www.tokopedia.com/kyo-official/motherboard-kyo-kaizen-a520m-pro-amd-am4-a520-ddr4-mobo-a520m-pro?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/8/535c9b96-39ab-43ac-878e-d1c95c67126a.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR4', soket_mobo: 'AM4', support_storage: 'SATA' }
	),
	new Component(
		'KYO SOYO iCRAFT B760 WIFI Motherboard Intel B760 LGA1700 DDR5 M-ATX',
		2350000,
		'https://www.tokopedia.com/kyo-official/kyo-soyo-icraft-b760-wifi-motherboard-intel-b760-lga1700-ddr5-m-atx',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/8/18508f25-0740-4b6b-8ff7-53d4df150a87.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR5', soket_mobo: 'LGA1700', support_storage: 'SATA' }
	),
	//
	new Component(
		'KYO SOYO iCRAFT B760 WIFI Motherboard Intel B760 LGA1700 DDR5 M-ATX',
		2350000,
		'https://www.tokopedia.com/kyo-official/kyo-soyo-icraft-b760-wifi-motherboard-intel-b760-lga1700-ddr5-m-atx?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/8/18508f25-0740-4b6b-8ff7-53d4df150a87.jpg',
		{ size_mobo: ' Micro ATX', type_ddr_mobo: 'DDR5', soket_mobo: 'LGA1700', support_storage: 'M.2 NVME' }
	),
	//
	new Component(
		'ASUS PRIME A520M-K AMD AM4 A520 DDR4 Motherboard',
		885000,
		'https://www.tokopedia.com/gasol/asus-prime-a520m-k-amd-am4-a520-ddr4-motherboard?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/5/77623821-8f85-49ab-aa07-82dc3bdee7b1.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR4', soket_mobo: 'AM4', support_storage: 'M.2 NVME' }
	),
	//
	new Component(
		'MOTHERBOARD RX7 H610 Socket LGA 1700 DDR4 MAINBOARD H610 INTEL 1700',
		865000,
		'https://www.tokopedia.com/acecom22/motherboard-rx7-h610-socket-lga-1700-ddr4-mainboard-h610-intel-1700?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/2/19/4a70163a-4b79-4fd8-884f-cb1858630b9c.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR4', soket_mobo: 'LGA1700', support_storage: 'M.2 NVME' }
	),
];

const monitors = [
	new Component(
		'MSI MONITOR PRO MP243XW - 24 inch Full HD, IPS 100Hz, 24" - WHITE',
		1555000,
		'https://www.tokopedia.com/tokoexpert/msi-monitor-pro-mp243xw-24-inch-full-hd-ips-100hz-24-white?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/20/a1664449-161c-4eaa-8f86-978e227c28dc.jpg',
		{ size_monitor: 24, refresh_rate: 100 }
	),
	new Component(
		'SAMSUNG Monitor 27" inch LF27T450 FHD IPS 75Hz Bezel-less F27T450 T45F - 27" F27T450, Monitor T45F',
		2215000,
		'https://www.tokopedia.com/kliksierrra/samsung-monitor-27-inch-lf27t450-fhd-ips-75hz-bezel-less-f27t450-t45f-27-f27t450-monitor-t45f-d6e78',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/20/b4601246-b507-4b0e-aef7-90a7fb828307.png',
		{ size_monitor: 27, refresh_rate: 75 }
	),

	//
	new Component(
		'Monitor Samsung S49C950 Curved 120hz DQHD | LS 49C950',
		15699000,
		'https://www.tokopedia.com/harcoxpress/monitor-samsung-s49c950-curved-120hz-dqhd-ls-49c950?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/2/23/f4a42d9a-c591-41a4-a7b5-fe99696d89fd.png',
		{ size_monitor: 49, refresh_rate: 120 }
	),
	//
	new Component(
		'MONITOR SAMSUNG 32" inch LC32R500FDE FHD LED Curved Monitor LC32R500',
		2599000,
		'https://www.tokopedia.com/smartmediacom/monitor-samsung-32-inch-lc32r500fde-fhd-led-curved-monitor-lc32r500?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/12/26/a9a98a5a-950d-47a9-a3ae-82f8c7c0028f.jpg',
		{ size_monitor: 32, refresh_rate: 75 }
	),
	//
	new Component(
		'Monitor Samsung S49C950 Curved 120hz DQHD | LS 49C950',
		5895000,
		'https://www.tokopedia.com/d-m-i/dell-u2724d-i-u2724de-27-inch-ultrasharp-qhd-ips-120hz-hdmi-dp-usb-c-monitor-u2724d-96540?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/21/efbd5763-b25c-4b6f-be97-881edd31d2e8.jpg',
		{ size_monitor: 27, refresh_rate: 120 }
	),
];

const mouses = [
	new Component(
		'Mouse Gaming Lenovo Legion M500 RGB Gaming Mouse (wired) - GY50T26467',
		699000,
		'https://www.tokopedia.com/lenovo-tangerang/mouse-gaming-lenovo-legion-m500-rgb-gaming-mouse-wired-gy50t26467?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/5/30/3a655333-b0a1-4dba-a410-7e843550c6eb.jpg',
		{ dpi: 16000 }
	),
	new Component(
		'Logitech G203 Mouse Gaming Wired RGB Lightsync with Macro [FS] - Hitam',
		245000,
		'https://www.tokopedia.com/logitech-g/logitech-g203-mouse-gaming-wired-rgb-lightsync-with-macro-fs-hitam?extParam=cmp%3D1%26ivf%3Dtrue%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/15/415d6387-1b49-4f6c-aa86-4aec4fbdf893.jpg',
		{ dpi: 8000 }
	),

	//
	new Component(
		'DIGITAL ALLIANCE WIRELESS GAMING MOUSE AIR FALCO - Hitam',
		109000,
		'https://www.tokopedia.com/agresplus/digital-alliance-wireless-gaming-mouse-air-falco-hitam-fbdeb?extParam=cmp%3D1%26ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2024/2/29/ee17746e-2cb8-48b2-932e-00804938e221.png',
		{ dpi: 3200 }
	),
	//
	new Component(
		'Mouse NYK C80 Blue Navy Dual Mode Bluetooth Wireless Rechargeable',
		135000,
		'https://www.tokopedia.com/nykcomputerofficial/mouse-nyk-c80-blue-navy-dual-mode-bluetooth-wireless-rechargeable?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/12/7a48281b-a256-4021-a35a-78e985aa11cc.jpg',
		{ dpi: 1600 }
	),
	//
	new Component(
		'Logitech MX Master 2S Mouse Wireless Bluetooth Edition Rechargeable',
		826000,
		'https://www.tokopedia.com/logitech/logitech-mx-master-2s-mouse-wireless-bluetooth-edition-rechargeable',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/3/9ec72f83-6db6-4aa8-9ede-dbfe08e30b4d.jpg',
		{ dpi: 4000 }
	),
];

const keyboards = [
	new Component(
		'Logitech MX Keys S Keyboard Wireless Bluetooth Smart Backlight - Graphite',
		1557000,
		'https://www.tokopedia.com/logitech/logitech-mx-keys-s-keyboard-wireless-bluetooth-smart-backlight-graphite-3a743?extParam=ivf%3Dtrue&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/26/c704142c-4d90-419e-aa37-9dd501a99685.jpg',
		{ size_keyboard: 100 }
	),
	new Component(
		'Keychron Keyboard Carrying Case - For Keychron Keyboard Aluminum Frame - K14 Aluminum',
		550000,
		'https://www.tokopedia.com/keychron/keychron-keyboard-carrying-case-for-keychron-keyboard-aluminum-frame-k14-aluminum?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/23/dc2673c7-d493-48ff-838a-da79b8fe60b9.jpg',
		{ size_keyboard: 80 }
	),
	new Component(
		'Nuphy Air 60 Wireless Mechanical Keyboard + Nuphy Air 60 NuFolio V2 - Red Switch',
		2399000,
		'https://www.tokopedia.com/ptnmtindo/nuphy-air-60-wireless-mechanical-keyboard-nuphy-air-60-nufolio-v2-red-switch?extParam=ivf%3Dtrue&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/3/43d8d441-781e-4267-bed7-739a64c58444.jpg',
		{ size_keyboard: 60 }
	),
	//
	new Component(
		'GAMEN Titan Elite Mechanical Pluggable Switch Gaming Keyboard WiredRGB - Orange(Red.Sw)',
		239000,
		'https://www.tokopedia.com/gofficial-5/gamen-titan-elite-mechanical-pluggable-switch-gaming-keyboard-wiredrgb-orange-red-sw-b6a6e?extParam=cmp%3D1%26ivf%3Dtrue%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/25/f9b2ce1b-58ec-43a3-8138-d742711f7544.jpg',
		{ size_keyboard: 80 }
	),

	new Component(
		'Altec Lansing Keyboard Dual Mode Wireless/Bluetooth ALBK6268',
		199000,
		'https://www.tokopedia.com/alteclansing/altec-lansing-keyboard-dual-mode-wireless-bluetooth-albk6268?extParam=cmp%3D1%26ivf%3Dfalse',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/8/401ed8a8-7bfb-4127-a4dc-542db8ffe253.jpg',
		{ size_keyboard: 100 }
	),
];

const gpus = [
	new Component(
		'GIGABYTE GeForce RTX 3050 EAGLE OC 6GB GDDR6 96-bit',
		3358000,
		'https://www.tokopedia.com/gigabyteofficial/gigabyte-geforce-rtx-3050-eagle-oc-6gb-gddr6-96-bit-gpu?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/18/55dad88e-05f2-439d-90d6-12e24cf31b99.jpg',
		{ size_GPU: 6 }
	),
	new Component(
		'GIGABYTE Intel ARC A380 WINDFORCE OC 6GB GDDR6 96-bit',
		2330000,
		'https://www.tokopedia.com/gigabyteofficial/gigabyte-intel-arc-a380-windforce-oc-6gb-gddr6-96-bit-gpu?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/26/8992be4a-efcc-4995-8c8f-f0dda1dc299b.jpg',
		{ size_GPU: 6 }
	),
	//
	new Component(
		'MSI RTX 2060 VENTUS 6G OC Graphics GDDR6 NVIDIA RTX 20 Series GPU',
		11753000,
		'https://www.tokopedia.com/umailness-mart/msi-rtx-2060-ventus-6g-oc-graphics-gddr6-nvidia-rtx-20-series-gpu?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2024/5/14/5207ee74-fe60-47dd-a0ef-d06c82597051.jpg',
		{ size_GPU: 6 }
	),
	//
	new Component(
		'ASUS RTX 3060 Graphics NVIDIA RTX 30 series GPU GDDR6 15000MHz RTX',
		14881300,
		'https://www.tokopedia.com/zavia-market/asus-rtx-3060-graphics-nvidia-rtx-30-series-gpu-gddr6-15000mhz-rtx?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2024/1/18/689e88af-e08a-45b5-883e-c9b35e146042.jpg',
		{ size_GPU: 12 }
	),
	//
	new Component(
		'Palit Nvidia GeForce RTX 3050 StormX 6GB DDR6 - Gaming Gpu',
		2899000,
		'https://www.tokopedia.com/gamingpcstore/palit-nvidia-geforce-rtx-3050-stormx-6gb-ddr6-gaming-gpu?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/2/23/a54a2d35-16a2-4a81-9088-0f3cfc858482.png',
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

	return true;
}

// Branch and Bound
function selectComponentsBranchAndBound(budget) {
	let bestCombination = null;
	let bestPrice = 0;

	function branchAndBound(selectedComponents, remainingCategories, currentPrice) {
		if (remainingCategories.length === 0) {
			if (currentPrice <= budget && budget - currentPrice < budget - bestPrice) {
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
		console.log('Tidak ada konfigurasi yang kompatibel ditemukan.');
		return null;
	}
}

function main(budget) {
	const start = performance.now();
	selectComponentsBranchAndBound(budget);
	const end = performance.now();

	if (selectComponentsBranchAndBound(budget) == null) {
		document.getElementById('bnb_oke').classList.add('hidden');
		document.getElementById('bnb_tdk_oke').classList.remove('hidden');
	} else {
		document.getElementById('bnb_tdk_oke').classList.add('hidden');
		document.getElementById('bnb_oke').classList.remove('hidden');
	}

	const durationInMilliseconds = end - start;
	const durationInSeconds = durationInMilliseconds / 1000;

	console.log(`Waktu durasi BNB: ${durationInSeconds} detik`);
	document.getElementById('durasi_bnb').textContent = `${durationInSeconds.toString()} detik`;
}

// Bruteforce
function selectComponentsBruteforce(budget) {
	let bestCombination = null;
	let bestPrice = 0;

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
				if (budget - totalPrice < budget - bestPrice) {
					bestPrice = totalPrice;
					bestCombination = selectedComponents;
				}
			}
		}
	}

	let total = 0;
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
				if (component.attributes.core != null) {
					document.getElementById(`bruteforce_core_CPU`).textContent = component.attributes.core;
					document.getElementById(`bruteforce_thread_CPU`).textContent = component.attributes.threads;
					document.getElementById(`bruteforce_boost_CPU`).textContent = component.attributes.boost_clock;
					document.getElementById(`bruteforce_soket_CPU`).textContent = component.attributes.soket;
					document.getElementById(`bruteforce_type_ddr_CPU`).textContent = component.attributes.type_ddr;
				}
				if (component.attributes.rating != null) {
					document.getElementById(`bruteforce_rating_PSU`).textContent = component.attributes.rating;
					document.getElementById(`bruteforce_daya_PSU`).textContent = component.attributes.daya;
				}
				if (component.attributes.size_casing != null) {
					document.getElementById(`bruteforce_size_Casing`).textContent = component.attributes.size_casing;
				}
				if (component.attributes.read != null) {
					document.getElementById(`bruteforce_read_Storage`).textContent = component.attributes.read;
					document.getElementById(`bruteforce_write_Storage`).textContent = component.attributes.write;
					document.getElementById(`bruteforce_size_Storage`).textContent = component.attributes.size;
					document.getElementById(`bruteforce_type_Storage`).textContent = component.attributes.type;
				}
				if (component.attributes.size_ram != null) {
					document.getElementById(`bruteforce_size_Ram`).textContent = component.attributes.size_ram;
					document.getElementById(`bruteforce_speed_Ram`).textContent = component.attributes.speed_ram;
					document.getElementById(`bruteforce_type_Ram`).textContent = component.attributes.type_ddr;
				}
				if (component.attributes.size_mobo != null && component.attributes.type_ddr_mobo != null && component.attributes.soket_mobo != null && component.attributes.support_storage != null) {
					document.getElementById(`bruteforce_size_Motherboard`).textContent = component.attributes.size_mobo;
					document.getElementById(`bruteforce_type_ddr_Motherboard`).textContent = component.attributes.type_ddr_mobo;
					document.getElementById(`bruteforce_soket_Motherboard`).textContent = component.attributes.soket_mobo;
					document.getElementById(`bruteforce_support_storage_Motherboard`).textContent = component.attributes.support_storage;
				}
				if (component.attributes.refresh_rate != null && component.attributes.size_monitor != null) {
					document.getElementById('bruteforce_size_Monitor').textContent = component.attributes.size_monitor;
					document.getElementById('bruteforce_refresh_rate_Monitor').textContent = component.attributes.refresh_rate;
				}
				if (component.attributes.dpi != null) {
					document.getElementById('bruteforce_dpi_Mouse').textContent = component.attributes.dpi;
				}
				if (component.attributes.size_keyboard != null) {
					document.getElementById('bruteforce_size_Keyboard').textContent = component.attributes.size_keyboard;
				}
				if (component.attributes.size_GPU != null) {
					document.getElementById('bruteforce_size_GPU').textContent = component.attributes.size_GPU;
				}
			}
			total += component.price;
			document.getElementById(`bruteforce_img_${category}`).src = component.image;
			document.getElementById(`bruteforce_price_${category}`).textContent = `Rp. ${component.price.toLocaleString()}`;
			document.getElementById(`bruteforce_name_${category}`).textContent = component.item_name;
			document.getElementById(`bruteforce_link_${category}`).href = component.link;
			console.log('----------------------');
		}
		console.log(`Sisa budget: ${budget - bestPrice}`);
		document.getElementById('bruteforce_total').textContent = `Rp. ${total.toLocaleString()}`;
		document.getElementById('bruteforce_sisa_budget').textContent = `Rp. ${(budget - bestPrice).toLocaleString()}`;

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

function main2(budget) {
	const start = performance.now();
	selectComponentsBruteforce(budget);
	const end = performance.now();

	if (selectComponentsBruteforce(budget) == null) {
		document.getElementById('bruteforce_oke').classList.add('hidden');
		document.getElementById('bruteforce_tdk_oke').classList.remove('hidden');
	} else {
		document.getElementById('bruteforce_tdk_oke').classList.add('hidden');
		document.getElementById('bruteforce_oke').classList.remove('hidden');
	}

	const durationInMilliseconds = end - start;
	const durationInSeconds = durationInMilliseconds / 1000;

	console.log(`Waktu durasi Bruteforce: ${durationInSeconds} detik`);
	document.getElementById('durasi_bruteforce').textContent = `${durationInSeconds.toString()} detik`;
}
