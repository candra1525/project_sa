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

// Class Component
class Component {
	constructor(item_name, price, link, image, attributes = {}) {
		this.item_name = item_name;
		this.price = price;
		this.link = link;
		this.image = image;
		this.attributes = attributes;
	}
}

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
		'AMD Ryzen 3 3200G 4-Core 3.6GHz Radeon Vega 8 Graphics',
		1224000,
		'https://www.tokopedia.com/tokoexpert/amd-ryzen-3-3200g-4-core-3-6ghz-radeon-vega-8-graphics-socket-am4',
		'https://images.tokopedia.net/img/cache/900/product-1/2019/7/10/9126088/9126088_aab62cd7-114b-4e6a-9ee0-2104da067e50_700_700',
		{
			boost_clock: 4,
			core: 4,
			threads: 8,
			soket: 'AM4',
			type_ddr: 'DDR4',
		}
	),
	new Component(
		'AMD Ryzen 3 4100 3.8Ghz Up To 4.0Ghz Cache 4MB 65W AM4 [BOX] ',
		1163000,
		'https://www.tokopedia.com/enterkomputer/amd-ryzen-3-4100-3-8ghz-up-to-4-0ghz-cache-4mb-65w-am4-box-4-core',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/14/c339f498-9bf1-4c74-9e36-1ea5f10e58d2.jpg',
		{
			boost_clock: 4,
			core: 4,
			threads: 8,
			soket: 'AM4',
			type_ddr: 'DDR4',
		}
	),
	new Component('AMD Ryzen 3 3200G with Radeon Vega 8 Graphics', 1207000, 'https://www.tokopedia.com/distributorpc/amd-ryzen-3-3200g-with-radeon-vega-8-graphics', 'https://images.tokopedia.net/img/cache/900/product-1/2019/7/7/1600332/1600332_a892ba6e-d587-4a5a-add8-36e3e77d7ada_365_365.jpg', {
		boost_clock: 4,
		core: 4,
		threads: 8,
		soket: 'AM4',
		type_ddr: 'DDR4',
	}),
	new Component(
		'AMD Ryzen 5 5500 3.6Ghz Up To 4.2Ghz AM4 [Box] 6 Core - AMD Indonesia',
		1400000,
		'https://www.tokopedia.com/enterkomputer/amd-ryzen-5-5500-3-6ghz-up-to-4-2ghz-am4-box-6-core-amd-indonesia',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/14/b9c19af1-c73f-4168-b7a9-fa0ca75ec158.jpg',
		{
			boost_clock: 4.2,
			core: 6,
			threads: 12,
			soket: 'AM4',
			type_ddr: 'DDR4',
		}
	),
	new Component('AMD RYZEN 5 5600 BOX 6-Core 12-Thread', 2040000, 'https://www.tokopedia.com/tokoexpert/amd-ryzen-5-5600-box-6-core-12-thread', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/20/1caa0281-cf7a-4d29-ac5d-57d8a664f55c.jpg', {
		boost_clock: 4.4,
		core: 6,
		threads: 12,
		soket: 'AM4',
		type_ddr: 'DDR4',
	}),
	new Component('AMD Ryzen 5 5600G 6-Core 12-Threads 3.9GHz Radeon Vega 7', 2047000, 'https://www.tokopedia.com/tokoexpert/amd-ryzen-5-5600g-6-core-12-threads-3-9ghz-radeon-vega-7', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/8/31/4748ca9a-328b-44fb-a45c-fb26deba415a.jpg', {
		boost_clock: 4.4,
		core: 6,
		threads: 12,
		soket: 'AM4',
		type_ddr: 'DDR4',
	}),
	new Component('AMD RYZEN 7 7800X3D (Socket AM5)', 6288000, 'https://www.tokopedia.com/tokoexpert/amd-ryzen-7-7800x3d-socket-am5', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/17/941cd749-3cf6-4016-ab42-98be16db63d4.jpg', {
		boost_clock: 5.0,
		core: 8,
		threads: 16,
		soket: 'AM5',
		type_ddr: 'DDR5',
	}),
	new Component(
		'AMD Ryzen 7 5700X 3.4Ghz Up To 4.6Ghz Cache 32MB AM4 [Box] - 8 Core',
		2859000,
		'https://www.tokopedia.com/enterkomputer/amd-ryzen-7-5700x-3-4ghz-up-to-4-6ghz-cache-32mb-am4-box-8-core',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/23/bbe27c8c-b228-48fd-a1be-3cef4e834d48.jpg',
		{
			boost_clock: 4.6,
			core: 8,
			threads: 16,
			soket: 'AM4',
			type_ddr: 'DDR4',
		}
	),
	new Component(
		'AMD RYZEN 7 5700X BOX Up to 4.6GHz 8 Core 16 Thread - Tanpa Cooler',
		2855000,
		'https://www.tokopedia.com/tokoexpert/amd-ryzen-7-5700x-box-up-to-4-6ghz-8-core-16-thread-tanpa-cooler',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/28/2200951a-2d73-4636-92ba-100e5af926ab.jpg',
		{
			boost_clock: 4.6,
			core: 8,
			threads: 16,
			soket: 'AM4',
			type_ddr: 'DDR4',
		}
	),
	new Component(
		'AMD Ryzen 7 7700X 4.5Ghz Up To 5.4Ghz Cache 32MB AM5 [Box] - 8 Core',
		5366000,
		'https://www.tokopedia.com/enterkomputer/amd-ryzen-7-7700x-4-5ghz-up-to-5-4ghz-cache-32mb-am5-box-8-core',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/28/11166db8-f5b6-4ae6-8099-a424fe7ed82f.jpg',
		{
			boost_clock: 5.4,
			core: 8,
			threads: 16,
			soket: 'AM5',
			type_ddr: 'DDR5',
		}
	),
	new Component(
		'AMD Ryzen 7 5700X3D 8-Core up to 4.5Ghz L3 96mb Gaming CPU Processor',
		4171000,
		'https://www.tokopedia.com/getcomp/amd-ryzen-7-5700x3d-8-core-up-to-4-5ghz-l3-96mb-gaming-cpu-processor',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/2/2/1db5ecd9-ef8a-479f-ae23-701c8c301ed9.png',
		{
			boost_clock: 4.5,
			core: 8,
			threads: 16,
			soket: 'AM4',
			type_ddr: 'DDR4',
		}
	),
	new Component(
		'CPU INTEL CORE i3 13100F | Box LGA 1700 Processor Raptor Lake Gen 13',
		1825000,
		'https://www.tokopedia.com/optionid-1/cpu-intel-core-i3-13100f-box-lga-1700-processor-raptor-lake-gen-13?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/26/2efc13e9-a043-413f-a077-070ab299c779.jpg',
		{
			boost_clock: 4.5,
			core: 4,
			threads: 8,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
	new Component(
		'CPU INTEL CORE i3 13100F | Box LGA 1700 Processor Raptor Lake Gen 13',
		3334000,
		'https://www.tokopedia.com/gamingpcstore/intel-core-i5-13400f-processor-gen-13-lga-1700-box-resmi?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/15/d87b6337-2730-4a65-a82e-a4f891ef1304.jpg',
		{
			boost_clock: 4.6,
			core: 10,
			threads: 16,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
	new Component(
		'Processor Intel core i7 13700F LGA1700 Gen 13',
		5700000,
		'https://www.tokopedia.com/pcgamerbaliofficial/processor-intel-core-i7-13700f-lga1700-gen-13?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/20/47c8c9ec-2dbd-49a8-b5fb-f9eb109c5f70.jpg',
		{
			boost_clock: 5.2,
			core: 16,
			threads: 24,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
	new Component(
		'Processor INTEL CORE i9 13900KF | Box LGA 1700 Gen 13 Raptor lake',
		8645000,
		'https://www.tokopedia.com/optionid-1/processor-intel-core-i9-13900kf-box-lga-1700-gen-13-raptor-lake?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/27/4f3f8f94-4405-4691-8ca7-02aa91cee0c7.jpg',
		{
			boost_clock: 5.8,
			core: 24,
			threads: 32,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
	new Component(
		'Intel Core i5 12400 6 cores 12 threads up to 4.4 GHz LGA 1700 GEN 12',
		2535000,
		'https://www.tokopedia.com/starcomporigin/intel-core-i5-12400-6-cores-12-threads-up-to-4-4-ghz-lga-1700-gen-12?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/28/b80a2e50-eaa9-433e-9fdc-4f06dad9d152.png',
		{
			boost_clock: 4.4,
			core: 6,
			threads: 12,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
	new Component(
		'Intel Processor Core i9 14900KF - LGA1700 - Intel gen 14',
		9500000,
		'https://www.tokopedia.com/it-shoponline/intel-processor-core-i9-14900kf-lga1700-intel-gen-14?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D12619185',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/10/17/348dec43-a138-4c84-a591-36fdce1314d2.jpg',
		{
			boost_clock: 6.0,
			core: 24,
			threads: 32,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
	new Component(
		'Processor INTEL CORE i9 12900KF Gen 12 Box - LGA 1700 Alder Lake CPU',
		8169000,
		'https://www.tokopedia.com/yoestore/processor-intel-core-i9-12900kf-gen-12-box-lga-1700-alder-lake-cpu?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/16/e7dd4cf5-36d8-4fed-a0d8-fc9baa32331a.jpg',
		{
			boost_clock: 5.1,
			core: 16,
			threads: 24,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
	new Component(
		'INTEL CORE i7 14700K Box | LGA 1700 CPU Gen 14',
		6800000,
		'https://www.tokopedia.com/topkomputersurabaya/intel-core-i7-14700k-box-lga-1700-cpu-gen-14?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/10/17/728e33c9-faa3-49cc-a56c-d0042af8235b.jpg',
		{
			boost_clock: 5.6,
			core: 20,
			threads: 28,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
	//
	new Component(
		'PROCESSOR INTEL CORE I3 GEN 12 F BOX RESMI / CORE I3 12100F LGA 1700',
		1399000,
		'https://www.tokopedia.com/topkomputersurabaya/intel-core-i7-14700k-box-lga-1700-cpu-gen-14?extParam=ivf%3Dfalse%26src%3Dsearchhttps://www.tokopedia.com/berkahutamakomputer/processor-intel-core-i3-gen-12-f-box-resmi-core-i3-12100f-lga-1700?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/26/cdfb1148-5f8f-4371-bc3a-6ed4bec3e158.jpg',
		{
			boost_clock: 4.3,
			core: 4,
			threads: 8,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
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
	new Component(
		'Processor Intel Core i5 13500 14 Core 20 Threads Raptor Lake LGA 1700',
		3900000,
		'https://www.tokopedia.com/topkomputersurabaya/processor-intel-core-i5-13500-14-core-20-threads-raptor-lake-lga-1700?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/3/3ea61722-95cf-4f48-b7a2-f07331848ea8.jpg',
		{
			boost_clock: 4.8,
			core: 14,
			threads: 20,
			soket: 'LGA1700',
			type_ddr: 'DDR5',
		}
	),
];

const psus = [
	new Component(
		'PSU Innovation 500W 80+ Gold',
		573000,
		'https://www.tokopedia.com/jayakomputa-1/psu-innovation-500w-80-gold-power-supply-garansi-8th-ganti-baru?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/5/21/7b65379b-6b16-4661-91e1-6e1bbbe2aa1b.jpg',
		{ rating: '80+ GOLD', daya: 550 }
	),
	new Component('MSI MAG A650BN 650W 80+ Bronze', 900000, 'https://www.tokopedia.com/msi-id/msi-mag-a650bn-650w-80-bronze-psu', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/11/c414467d-95d5-47d8-9a5f-e114e91d1a6e.jpg', {
		rating: '80+ Bronze',
		daya: 650,
	}),
	new Component('MSI MPG A1000G 1000W 80+ GOLD', 2740000, 'https://www.tokopedia.com/msi-id/msi-mpg-a1000g-1000w-80-gold-psu', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/11/bc293d61-4af2-4d61-9ad2-802bb849ce72.jpg', {
		rating: '80+ GOLD',
		daya: 1000,
	}),
	//
	new Component(
		'PSU KYO SAMA 650W 80+ Bronze Modular PSU 650W 80 Bronze BLACK',
		789000,
		'https://www.tokopedia.com/kyo-official/psu-kyo-sama-650w-80-bronze-modular-psu-650w-80-bronze-black?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/3/1f6e3387-ae3d-468e-bb03-870fa33ed951.jpg',
		{
			rating: '80+ Bronze',
			daya: 650,
		}
	),
	//
	new Component(
		'GAMEMAX PSU 650W GP-650 80+ Bronze',
		625000,
		'https://www.tokopedia.com/tokoexpert/gamemax-psu-650w-gp-650-80-bronze-1?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/product-1/2020/7/16/9126088/9126088_50a4eb77-bb71-4303-a64b-c632f666f8e5_800_800',
		{
			rating: '80+ Bronze',
			daya: 650,
		}
	),
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
		'SEGOTEP GN750W ATX 3.0 (750W 80PLUS GOLD PSU Flat Cable Non Modular)',
		1099000,
		'https://www.tokopedia.com/acegear/segotep-gn750w-atx-3-0-750w-80plus-gold-psu-flat-cable-non-modular?extParam=ivf%3Dtrue&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/2/1/ffcb4f43-1f58-4452-9b41-f5965069aa6a.jpg',
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
		'SEASONIC FOCUS GX 1000 ATX 3.0 | PSU 1000W 80+ Gold PCIe 5.0',
		2799000,
		'https://www.tokopedia.com/nanokomputer/seasonic-focus-gx-1000-atx-3-0-psu-1000w-80-gold-pcie-5-0?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/10/21/4e072fff-b8fb-429b-8f80-d3b712ce3400.jpg',
		{
			rating: '80+ Gold',
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
		'Corsair HX1000 Fully Modular Platinum Power Supply PSU HX 1000 Watt',
		1700000,
		'https://www.tokopedia.com/actuaryid/corsair-hx1000-fully-modular-platinum-power-supply-psu-hx-1000-watt?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/20/911293c1-589a-45a6-9d99-9b646810dc16.jpg',
		{
			rating: 'Platinum',
			daya: 1000,
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
	//
	new Component(
		'PSU KYO SAMA ARMOR 850W 80+ Gold Full Modular PSU 850W 80 Gold WHITE',
		1990000,
		'https://www.tokopedia.com/kyo-official/psu-kyo-sama-armor-850w-80-gold-full-modular-psu-850w-80-gold-white?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/22/deb45224-49a7-4907-a0ce-520fb353150f.jpg',
		{
			rating: '80+ GOLD',
			daya: 850,
		}
	),
	//
	new Component(
		'PSU CORSAIR CX550 550 Watt 80 PLUS Bronze ATX Power Supply',
		825000,
		'https://www.tokopedia.com/santikacomp/psu-corsair-cx550-550-watt-80-plus-bronze-atx-power-supply?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/31/3c47e222-6bd5-4cf4-9a6a-4612e8c432c6.png',
		{
			rating: '80 PLUS',
			daya: 550,
		}
	),
	//
	new Component(
		'Gamemax GP-850 Power Supply 850W 80+ Bronze / PSU 850w',
		765000,
		'https://www.tokopedia.com/komputerteman/gamemax-gp-850-power-supply-850w-80-bronze-psu-850w?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/19/a14da51f-f302-4c65-bca8-06bfd88bc6e2.jpg',
		{
			rating: '80+ Bronze',
			daya: 850,
		}
	),
	//
	new Component(
		'ASUS ROG THOR 1200 Watt GAMING Platinum II PSU',
		5330000,
		'https://www.tokopedia.com/gamingpcstore/asus-rog-thor-1200-watt-gaming-platinum-ii-psu?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/15/fd156952-2c41-4c72-88ba-35119de42617.png',
		{
			rating: 'Platinum II',
			daya: 1200,
		}
	),
	//
	new Component(
		'Power Supply MSI MPG A750GF | White PSU 750W 80+ Gold 750 Watt',
		2035000,
		'https://www.tokopedia.com/optionid-1/power-supply-msi-mpg-a750gf-white-psu-750w-80-gold-750-watt?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/28/13054ccf-c138-4a88-bf7a-99e66fcd018c.jpg',
		{
			rating: '80+ Gold',
			daya: 750,
		}
	),
	//
	new Component(
		'MSI MPG A850G 850W 80+ Gold PCIe 5.0 ATX 3.0 16 Pin [PSU]',
		2230000,
		'https://www.tokopedia.com/msi-id/msi-mpg-a850g-850w-80-gold-pcie-5-0-atx-3-0-16-pin-psu?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/10/2dd221a8-df63-41f3-b55f-f251e8846aa7.jpg',
		{
			rating: '80+ Gold',
			daya: 850,
		}
	),
	//
	new Component(
		'PSU ASUS ROG LOKI SFX-L 1000 Watt | 80+ Platinum Power Supply Gaming',
		4420000,
		'https://www.tokopedia.com/bandarkomputer/psu-asus-rog-loki-sfx-l-1000-watt-80-platinum-power-supply-gaming?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/23/1bf08fad-7c2a-40d9-9d39-e98d4624ff80.png',
		{
			rating: '80+ Platinum',
			daya: 1000,
		}
	),
	//
	new Component(
		'PSU ASUS ROG THOR 1600W Titanium | ROG-THOR-1600T-GAMING',
		10640000,
		'https://www.tokopedia.com/chandut/psu-asus-rog-thor-1600w-titanium-rog-thor-1600t-gaming?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/17/961b58a3-bdd7-4ef1-b032-eeb3c6642c29.jpg',
		{
			rating: '80 Plus Titanium',
			daya: 1600,
		}
	),
	//
	new Component(
		'PSU ASUS ROG THOR 1000 Watt Platinum II EVA Edition Power Supply',
		5900000,
		'https://www.tokopedia.com/global-link168/psu-asus-rog-thor-1000-watt-platinum-ii-eva-edition-power-supply?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/23/7442e702-19b0-48e9-a50c-e92dfc2d531b.jpg',
		{
			rating: 'Platinum II',
			daya: 1000,
		}
	),
	//
	new Component(
		'ASUS ROG LOKI SFX-L 850W PLATINUM WHITE EDITION | PCIE GEN 5.0 RGB PSU',
		3959000,
		'https://www.tokopedia.com/lezzcom/asus-rog-loki-sfx-l-850w-platinum-white-edition-pcie-gen-5-0-rgb-psu?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/18/52e755d9-3718-4e1c-a58c-7c5c7b059348.jpg',
		{
			rating: 'PLATINUM',
			daya: 850,
		}
	),
	//
	new Component(
		'PSU Corsair CV Series CV650 650W CV 650 | 80 Plus Bronze | Flat Cables',
		985000,
		'https://www.tokopedia.com/eseskomputer/psu-corsair-cv-series-cv650-650w-cv-650-80-plus-bronze-flat-cables?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/17/ec4dcf0b-1f6c-466b-8f89-63b13ebe3a39.jpg',
		{
			rating: '80 Plus Bronze',
			daya: 650,
		}
	),
	//
	new Component(
		'POWER SUPPLY PSU SEASONIC VERTEX PX-1000 PCIE5 ATX 3.0 1000W PLATINUM',
		3360000,
		'https://www.tokopedia.com/sportonlineshop/power-supply-psu-seasonic-vertex-px-1000-pcie5-atx-3-0-1000w-platinum?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/4/8035e25e-3510-424d-ae80-fd5dc3328f29.jpg',
		{
			rating: 'Platinum',
			daya: 1000,
		}
	),
	//
	new Component(
		'Corsair HX750 750 Watt 80 PLUS PLATINUM Certified Fully Modular PSU',
		2515000,
		'https://www.tokopedia.com/gamingpcstore/corsair-hx750-750-watt-80-plus-platinum-certified-fully-modular-psu?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/19/a8b3de62-1dd4-47cc-954f-abe023486e6b.jpg',
		{
			rating: '80 PLUS PLATINUM',
			daya: 750,
		}
	),
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
	//
	new Component(
		'SEGOTEP ENDURA PRO+ (E-ATX Premium PC Case) - BLACK',
		689000,
		'https://www.tokopedia.com/acegear/segotep-endura-pro-e-atx-premium-pc-case-black-c69fc?extParam=ivf%3Dtrue&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/2/17/e8e98038-b097-4b8e-aae3-051befd99bc6.jpg',
		{ size_casing: 'E-ATX' }
	),
	//
	new Component(
		'CASING PCCOOLER / PC COOLER DIAMOND MA100 MESH ATX, mATX - BLACK',
		350000,
		'https://www.tokopedia.com/tokoexpert/casing-pccooler-pc-cooler-diamond-ma100-mesh-atx-matx-black?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/1/22/35befcd2-26d4-4579-adae-14656f2a65b6.jpg',
		{ size_casing: 'ATX' }
	),
	//
	new Component(
		'Casing Deepcool CC560 BLACK - ATX Tempered Glass + 4pcs Fan - BLACK',
		740000,
		'https://www.tokopedia.com/tokoexpert/casing-deepcool-cc560-black-atx-tempered-glass-4pcs-fan-black?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/14/f310e9da-ed9a-4ed5-b61b-4ec2dd252ea3.jpg',
		{ size_casing: 'ATX' }
	),
	//
	new Component(
		'Casing CPU PC Gaming AULA FZ014 include 3 fans RGB Micro ATX/ATX - Putih',
		410000,
		'https://www.tokopedia.com/incusstore/casing-cpu-pc-gaming-aula-fz014-include-3-fans-rgb-micro-atx-atx-putih?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/10/c0d22437-52ef-4f59-af48-744a04ae5766.jpg',
		{ size_casing: 'ATX' }
	),
	//
	new Component(
		'Casing INFINITY NEBULA V4 WHITE Tempered Glass - ATX, mATX Gaming Case',
		395000,
		'https://www.tokopedia.com/tokoexpert/casing-infinity-nebula-v4-white-tempered-glass-atx-matx-gaming-case?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/13/ec3e8f00-6268-4a08-8c82-20b15467e13c.jpg',
		{ size_casing: 'ATX' }
	),
	//
	new Component(
		'Casing Aigo DarkFlash DLM22 - Tempered Glass M-ATX - White',
		610000,
		'https://www.tokopedia.com/tokoexpert/casing-aigo-darkflash-dlm22-tempered-glass-m-atx-white?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2020/9/28/a82aa615-32b3-477a-9e83-7e76d066856a.jpg',
		{ size_casing: 'Micro ATX' }
	),
	//
	new Component(
		'Gamemax Aero Mini White Micro ATX Gaming PC case',
		418000,
		'https://www.tokopedia.com/gamemaxofficial/gamemax-aero-mini-white-micro-atx-gaming-pc-case?extParam=cmp%3D1%26ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/2/cf0d4726-cee8-434c-a644-49f61e772e6f.jpg',
		{ size_casing: 'ATX' }
	),
	//
	new Component('Casing ENLIGHT Z5 - Micro ATX - Putih', 419000, 'https://www.tokopedia.com/tokoexpert/casing-enlight-z5-micro-atx-putih-6d825?extParam=ivf%3Dfalse%26src%3Dsearch', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/12/65c4d5e5-38f5-46f4-9353-eff698a3bbfb.jpg', {
		size_casing: 'Micro ATX',
	}),
	//
	new Component(
		'CASING DarkFlash DK415M WHITE - Micro ATX Gaming case - WHITE',
		655000,
		'https://www.tokopedia.com/tokoexpert/casing-darkflash-dk415m-white-micro-atx-gaming-case-white?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/7/634b8ac7-4ce5-4465-a1ef-af600f890cf9.jpg',
		{ size_casing: 'M-ATX' }
	),
	//
	new Component(
		'CASING VENOMRX ISKANDER - Micro ATX Tempered Glass INCLUDE 2 FAN ARGB',
		420000,
		'https://www.tokopedia.com/tokoexpert/casing-venomrx-iskander-micro-atx-tempered-glass-include-2-fan-argb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/24/b2eaf53d-8365-4d68-90fa-d4b6af358508.jpg',
		{ size_casing: 'M-ATX' }
	),
	//
	new Component(
		'Casing Gaming PC Armageddon Nimitz N5 Aurora Micro ATX M-Atx Resmi - White, Casing Only',
		385000,
		'https://www.tokopedia.com/aicomputer-store/casing-gaming-pc-armageddon-nimitz-n5-aurora-micro-atx-m-atx-resmi-white-casing-only-6b90e?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/23/0cd3026d-4eba-4ed8-9687-7f20bb3dab7c.jpg',
		{ size_casing: 'M-ATX' }
	),
	//
	new Component(
		'Cooler Master MasterBox MB400L w/o ODD TG Micro ATX Case Casing PC',
		672000,
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/13/7415efdb-5aa5-4394-9f6a-9668b0124320.jpg',
		'https://www.tokopedia.com/gamingpcstore/cooler-master-masterbox-mb400l-w-o-odd-tg-micro-atx-case-casing-pc?extParam=ivf%3Dfalse%26src%3Dsearch',
		{ size_casing: 'M-ATX' }
	),
	//
	new Component(
		'Casing PC Gamemax Spark Mini White ITX - Hitam',
		599000,
		'https://www.tokopedia.com/gamemaxofficial/casing-pc-gamemax-spark-mini-white-itx-hitam-45b60?extParam=cmp%3D1%26ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/26/1ae344a7-7b97-482b-a1fb-3ea030b24b8f.jpg',
		{ size_casing: 'M-ITX' }
	),
	//
	new Component(
		'Gamemax Infinity Mini Casing Komputer Micro ITX / Casing PC M-ITX - Hitam, no fan',
		350000,
		'https://www.tokopedia.com/httptokom4nt4p/gamemax-infinity-mini-casing-komputer-micro-itx-casing-pc-m-itx-hitam-no-fan-0991a?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/22/23486ce3-e971-49af-bb27-1a19524a6358.jpg',
		{ size_casing: 'M-ITX' }
	),
	//
	new Component(
		'Casing DARKFLASH DK431 MESH - EATX, ATX, mATX - Putih',
		815000,
		'https://www.tokopedia.com/tokoexpert/casing-darkflash-dk431-mesh-eatx-atx-matx-putih?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/8/69a8e8a5-bb69-4bd9-819e-6627876cca5b.jpg',
		{ size_casing: 'E-ATX' }
	),
	//
	new Component(
		'Casing EINAREX VICTORIA - EATX, ATX, mATX Gaming Case - Hitam',
		770000,
		'https://www.tokopedia.com/tokoexpert/casing-einarex-victoria-eatx-atx-matx-gaming-case-hitam?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/29/5ff018e0-04c9-4648-a88f-ba0ebe4a0211.jpg',
		{ size_casing: 'E-ATX' }
	),
	//
	new Component(
		'Casing Armaggeddon TESSARAXX APEX 7 - EATX',
		636000,
		'https://www.tokopedia.com/asiatechsolusind/casing-armaggeddon-tessaraxx-apex-7-eatx?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/13/83d0f396-85c8-469a-96d5-b812b90385b0.jpg',
		{ size_casing: 'E-ATX' }
	),
	//
	new Component(
		'Casing Case Komputer PC IMPERION RUBY 12',
		260000,
		'https://www.tokopedia.com/archive-majujayacom/casing-case-komputer-pc-imperion-ruby-12-500w-atx?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/16/0043b976-24a4-4319-9e20-a381ed3a5052.jpg',
		{ size_casing: 'ATX' }
	),
	//
	new Component(
		'Casing EINAREX MICHIGAN - EATX, ATX, mATX Gaming Case',
		942000,
		'https://www.tokopedia.com/tokoexpert/casing-einarex-michigan-eatx-atx-matx-gaming-case?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/29/6834ba8d-d28b-4b6e-855c-31247a47f70d.jpg',
		{ size_casing: 'E-ATX' }
	),
	//
	new Component(
		'CASING VenomRX URRA - Micro ATX Tempered Glass + 2 FAN ARGB - WHITE',
		465000,
		'https://www.tokopedia.com/tokoexpert/casing-venomrx-urra-micro-atx-tempered-glass-2-fan-argb-white?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/17/c1a01750-7283-4395-b2f4-c9adda29f1fb.jpg',
		{ size_casing: 'Micro ATX' }
	),
	//
	new Component(
		'Casing VenomRX URRA - Micro ATX Tempered Glass INCLUDE 2 FAN ARGB - Hitam',
		400000,
		'https://www.tokopedia.com/casscom/casing-venomrx-urra-micro-atx-tempered-glass-include-2-fan-argb-hitam?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/27/622f7001-dd16-402e-b7a8-05beb42642d5.jpg',
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
	//
	new Component('SSD 512GB RX7 SATA - SSD ONLY', 480000, 'https://www.tokopedia.com/acecom22/ssd-512gb-rx7-sata-ssd-only-52a87?extParam=ivf%3Dfalse&src=topads', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/20/74654a38-ab81-4b1c-a406-462be7ce6edb.jpg', {
		read: 550,
		write: 530,
		size: 512,
		type: 'SATA',
	}),
	//
	new Component(
		'SSD 512GB Midasforce Superlightning - SSD Saja',
		499000,
		'https://www.tokopedia.com/midas-force/ssd-512gb-midasforce-superlightning-ssd-saja-8e865?extParam=ivf%3Dtrue%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/17/cc3d7e17-61c4-4b09-acc4-516f236af35e.jpg',
		{
			read: 500,
			write: 550,
			size: 512,
			type: 'SATA',
		}
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
	//
	new Component(
		'SSD ZADAK TWSG4S M.2 NVME 512GB - PCIe Gen4x4 With HeatSink',
		835000,
		'https://www.tokopedia.com/tokoexpert/ssd-zadak-twsg4s-m-2-nvme-512gb-pcie-gen4x4-with-heatsink?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/2/22/0918c33d-b3c6-488a-87bf-0dd3f05c7f96.jpg',
		{
			read: 7400,
			write: 7000,
			size: 512,
			type: 'M.2 NVME',
		}
	),
	//
	new Component('SSD PNY CS2241 M.2 NVME 4TB - Gen4x4', 3310000, 'https://www.tokopedia.com/tokoexpert/ssd-pny-cs2241-m-2-nvme-4tb-gen4x4?extParam=ivf%3Dfalse%26src%3Dsearch', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/4/87362211-d132-4483-a522-db602f6c65ea.jpg', {
		read: 5000,
		write: 4200,
		size: 4096,
		type: 'M.2 NVME',
	}),
	//
	new Component(
		'SSD KINGSTON 256GB SATA 2.5" RESMI GARANSI 3 TAHUN - SSD ONLY',
		307000,
		'https://www.tokopedia.com/indolegend/ssd-kingston-256gb-sata-2-5-resmi-garansi-3-tahun-ssd-only-1b721?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/27/e6ca153b-99a6-4ebc-bf1c-cd008f0ed17a.jpg',
		{
			read: 550,
			write: 530,
			size: 256,
			type: 'SATA',
		}
	),
	//
	new Component(
		'SSD M2 NVME / M.2 NVME/ M2NVME 256GB KAIZEN RESMI (GARANSI 5 TAHUN)',
		332000,
		'https://www.tokopedia.com/rajaramnusantara/ssd-m2-nvme-m-2-nvme-m2nvme-256gb-kaizen-resmi-garansi-5-tahun?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/4/92ae11b0-0f36-4358-8918-cbc64b680714.jpg',
		{
			read: 2000,
			write: 1600,
			size: 256,
			type: 'M.2 NVME',
		}
	),
	//
	new Component('SSD PNY CS1031 M.2 NVME 256GB - Gen3x4', 365000, 'https://www.tokopedia.com/tokoexpert/ssd-pny-cs1031-m-2-nvme-256gb-gen3x4?extParam=ivf%3Dfalse%26src%3Dsearch', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/10/6512ef7f-b5b1-4421-946f-b7c75906bd32.jpg', {
		read: 1700,
		write: 1500,
		size: 256,
		type: 'M.2 NVME',
	}),
	//
	new Component(
		'V-Gen SSD Hyper M.2 Pcie Gen3 Nvme 2280 256GB - VGen M2 256 GB',
		381000,
		'https://www.tokopedia.com/jayapc/v-gen-ssd-hyper-m-2-pcie-gen3-nvme-2280-256gb-vgen-m2-256-gb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/product-1/2019/7/26/1597097/1597097_83855177-3158-4e2f-abfc-840c209ef3d1_800_800',
		{
			read: 3500,
			write: 2500,
			size: 256,
			type: 'M.2 NVME',
		}
	),
	//
	new Component(
		'Genuine SSD Sata III 128GB/ 256GB/ 512GB 2.5" - 256GB',
		268000,
		'https://www.tokopedia.com/superiorssd/genuine-ssd-sata-iii-128gb-256gb-512gb-2-5-256gb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/26/3d3992e8-b19f-49f6-8326-5064407ed7d6.jpg',
		{
			read: 500,
			write: 480,
			size: 256,
			type: 'SATA',
		}
	),
	//
	new Component(
		'SSD 128GB - 256GB - 512GB Rundisk SATA III Garansi 3 Tahun - 256GB',
		272200,
		'https://www.tokopedia.com/avriyan/ssd-128gb-256gb-512gb-rundisk-sata-iii-garansi-3-tahun-256gb-0b887?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/23/25816e17-9c6e-4742-9dc0-368724852282.jpg',
		{
			read: 560,
			write: 540,
			size: 256,
			type: 'SATA',
		}
	),
	//
	new Component('Gigabyte NVMe SSD 256GB', 430000, 'https://www.tokopedia.com/it-shoponline/gigabyte-nvme-ssd-256gb?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D12619185', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/4/55a94d29-264e-46dd-b82e-891fc930afe4.jpg', {
		read: 1700,
		write: 1100,
		size: 256,
		type: 'M.2 NVME',
	}),
	//
	new Component(
		'KLEVV CRAS C710 256GB SSD M.2 2280 NVME PCLE GEN3 X4',
		409001,
		'https://www.tokopedia.com/queenprocessor/klevv-cras-c710-256gb-ssd-m-2-2280-nvme-pcle-gen3-x4?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2020/11/30/90c48ff0-9560-4c07-9a41-d0f094bcacb8.png',
		{
			read: 1950,
			write: 1250,
			size: 256,
			type: 'M.2 NVME',
		}
	),
	//
	new Component(
		'Team Group MP33 SSD 512GB M.2 NVME PCIe 2.2280 Gen3 TM8FP6512G0C101',
		575000,
		'https://www.tokopedia.com/komputerteman/team-group-mp33-ssd-512gb-m-2-nvme-pcie-2-2280-gen3-tm8fp6512g0c101?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/10/20/3746619c-df6f-47d8-8834-f7244901bb41.jpg',
		{
			read: 1700,
			write: 1400,
			size: 512,
			type: 'M.2 NVME',
		}
	),
	//
	new Component(
		'Solid State Drive V-GeN 512GB M.2 NVMe PCIe Gen 3.0 - SSD VGEN M2 NVME - SSD',
		598000,
		'https://www.tokopedia.com/valkyre/solid-state-drive-v-gen-512gb-m-2-nvme-pcie-gen-3-0-ssd-vgen-m2-nvme-ssd?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/15/c5f33217-1915-4c0d-a2bf-f5e6fc494fd4.jpg',
		{
			read: 3500,
			write: 2500,
			size: 512,
			type: 'M.2 NVME',
		}
	),
	//
	new Component(
		'SSD 512GB KAIZEN SATA III 2.5" 6GB/S GARANSI RESMI - Bukan SSD 480GB',
		489000,
		'https://www.tokopedia.com/rajaramnusantara/ssd-512gb-kaizen-sata-iii-2-5-6gb-s-garansi-resmi-bukan-ssd-480gb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/7/59b02e7e-041b-431f-ba61-aa68db176efd.jpg',
		{
			read: 570,
			write: 470,
			size: 512,
			type: 'SATA',
		}
	),
	//
	new Component(
		'TEAM Z44A5 SSD M.2 NVME PCIe 4.0 Gen 4 - 512GB',
		725000,
		'https://www.tokopedia.com/julyaugustshop/team-z44a5-ssd-m-2-nvme-pcie-4-0-gen-4-512gb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/10/65d300b6-c09d-4d47-88e2-bde2a97e26ad.jpg',
		{
			read: 5000,
			write: 4500,
			size: 512,
			type: 'M.2 NVME',
		}
	),
	//
	new Component(
		'ADATA SSD LEGEND 710 512GB M.2 NVME PCIe Gen3x4',
		575000,
		'https://www.tokopedia.com/agreskomputerofficial/adata-ssd-legend-710-512gb-m-2-nvme-pcie-gen3x4?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2024/5/8/499f695c-bcd6-49f6-83fc-e8575687a861.jpg',
		{
			read: 2400,
			write: 1800,
			size: 512,
			type: 'M.2 NVME',
		}
	),
	//
	new Component('SSD WD Green 1TB SATA3 6GB/s', 1009000, 'https://www.tokopedia.com/wd-official/ssd-wd-green-1tb-sata3-6gb-s', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/21/5008bb3c-fc25-4077-a4b2-ce4e36cbc323.jpg', {
		read: 545,
		write: 465,
		size: 1024,
		type: 'SATA',
	}),
	//
	new Component(
		'SSD Lexar NM610 PRO 1TB 2TB - SSD M.2 NVMe PCIe Gen 3x4 - 1 tb',
		970000,
		'https://www.tokopedia.com/trinityofficial/ssd-lexar-nm610-pro-1tb-2tb-ssd-m-2-nvme-pcie-gen-3x4-1-tb?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/6/9/8de7ccd1-9df6-49fc-8ba5-c8f40bfdb1fa.jpg',
		{
			read: 3300,
			write: 2600,
			size: 1024,
			type: 'M.2 NVME',
		}
	),
	//
	new Component('SSD PNY CS2241 M.2 NVME 1TB - Gen4x4', 1210000, 'https://www.tokopedia.com/tokoexpert/ssd-pny-cs2241-m-2-nvme-1tb-gen4x4?extParam=ivf%3Dfalse%26src%3Dsearch', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/20/bf8484e5-f82e-4dc8-8f6f-c13fd423e4a7.jpg', {
		read: 5100,
		write: 3200,
		size: 1024,
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
	//
	new Component(
		'XPG LANCER RAM PC DDR5 32GB (2X16GB) PC 51200 6400MHz Dual Channel - Hitam',
		2120000,
		'https://www.tokopedia.com/adataxpgofficialstore/xpg-lancer-ram-pc-ddr5-32gb-2x16gb-pc-51200-6400mhz-dual-channel-hitam?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/22/d2be8f16-1fef-4bc7-abe4-5a37af858bcc.jpg',
		{ size_ram: 32, speed_ram: 6400, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'Team Delta RGB White DDR4 2x16Gb (32 GB) 3200 MHz - Ram Memory DDR4 - Putih',
		1280001,
		'https://www.tokopedia.com/ascaryacomputer-1/team-delta-rgb-white-ddr4-2x16gb-32-gb-3200-mhz-ram-memory-ddr4-putih?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/23/0b25d163-a1f2-4ca0-834e-4b946a97d769.jpg',
		{ size_ram: 32, speed_ram: 3200, type_ddr: 'DDR4' }
	),
	//
	new Component(
		'TEAMGROUP Elite Plus DDR5 16GB 5600MHz PC5-44800 CL46 RAM PC - silver',
		883000,
		'https://www.tokopedia.com/gamingpcstore/teamgroup-elite-plus-ddr5-16gb-5600mhz-pc5-44800-cl46-ram-pc-silver-bd59f?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/28/bd57289a-62e5-48bc-bdd4-c922edd255c5.jpg',
		{ size_ram: 16, speed_ram: 5600, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'Team T-Force Delta RGB 32GB Kit 3200 Black/White PC RAM DDR4 3200MHz - Putih',
		1299000,
		'https://www.tokopedia.com/starcomporigin/team-t-force-delta-rgb-32gb-kit-3200-black-white-pc-ram-ddr4-3200mhz-putih?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/1/b9749e27-0afd-4727-9713-c092e05a0071.png',
		{ size_ram: 32, speed_ram: 3200, type_ddr: 'DDR4' }
	),
	//
	new Component(
		'TEAMGROUP T-Force Delta RGB DDR5 32GB Kit 2x16GB 6000MHz Ram CL38 - Putih',
		1950000,
		'https://www.tokopedia.com/gamingpcstore/teamgroup-t-force-delta-rgb-ddr5-32gb-kit-2x16gb-6000mhz-ram-cl38-putih?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/4/563fdf1e-b818-4a54-8bad-b777ed2d3a53.jpg',
		{ size_ram: 32, speed_ram: 6000, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'Memory Apacer NOX RGB AURA II DDR4 PC25600 3200Mhz 32GB 2x16GB Ram - Hitam',
		1205000,
		'https://www.tokopedia.com/jayapc/memory-apacer-nox-rgb-aura-ii-ddr4-pc25600-3200mhz-32gb-2x16gb-ram-hitam?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/9/57dffa4b-949b-452b-a5a4-c4cd928d35dc.jpg',
		{ size_ram: 32, speed_ram: 3200, type_ddr: 'DDR4' }
	),
	//
	new Component(
		'RAM KINGSTON DDR5 FURY BEAST RGB 16GB KIT 5200 (8GBx2) 5200MHz',
		1308000,
		'https://www.tokopedia.com/youngscom/ram-kingston-ddr5-fury-beast-rgb-16gb-kit-5200-8gbx2-5200mhz?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D15930207&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/1/d052f172-7d8c-4dd5-a120-cbbaa7e70cb2.png',
		{ size_ram: 16, speed_ram: 5200, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'TEAM T-Force Delta RGB (2x8) 16GB DDR4 kit 3200MHz - White Memory RAM',
		740000,
		'https://www.tokopedia.com/klikgalaxy/team-t-force-delta-rgb-2x8-16gb-ddr4-kit-3200mhz-white-memory-ram?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/product-1/2020/2/18/3525669/3525669_3e04bcc3-f86f-4214-9166-e2e21257408c_800_800',
		{ size_ram: 16, speed_ram: 3200, type_ddr: 'DDR4' }
	),
	//
	new Component(
		'TEAM T-CREATE EXPERT (2x16) 32GB DDR5 kit 6400Mhz Memory RAM - Hitam',
		1875000,
		'https://www.tokopedia.com/gasol/team-t-create-expert-2x16-32gb-ddr5-kit-6400mhz-memory-ram-hitam-74a25?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/10/381ab00e-cbe0-43dc-92c6-de5b6fd13d66.jpg',
		{ size_ram: 32, speed_ram: 6400, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'ADATA XPG D10 RAM PC DDR4 8GB 16GB 32GB PC25600 3200MHZ SINGLE DUAL - 8GB DUAL, Hitam',
		637000,
		'https://www.tokopedia.com/adataxpgofficialstore/adata-xpg-d10-ram-pc-ddr4-8gb-16gb-32gb-pc25600-3200mhz-single-dual-8gb-dual-hitam?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/15/9db2a3fd-353d-403e-ac70-9cfa3fb529eb.jpg',
		{ size_ram: 8, speed_ram: 3200, type_ddr: 'DDR4' }
	),
	//
	new Component(
		'XPG LANCER RGB RAM PC DDR5 32GB (2x16GB) PC 57600 / 7200MHz DUAL - Hitam',
		2813000,
		'https://www.tokopedia.com/adataxpgofficialstore/xpg-lancer-rgb-ram-pc-ddr5-32gb-2x16gb-pc-57600-7200mhz-dual-hitam?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/27/e1fbc588-ae42-4d2e-9b61-b027229ec04a.jpg',
		{ size_ram: 32, speed_ram: 7200, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'XPG D35 RAM PC DDR4 16GB (2x8GB) PC 25600 3200MHZ 8GB DUAL CHANNEL - Hitam',
		787000,
		'https://www.tokopedia.com/adataxpgofficialstore/xpg-d35-ram-pc-ddr4-16gb-2x8gb-pc-25600-3200mhz-8gb-dual-channel-hitam?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/10/2c80ca7f-8477-4b43-bdb7-02ed529ad92e.jpg',
		{ size_ram: 16, speed_ram: 3200, type_ddr: 'DDR4' }
	),
	//
	new Component(
		'G.skill Ripjaws S5 DDR5 6000mhz CL30 32GB 2x16GB Intel XMP - RAM PC - Hitam',
		2187000,
		'https://www.tokopedia.com/gamingpcstore/g-skill-ripjaws-s5-ddr5-6000mhz-cl30-32gb-2x16gb-intel-xmp-ram-pc-hitam-2e7d6?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/25/dcdb5b34-071d-4d4e-8801-c9587ccd98c1.png',
		{ size_ram: 32, speed_ram: 6000, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'Memory Team T-Create Expert DDR4 PC25600 3200Mhz 16GB 2x8GB Ram',
		638000,
		'https://www.tokopedia.com/jayapc/memory-team-t-create-expert-ddr4-pc25600-3200mhz-16gb-2x8gb-ram?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/27/0070850d-075f-4d77-ba1f-4571fa0b7a2f.jpg',
		{ size_ram: 16, speed_ram: 3200, type_ddr: 'DDR4' }
	),
	//
	new Component(
		'TEAM T-CREATE EXPERT (2x16) 32GB DDR5 kit 6400Mhz Memory RAM - Hitam',
		1875000,
		'https://www.tokopedia.com/gasolkaliurang/team-t-create-expert-2x16-32gb-ddr5-kit-6400mhz-memory-ram-hitam-3b315?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/10/fafccad3-febe-41bc-9d88-6ca78a47b2b7.jpg',
		{ size_ram: 32, speed_ram: 6400, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'Longdimm VenomRX DDR4 8GB 2666Mhz Memory RAM PC Venom RX',
		223000,
		'https://www.tokopedia.com/reformasicompute/longdimm-venomrx-ddr4-8gb-2666mhz-memory-ram-pc-venom-rx?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/10/13/0cc04462-e0b7-435b-a68c-ae31cbd9ad4c.jpg',
		{ size_ram: 8, speed_ram: 2666, type_ddr: 'DDR4' }
	),
	//
	new Component(
		'Memory Kingston Fury Beast RGB PC41600 5200Mhz DDR5 16GB - 2x8GB Ram',
		1338000,
		'https://www.tokopedia.com/jayapc/memory-kingston-fury-beast-rgb-pc41600-5200mhz-ddr5-16gb-2x8gb-ram?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/16/594d9e77-8ac1-45d2-9388-4509246b6681.jpg',
		{ size_ram: 16, speed_ram: 5200, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'Team Elite Plus Black DDR4 PC25600 Dual Channel 32GB / RAM 32GB',
		1142000,
		'https://www.tokopedia.com/enterkomputer/team-elite-plus-black-ddr4-pc25600-dual-channel-32gb-ram-32gb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/10/29/c5eb7472-2639-4540-920f-390f553e7284.jpg',
		{ size_ram: 32, speed_ram: 3200, type_ddr: 'DDR4' }
	),
	//
	new Component(
		'Team Ram T-Force Delta RGB DDR5 32GB Kit ( 16GB x 2 ) PC 5600 Mhz - White',
		1735000,
		'https://www.tokopedia.com/pcrakitanofficial/team-ram-t-force-delta-rgb-ddr5-32gb-kit-16gb-x-2-pc-5600-mhz-white-63543?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2024/1/3/4b4d47ca-b2c4-42a1-8c0d-0867ef450001.jpg',
		{ size_ram: 32, speed_ram: 5600, type_ddr: 'DDR5' }
	),
	//
	new Component(
		'Memory Lexar Thor DDR4 PC25600 3200Mhz 16GB 2x8GB Ram',
		589000,
		'https://www.tokopedia.com/ragamhardisk/memory-lexar-thor-ddr4-pc25600-3200mhz-16gb-2x8gb-ram?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/9/8a222336-6dff-4729-aff1-5cef2f535674.jpg',
		{ size_ram: 16, speed_ram: 3200, type_ddr: 'DDR4' }
	),
];

const motherboards = [
	new Component(
		'Motherboard KYO KAIZEN A520M PRO AMD AM4 A520 DDR4 Mobo A520M PRO',
		750000,
		'https://www.tokopedia.com/kyo-official/motherboard-kyo-kaizen-a520m-pro-amd-am4-a520-ddr4-mobo-a520m-pro?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/8/535c9b96-39ab-43ac-878e-d1c95c67126a.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR4', soket_mobo: 'AM4', support_storage: 'SATA' }
	),
	new Component(
		'Motherboard ASROCK - B450M-HDV R4.0 Ryzen AM4 Micro ATX Form Factor',
		979000,
		'https://www.tokopedia.com/nanokomputer/motherboard-asrock-b450m-hdv-r4-0-ryzen-am4-micro-atx-form-factor?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/23/9b384a7e-fac1-4b50-ac1b-e59f9b9f18d6.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR4', soket_mobo: 'AM4', support_storage: 'M.2 NVME' }
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
		'Motherboard ASRock B650M Pro RS - AM5, AMD B650, DDR5, USB3.2 Type-C',
		2459000,
		'https://www.tokopedia.com/enterkomputer/motherboard-asrock-b650m-pro-rs-am5-amd-b650-ddr5-usb3-2-type-c?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/1/be4f8e9e-0b3f-48cf-ba46-04ef964480cd.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR5', soket_mobo: 'AM5', support_storage: 'M.2 NVME' }
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
		'Motherboard ASRock B660M PRO RS | m-ATX | Intel LGA 1700 | DDR4',
		1795000,
		'https://www.tokopedia.com/eseskomputertasikmalaya/motherboard-asrock-b660m-pro-rs-m-atx-intel-lga-1700-ddr4?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/6/18/466ab4c4-14a2-4ed0-b2e3-7999a1257b29.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR4', soket_mobo: 'LGA1700', support_storage: 'M.2 NVME' }
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
	//
	new Component(
		'GIGABYTE B650M AORUS PRO AX - DDDR5 AM5 WIFI MOTHERBOARD',
		3999000,
		'https://www.tokopedia.com/armadakomputer/gigabyte-b650m-aorus-pro-ax-dddr5-am5-wifi-motherboard?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/1/9cff7637-9a84-4fcd-ac26-9f22010b311f.jpg',
		{ size_mobo: 'Micro ATX', type_ddr_mobo: 'DDR5', soket_mobo: 'AM5', support_storage: 'M.2 NVME' }
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
		'Mi 23.8 Desktop Monitor 1C 75Hz 1080p Full HD - Monitor 24 inch Xiaomi',
		1224000,
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/10/18/aa6d17ab-fbfa-4cef-a6a3-8a2739e418a4.jpg',
		'https://www.tokopedia.com/goldenmouse/mi-23-8-desktop-monitor-1c-75hz-1080p-full-hd-monitor-24-inch-xiaomi?extParam=ivf%3Dfalse&src=topads',
		{ size_monitor: 24, refresh_rate: 75 }
	),
	new Component(
		'Monitor Xiaomi A27i LED 27 Inch IPS 100Hz Desktop Low Blue Light HDMI',
		1493000,
		'https://www.tokopedia.com/ichi-tech/monitor-xiaomi-a27i-led-27-inch-ips-100hz-desktop-low-blue-light-hdmi?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/21/e494a4cb-ea12-4b91-a01b-2f54b1a7083e.jpg',
		{ size_monitor: 27, refresh_rate: 100 }
	),

	//
	new Component(
		'Monitor LED LG 24 Inch 24MK600 HDMI IPS 75hz 5ms thin bezel 24MK600M-B - 24MR400',
		1253000,
		'https://www.tokopedia.com/harcoxpress/monitor-led-lg-24-inch-24mk600-hdmi-ips-75hz-5ms-thin-bezel-24mk600m-b-24mr400-eff03?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/11/c8589b20-8f9b-4d5a-92a6-f30a11f19cc6.jpg',
		{ size_monitor: 24, refresh_rate: 75 }
	),
	//
	new Component('SAMSUNG Curved Monitor LC32R500 32"inch', 2740000, 'https://www.tokopedia.com/bakul-it/samsung-curved-monitor-lc32r500-32-inch?extParam=ivf%3Dfalse&src=topads', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/4/21/4080b5ff-2343-4665-be05-fe3fb9667ff2.jpg', {
		size_monitor: 32,
		refresh_rate: 75,
	}),
	//
	new Component(
		'Lenovo Monitor Legion R25i-30 24.5" IPS 165Hz - R27i',
		2689000,
		'https://www.tokopedia.com/lenovo-official/lenovo-monitor-legion-r25i-30-24-5-ips-165hz-r27i-ba410?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/8/1649b3d5-5674-4e17-a203-730eba8f7433.jpg',
		{ size_monitor: 24.5, refresh_rate: 165 }
	),
	//
	new Component(
		'Monitor OLED LG 48GQ900 /48GQ900-B UltraGear OLED 0.1ms 120hz G-sync',
		17599000,
		'https://www.tokopedia.com/houseofgeeks/monitor-oled-lg-48gq900-48gq900-b-ultragear-oled-0-1ms-120hz-g-sync?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/16/8d2fc2cd-c198-4613-8eb3-608ca3aaf6c4.jpg',
		{ size_monitor: 48, refresh_rate: 120 }
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
	new Component('Cooler Master GM27-CQS Gaming Monitor', 3299000, 'https://www.tokopedia.com/coolermaster-id/cooler-master-gm27-cqs-gaming-monitor?extParam=cmp%3D1%26ivf%3Dfalse&src=topads', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/23/be8b67e7-f8c3-4662-97b0-afb4b5316827.jpg', {
		size_monitor: 27,
		refresh_rate: 170,
	}),
	//
	new Component(
		'Monitor Samsung S49C950 LED 49 Inch VA 120Hz Curved HDMI USB C',
		15469000,
		'https://www.tokopedia.com/ichi-tech/monitor-samsung-s49c950-led-49-inch-va-120hz-curved-hdmi-usb-c?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/13/f5ad54aa-09fc-40d1-87f3-77c89e324c6f.jpg',
		{ size_monitor: 49, refresh_rate: 120 }
	),
	//
	new Component(
		'Xiaomi Gaming Monitor G27i 27 Inch 1080P 165Hz Monitor Gaming',
		1935000,
		'https://www.tokopedia.com/mitimes/xiaomi-gaming-monitor-g27i-27-inch-1080p-165hz-monitor-gaming?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/12/73348fb2-cc4a-433a-9751-28a0529dcce2.jpg',
		{ size_monitor: 27, refresh_rate: 165 }
	),
	//
	new Component(
		'Monitor Samsung S49C950 Curved 120hz DQHD | LS 49C950',
		5895000,
		'https://www.tokopedia.com/d-m-i/dell-u2724d-i-u2724de-27-inch-ultrasharp-qhd-ips-120hz-hdmi-dp-usb-c-monitor-u2724d-96540?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/21/efbd5763-b25c-4b6f-be97-881edd31d2e8.jpg',
		{ size_monitor: 27, refresh_rate: 120 }
	),
	//
	new Component(
		'GIGABYTE G34WQC A Ultra-Wide Curved WQHD Gaming Monitor [1440p, 144Hz]',
		5180000,
		'https://www.tokopedia.com/imbapc/gigabyte-g34wqc-a-ultra-wide-curved-wqhd-gaming-monitor-1440p-144hz?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/16/dabff4f9-ebe3-45f1-aa4c-76b5d34406a1.jpg',
		{ size_monitor: 34, refresh_rate: 144 }
	),
	//
	new Component(
		'Monitor LED MSI Pro MP2412 24" 1080p FHD 100Hz HDMIx1 DPx1 VESA',
		1349000,
		'https://www.tokopedia.com/ircomputer/monitor-led-msi-pro-mp2412-24-1080p-fhd-100hz-hdmix1-dpx1-vesa?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/29/eda140bd-3682-455b-9ea1-6164fac3aac2.jpg',
		{ size_monitor: 24, refresh_rate: 100 }
	),
	//
	new Component(
		'Monitor ASUS ProArt 34" PA348CGV IPS QHD 2ms 120Hz HDMi DP USB C',
		16520000,
		'https://www.tokopedia.com/ctcharco/monitor-asus-proart-34-pa348cgv-ips-qhd-2ms-120hz-hdmi-dp-usb-c?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/6/8c53ca5a-b73f-4987-91aa-92d55609c3a5.png',
		{ size_monitor: 34, refresh_rate: 120 }
	),
	//
	new Component(
		'LG UltraGear™ 48GQ900-B 48 UltraGear™ UHD OLED Monitor with G-SYNC®',
		17779000,
		'https://www.tokopedia.com/lg-monitor/lg-ultragear-48gq900-b-48-ultragear-uhd-oled-monitor-with-g-sync',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/16/c144f1dd-6a82-4476-b33a-c1984ce31f8a.jpg',
		{ size_monitor: 47.53, refresh_rate: 120 }
	),
	//
	new Component(
		'Monitor Gaming Sora 24 inch 75Hz Full HD Panel IPS SR23I75',
		1469000,
		'https://www.tokopedia.com/nexhubgaming/monitor-gaming-sora-24-inch-75hz-full-hd-panel-ips-sr23i75?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/26/307aa163-2e1c-4f76-8852-d4a1a518476c.jpg',
		{ size_monitor: 24, refresh_rate: 75 }
	),
	//
	new Component(
		'LG 27GN60R-B Monitor Gaming 27" Full HD IPS 1ms 144Hz NVIDIA G-SYNC - 27GN60R, Bubble Wrap',
		2599000,
		'https://www.tokopedia.com/winskamera/lg-27gn60r-b-monitor-gaming-27-full-hd-ips-1ms-144hz-nvidia-g-sync-27gn60r-bubble-wrap?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/31/f38bf13d-6741-46e6-b984-2cb1d92d17c6.jpg',
		{ size_monitor: 27, refresh_rate: 144 }
	),
	//
	new Component(
		'LG 48 UltraGear 48GQ900-B - UHD OLED Monitor 0.1ms 120Hz G-SYNC Comp',
		18600000,
		'https://www.tokopedia.com/nesindotech/lg-48-ultragear-48gq900-b-uhd-oled-monitor-0-1ms-120hz-g-sync-comp?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/22/5599bf07-6fa0-4ed7-bd31-1ee07bf9194f.jpg',
		{ size_monitor: 48, refresh_rate: 120 }
	),
	//
	new Component(
		'LG UltraGear™ 24GQ50F-B 23.8" FHD VA Gaming Monitor AMD FreeSync',
		1625000,
		'https://www.tokopedia.com/lg-monitor/lg-ultragear-24gq50f-b-23-8-fhd-va-gaming-monitor-amd-freesync',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/7/6abd3f6d-d6ba-4e82-96c1-b67e86cc79d6.jpg',
		{ size_monitor: 24, refresh_rate: 165 }
	),
	//
	new Component(
		'Monitor LENOVO G34w-30 VA 3440x1440 144Hz 1ms 66F1GAC1WW',
		5649000,
		'https://www.tokopedia.com/blessingcombali/monitor-lenovo-g34w-30-va-3440x1440-144hz-1ms-66f1gac1ww?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/12/4693d2fd-3a4e-44ce-a977-1e7a18a22625.jpg',
		{ size_monitor: 34, refresh_rate: 144 }
	),
	//
	new Component(
		'MONITOR ASROCK CHALLENGER CL25FF 24.5" - IPS 100Hz 1ms MPRT FreeSync',
		1220000,
		'https://www.tokopedia.com/tokoexpert/monitor-asrock-challenger-cl25ff-24-5-ips-100hz-1ms-mprt-freesync?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/17/ac8dfaa9-5ec9-42bb-bb72-ae903cb81b3d.jpg',
		{ size_monitor: 25, refresh_rate: 100 }
	),
	//
	new Component(
		'Xiaomi Mi Monitor 34" XOMT01BK Curved Gaming 144Hz WQHD Garansi Resmi - NEW G34WQi, TANPA KAYU',
		4150000,
		'https://www.tokopedia.com/multifungsiharco/xiaomi-mi-monitor-34-xomt01bk-curved-gaming-144hz-wqhd-garansi-resmi-new-g34wqi-tanpa-kayu-ee308?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D15512482',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/24/f3bd4d30-9800-4ebe-b5e1-fae8bcfd5e88.jpg',
		{ size_monitor: 34, refresh_rate: 144 }
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
	new Component('Rexus Mouse Gaming Bara X17 Crystal RGB', 200000, 'https://www.tokopedia.com/v-technology/rexus-mouse-gaming-bara-x17-crystal-rgb?extParam=ivf%3Dfalse&src=topads', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/19/502207a8-3e5f-4486-aea7-f471225b70be.jpg', {
		dpi: 12800,
	}),
	//
	new Component(
		'Mouse Wireless Bluetooth UGREEN 2.4GHz Silent Klik 5Level 1000-4000DPI - 90545 Dongle',
		125000,
		'https://www.tokopedia.com/ugreenofficialstore/mouse-wireless-bluetooth-ugreen-2-4ghz-silent-klik-5level-1000-4000dpi-90545-dongle?extParam=ivf%3Dtrue%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/14/6d5b2019-b837-4776-8490-b4fb55fe29ae.png',
		{ dpi: 4000 }
	),
	//
	new Component('Micropack Dual Wireless Mouse MP-752W - Biru', 190000, 'https://www.tokopedia.com/goldenmouse/micropack-dual-wireless-mouse-mp-752w-biru?extParam=ivf%3Dfalse&src=topads', 'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/3/29/54169afb-3263-47ce-8579-38ad6e6bd341.jpg', {
		dpi: 1000,
	}),
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
	//
	new Component(
		'Logitech MX Master 3S Performance Mouse Wireless Bluetooth Quiet Click - Pale Grey',
		1619000,
		'https://www.tokopedia.com/logitech/logitech-mx-master-3s-performance-mouse-wireless-bluetooth-quiet-click-pale-grey',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/18/fe22bb2f-f2d9-4919-8ad4-b99b0cec64b7.jpg',
		{ dpi: 8000 }
	),
	//
	new Component(
		'Mouse Logitech M331 - Silent Mouse - Garansi Resmi - Merah',
		214500,
		'https://www.tokopedia.com/gadgetchannel/mouse-logitech-m331-silent-mouse-garansi-resmi-merah?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D444037',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/14/d717c71b-acad-445f-835e-a0bef031026e.png',
		{ dpi: 1000 }
	),
	//
	new Component(
		'Logitech LIFT Mouse Ergonomic Vertical Wireless Bluetooth Silent - Hitam',
		815000,
		'https://www.tokopedia.com/duniacom-srv/logitech-lift-mouse-ergonomic-vertical-wireless-bluetooth-silent-hitam-aea18?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/2/aad5e71f-4499-49d5-af27-3086554c47e7.jpg',
		{ dpi: 4000 }
	),
	//
	new Component(
		'Logitech Pop Mouse Wireless Bluetooth Mouse with Customizable Emoji - BlastYellow',
		387000,
		'https://www.tokopedia.com/duniacom-srv/logitech-pop-mouse-wireless-bluetooth-mouse-with-customizable-emoji-blastyellow?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/23/22ee9b8e-4b66-4755-878a-cb518579fa5b.jpg',
		{ dpi: 4000 }
	),
	//
	new Component(
		'LOGITECH Mouse Wireless Bluetooth M170 for Windows, Mac, ChromeOS - M170 DONGLE',
		119000,
		'https://www.tokopedia.com/carbonofficial/logitech-mouse-wireless-bluetooth-m170-for-windows-mac-chromeos-m170-dongle-69d94?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/28/9995e4c3-1cd0-43dd-b884-afa44602b3c5.jpg',
		{ dpi: 1000 }
	),
	//
	new Component(
		'Mouse Logitech G102 gaming Prodigy',
		278000,
		'https://www.tokopedia.com/urbanprinter/mouse-logitech-g102-gaming-prodigy?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/product-1/2020/4/21/18737367/18737367_765086e2-1083-4bb6-aaa2-25275d39e02a_800_800',
		{ dpi: 8000 }
	),
	//
	new Component(
		'Logitech M220 Mouse Wireless Silent Click - Off White',
		179000,
		'https://www.tokopedia.com/logitech/logitech-m220-mouse-wireless-silent-click-off-white?extParam=ivf%3Dtrue%26whid%3D12669178&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/17/95943c4b-fdcc-4686-b1a0-200f2b2157e3.jpg',
		{ dpi: 1000 }
	),
	//
	new Component(
		'Mouse Gaming Rexus Xierra X18 RIFLE - Hitam',
		151000,
		'https://www.tokopedia.com/rexusid/mouse-gaming-rexus-xierra-x18-rifle-hitam?extParam=cmp%3D1%26ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/6/461578c1-d7c8-4a4f-8ba2-5231d757093b.png',
		{ dpi: 7200 }
	),
	//
	new Component(
		'Rexus Clif QV-260 QV260 Vertical Gaming Mouse Wireless Dual-Mode - Putih',
		154500,
		'https://www.tokopedia.com/clover-gaming/rexus-clif-qv-260-qv260-vertical-gaming-mouse-wireless-dual-mode-putih-ad219?extParam=ivf%3Dtrue&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/10/31/46c74d2f-d715-44f8-9e7a-762e7be56780.jpg',
		{ dpi: 2400 }
	),
	//
	new Component(
		'Rexus Xierra X15 RGB Macro Gaming Mouse X 15 X-15 - Silver',
		155000,
		'https://www.tokopedia.com/clover-gaming/rexus-xierra-x15-rgb-macro-gaming-mouse-x-15-x-15-silver?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/2/8/3f628b7e-8f72-4191-972d-a1353481d637.jpg',
		{ dpi: 7200 }
	),
	//
	new Component(
		'Rexus Mouse Wireless + Bluetooth Office Q35 Silent Click - Green',
		64500,
		'https://www.tokopedia.com/logitechplus/rexus-mouse-wireless-bluetooth-office-q35-silent-click-green-06d42?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/8/4/6ee8844c-f8c9-446e-b3ad-6184b2f6b12e.jpg',
		{ dpi: 1600 }
	),
	//
	new Component(
		'Rexus QB300 / QB-300 Mouse Office Wireless Bluetooth Dual Mode - Blue',
		115000,
		'https://www.tokopedia.com/clover-gaming/rexus-qb300-qb-300-mouse-office-wireless-bluetooth-dual-mode-black-85997?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2024/3/16/00920a77-01b8-40e6-80d0-25c9a4fc3d28.jpg',
		{ dpi: 1600 }
	),
	//
	new Component('Rexus Mouse Wireless Gaming Xierra 109', 95000, 'https://www.tokopedia.com/boss-muda88/rexus-mouse-wireless-gaming-xierra-109?extParam=ivf%3Dfalse%26src%3Dsearch', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/3/6/79c84d7e-ec4a-46d8-944d-125e5bc251de.jpg', {
		dpi: 1600,
	}),
	//
	new Component(
		'Fantech XD3 V3 1K 4K Helios II 2 Pro Wireless Mouse XD3V3 FantechXD3V3 - XD3 V3 PUTIH 1K',
		699000,
		'https://www.tokopedia.com/fraggamingstore/fantech-xd3-v3-1k-4k-helios-ii-2-pro-wireless-mouse-xd3v3-fantechxd3v3-xd3-v3-putih-1k-cdded?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/12/22/c4c235dc-93d7-4dbe-930d-b84d0fba4220.jpg',
		{ dpi: 26000 }
	),
	//
	new Component(
		'Fantech PHANTOM II VX6 Mouse Gaming Macro RGB - Putih',
		199000,
		'https://www.tokopedia.com/fantechstore/fantech-phantom-ii-vx6-mouse-gaming-macro-rgb-putih-5831f?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/26/334d0393-40d0-47aa-acab-dae58e0e730c.jpg',
		{ dpi: 7200 }
	),
	//
	new Component(
		'Fantech UX3 Helios RGB Gaming Mouse with Pixart 3389 sensor 69 grams - Hitam',
		379000,
		'https://www.tokopedia.com/clickandgo/fantech-ux3-helios-rgb-gaming-mouse-with-pixart-3389-sensor-69-grams-hitam?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/30/7e3bbb8c-2df9-4bdb-921e-75cca944b4c4.jpg',
		{ dpi: 16000 }
	),
	//
	new Component(
		'Fantech W190 - W-190 Wireless Dual Connection Silent Mouse - White',
		92000,
		'https://www.tokopedia.com/clover-gaming/fantech-w190-w-190-wireless-dual-connection-silent-mouse-white?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/8/98279327-6f9e-4b6c-b86e-1d45e92f9408.jpg',
		{ dpi: 1600 }
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
	//
	new Component(
		'AJAZZ AK992 Gasket Mount Hotswap Mehanical - Gaming Keyboard - Black Pink, Red Sw',
		549000,
		'https://www.tokopedia.com/goodgamingshop/ajazz-ak992-gasket-mount-hotswap-mehanical-gaming-keyboard-black-pink-red-sw?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/29/af11efe8-ef75-43ce-9fb8-91c8ff7c0430.jpg',
		{ size_keyboard: 100 }
	),
	//
	new Component(
		'Keyboard Gaming Mechanical Hotswap Komic KG-KM870 TKL Blue-Red Switch',
		285000,
		'https://www.tokopedia.com/komicofficial/keyboard-gaming-mechanical-hotswap-komic-kg-km870-tkl-blue-red-switch?extParam=ivf%3Dtrue',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/4/c3751514-0a75-4435-886a-ef93f4031c0d.jpg',
		{ size_keyboard: 80 }
	),
	//
	new Component(
		'Altec Lansing Keyboard Dual Mode Wireless/Bluetooth ALBK6268',
		199000,
		'https://www.tokopedia.com/alteclansing/altec-lansing-keyboard-dual-mode-wireless-bluetooth-albk6268?extParam=cmp%3D1%26ivf%3Dfalse',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/8/401ed8a8-7bfb-4127-a4dc-542db8ffe253.jpg',
		{ size_keyboard: 100 }
	),
	//
	new Component(
		'Fantech MAXFIT61 Frost Wireless - MAXFIT 61 Mechanical Gaming Keyboard - Black, Red',
		599000,
		'https://www.tokopedia.com/takeshita-store/fantech-maxfit61-frost-wireless-maxfit-61-mechanical-gaming-keyboard-black-red?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/12/8/c42389fa-0e37-479c-a068-3d16893defa3.jpg',
		{ size_keyboard: 60 }
	),
	//
	new Component(
		'Fantech Maxfit70 MK911 Wireless 65% Mechanical Keyboard Gaming - London Tour, Brown Switch',
		949000,
		'https://www.tokopedia.com/tokoteknopro/fantech-maxfit70-mk911-wireless-65-mechanical-keyboard-gaming-london-tour-brown-switch-48a6b?extParam=ivf%3Dtrue&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/23/3282b24e-69b1-420d-be4c-804227532da7.jpg',
		{ size_keyboard: 65 }
	),
	//
	new Component(
		'Fantech ATOM MK886 RGB Gaming Mechanical Keyboard Full Size - Black, Blue Switch',
		229000,
		'https://www.tokopedia.com/superstorecom/fantech-atom-mk886-rgb-gaming-mechanical-keyboard-full-size-black-blue-switch?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/9/620cdd6e-dd4b-4dca-96d1-bdcf0d77d99f.jpg',
		{ size_keyboard: 75 }
	),
	//
	new Component(
		'Fantech ATOM PRO63/PRO83/PRO96 | MK913 Wireless Mechanical Keyboard - PRO83 SATURN, RED SWITCH',
		675000,
		'https://www.tokopedia.com/superstorecom/fantech-atom-pro63-pro83-pro96-mk913-wireless-mechanical-keyboard-pro83-saturn-red-switch-ca415?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/3/30/11829c8e-0ecf-4632-890f-3f8d4d6cc0b7.jpg',
		{ size_keyboard: 75 }
	),
	//
	new Component(
		'Logitech K380 Bluetooth Wireless Keyboard Multi Device Garansi Resmi - Putih',
		379000,
		'https://www.tokopedia.com/planetcomputer/logitech-k380-bluetooth-wireless-keyboard-multi-device-garansi-resmi-putih?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D13188785',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/13/40acb313-8c63-4a0f-a57c-5f2d5154c55e.jpg',
		{ size_keyboard: 60 }
	),
	//
	new Component(
		'Logitech MX Keys Mini For Mac Keyboard Wireless Bluetooth Minimalist',
		1600000,
		'https://www.tokopedia.com/aquarius-id/logitech-mx-keys-mini-for-mac-keyboard-wireless-bluetooth-minimalist?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/12/17/d665dd0a-dac8-4e0d-b4c1-9a9bb68d041d.jpg',
		{ size_keyboard: 60 }
	),
	//
	new Component('Logitech K120 USB Keyboard', 104507, 'https://www.tokopedia.com/goldencasuarina/logitech-k120-usb-keyboard?extParam=ivf%3Dfalse%26src%3Dsearch', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/29/b60c7a69-d3c0-4af2-a999-ea6df38dd4ca.jpg', { size_keyboard: 100 }),
	//
	new Component(
		'Logitech POP Keys Wireless Mechanical Emoji Keyboard - Kuning',
		1675000,
		'https://www.tokopedia.com/ca-komputer/logitech-pop-keys-wireless-mechanical-emoji-keyboard-kuning?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/12/15/42ddce2f-9d96-4480-8593-a7b47eabc639.jpg',
		{ size_keyboard: 75 }
	),
	//
	new Component(
		'Keyboard Logitech POP Mechanical Wireless Daydream Mint/Blast Yellow - BLAST YELLOW - BLAST YELLOW',
		1550000,
		'https://www.tokopedia.com/alienwaregamingid/keyboard-logitech-pop-mechanical-wireless-daydream-mint-blast-yellow-blast-yellow-blast-yellow-ea30e?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2024/5/26/81c0410a-37e6-4e80-8110-d7dcb857864f.jpg',
		{ size_keyboard: 75 }
	),
	//
	new Component(
		'Rexus Keyboard Gaming Mini Battlefire K68M - Hitam',
		209000,
		'https://www.tokopedia.com/rexusid/rexus-keyboard-gaming-mini-battlefire-k68m-hitam?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/6/c69cb9b8-5385-4746-b8cf-a58107755167.png',
		{ size_keyboard: 75 }
	),
	//
	new Component(
		'Rexus Keyboard Gaming Battlefire K98M - Dark Grey',
		199000,
		'https://www.tokopedia.com/rexusid/rexus-keyboard-gaming-battlefire-k98m-dark-grey?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/7/31/ae86fe57-7d91-4087-84ae-6a9a6dd975ef.jpg',
		{ size_keyboard: 100 }
	),
	//
	new Component(
		'Rexus Keyboard Gaming Mechanical Daxa M100X Ultimate - Kaihl Box White',
		994000,
		'https://www.tokopedia.com/rexusid/rexus-keyboard-gaming-mechanical-daxa-m100x-ultimate-kaihl-box-white?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/8/07da1eac-8527-4f5e-a57c-6451ba2828c0.png',
		{ size_keyboard: 100 }
	),
	//
	new Component(
		'Rexus Keyboard Gaming Mechanical Legionare MX9 TKL RGB - Putih',
		405000,
		'https://www.tokopedia.com/jayautamacom/rexus-keyboard-gaming-mechanical-legionare-mx9-tkl-rgb-putih-a1a0?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/6/22/23d2f150-1617-4ca9-acc0-8c5ce68de00b.jpg',
		{ size_keyboard: 80 }
	),
	//
	new Component(
		'Rexus Heroic KX5 Mechanical Keyboard Grey Black - Blue/Red/Brown Swth',
		296000,
		'https://www.tokopedia.com/enterkomputer/rexus-heroic-kx5-mechanical-keyboard-grey-black-blue-red-brown-swth?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/2/00dbb19f-a1fe-4761-a454-fca6fceb74be.jpg',
		{ size_keyboard: 100 }
	),
	//
	new Component(
		'Rexus Keyboard Dual Connection Mosaic KB01 - Putih',
		177000,
		'https://www.tokopedia.com/hagakomputer/rexus-keyboard-dual-connection-mosaic-kb01-putih-b7653?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/31/3a266413-cf7c-4594-8a6e-74912fded2ff.jpg',
		{ size_keyboard: 60 }
	),
	//
	new Component(
		'ROBOT Portable Mini Wired Keyboard RK10 Ultra-Thin Garansi Resmi 1 Thn',
		68925,
		'https://www.tokopedia.com/robotpcoffcial/robot-portable-mini-wired-keyboard-rk10-ultra-thin-garansi-resmi-1-thn?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/12/6cb5649e-c488-4809-bc2b-999ad83e0980.jpg',
		{ size_keyboard: 75 }
	),
	//
	new Component(
		'ROBOT Keyboard Berkabel Mini Office Wired Keyboard RK20 Original',
		74925,
		'https://www.tokopedia.com/robotpcoffcial/robot-keyboard-berkabel-mini-office-wired-keyboard-rk20-original?extParam=ivf%3Dtrue%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/12/e3d2845a-d263-4b9a-8cc0-6b84ad69fe1b.jpg',
		{ size_keyboard: 100 }
	),
	//
	new Component(
		'CIDOO V75 - Pre-built 75% 81 keys Hotswappable Mechanical Keyboard',
		1780000,
		'https://www.tokopedia.com/allcaps/cidoo-v75-pre-built-75-81-keys-hotswappable-mechanical-keyboard?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/20/2599113a-8565-47c1-9c27-bdd3c552f9a4.jpg',
		{ size_keyboard: 75 }
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
	//
	new Component(
		'SJS RTX 3050 8GB Graphics Card Nvidia GPU Geforce RTX3050 8GB GDDR6',
		6406000,
		'https://www.tokopedia.com/victory-shop-id/sjs-rtx-3050-8gb-graphics-card-nvidia-gpu-geforce-rtx3050-8gb-gddr6?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/hDjmkQ/2023/7/6/d27e989a-0394-4e9a-a843-b36ba9bad46a.jpg',
		{ size_GPU: 8 }
	),
	//
	new Component(
		'GPU NVIDIA GeForce RTX 4060 VGA Graphic Card RTX4060 RTX 4060',
		4779000,
		'https://www.tokopedia.com/teludigital/gpu-nvidia-geforce-rtx-4060-vga-graphic-card-rtx4060-rtx-4060?extParam=ivf%3Dfalse&src=topads',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/24/14f990b1-5205-46cd-bd00-db7ee00c265a.jpg',
		{ size_GPU: 8 }
	),
	//
	new Component(
		'GPU VGA Intel ARC A380 6GB Low Profile not gtx 1650',
		1800000,
		'https://www.tokopedia.com/gakjagokok/gpu-vga-intel-arc-a380-6gb-low-profile-not-gtx-1650?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/1/8a5da1dd-858f-4caa-a659-032651fbf49f.jpg',
		{ size_GPU: 6 }
	),
	//
	new Component(
		'Asus Dual KO OC RTX 3070 8GB Nvidia Geforce GPU 8 GB',
		4597321,
		'https://www.tokopedia.com/jevon/asus-dual-ko-oc-rtx-3070-8gb-nvidia-geforce-gpu-8-gb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/6/b2599b70-41c1-4dd1-8f8a-1122aadebce9.png',
		{ size_GPU: 8 }
	),
	//
	new Component(
		'VGA Asrock Intel Arc A310 4GB GDDR6 Low Profile GPU Intel Arc A 310',
		2048975,
		'https://www.tokopedia.com/archietech/vga-asrock-intel-arc-a310-4gb-gddr6-low-profile-gpu-intel-arc-a-310?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/14/e6c5b251-93af-46c6-80b7-5e145e352af2.jpg',
		{ size_GPU: 4 }
	),
	//
	new Component(
		'VGA GPU AMD RADEON RX 570 RX 580 4GB 8GB ASROCK SAPPHIRE POLOR MSI - POLOR RX570 8GB',
		999000,
		'https://www.tokopedia.com/onlineklik/vga-gpu-amd-radeon-rx-570-rx-580-4gb-8gb-asrock-sapphire-polor-msi-polor-rx570-8gb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/26/517b839c-3b3b-493c-99da-46991450832d.png',
		{ size_GPU: 8 }
	),
	//
	new Component(
		'MSI NVIDIA GeForce GTX 1060 GTX1060 3GT OC V2',
		3300000,
		'https://www.tokopedia.com/archive-monascomputer-1630710218/msi-nvidia-geforce-gtx-1060-gtx1060-3gt-oc-v2?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/product-1/2019/12/20/7425170/7425170_39e1bc6e-c4b6-47ae-b4c4-01ed5a413148_500_500.jpg',
		{ size_GPU: 3 }
	),
	//
	new Component(
		'GIGABYTE AMD RADEON RX 6600 / RX6600 EAGLE 8GB GDDR6 GV-R66EAGLE-8GD - 2ND',
		2599999,
		'https://www.tokopedia.com/redteknologi/gigabyte-amd-radeon-rx-6600-rx6600-eagle-8gb-gddr6-gv-r66eagle-8gd-2nd?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/26/ea6eab57-60a8-4dcb-a9e7-cab37913c1bc.jpg',
		{ size_GPU: 8 }
	),
	//
	new Component(
		'ASRock Challenger Vga AMD Radeon RX 6600 RX6600 8GB GDDR6 128bit',
		3599000,
		'https://www.tokopedia.com/multicomm1/asrock-challenger-vga-amd-radeon-rx-6600-rx6600-8gb-gddr6-128bit?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/22/52e44570-479a-497d-aa73-3a8a6df02476.jpg',
		{ size_GPU: 8 }
	),
	//
	new Component('INNO3D GEFORCE RTX 4060 Ti 8GB TWIN X2', 7100000, 'https://www.tokopedia.com/inno3d/inno3d-geforce-rtx-4060-ti-8gb-twin-x2?extParam=ivf%3Dfalse&src=topads', 'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/2/ecc92895-b0a7-463e-9dfd-f09657b34dcd.png', { size_GPU: 8 }),
	//
	new Component(
		'Zotac Nvidia GPU RTX 3050 Eco Solo 8gb',
		3505000,
		'https://www.tokopedia.com/cbtsurabaya/zotac-nvidia-gpu-rtx-3050-eco-solo-8gb?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/9/388a12f4-56ce-403b-affa-8e48b766f579.png',
		{ size_GPU: 8 }
	),
	//
	new Component(
		'AMD Radeon GPU RX 5700 XT 8GB GDDR6 MSI Power Color Bukan RTX RX VGA - Polor RedDragon',
		2400000,
		'https://www.tokopedia.com/onlineklik/amd-radeon-gpu-rx-5700-xt-8gb-gddr6-msi-power-color-bukan-rtx-rx-vga-polor-reddragon-1dba4?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/4/7db0734b-f04d-4132-a1fc-c7ce965c9d64.jpg',
		{ size_GPU: 8 }
	),
	//
	new Component(
		'MSI Nvidia GeForce RTX 4060 GAMING X 8GB GDDR6 VGA GPU',
		9135000,
		'https://www.tokopedia.com/herdaruonline/msi-nvidia-geforce-rtx-4060-gaming-x-8gb-gddr6-vga-gpu?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/3/a1da68ea-4016-4d46-b074-26bbadd04ba4.jpg',
		{ size_GPU: 8 }
	),
	//
	new Component(
		'Graphic card vga nvidia geforce gtx 1080ti msi armor oc gaming edition',
		4500000,
		'https://www.tokopedia.com/oborbekasi/graphic-card-vga-nvidia-geforce-gtx-1080ti-msi-armor-oc-gaming-edition?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/27/018bd157-ffc5-456c-b240-dae271289b53.jpg',
		{ size_GPU: 11 }
	),
	//
	new Component(
		'MSI NVIDIA GeForce RTX 4070 Ti SUPER 16G VENTUS 2X OC 16GB GAMING VGA CARD GPU PC GAMING',
		15890000,
		'https://www.tokopedia.com/fcckomputer/msi-nvidia-geforce-rtx-4070-ti-super-16g-ventus-2x-oc-16gb-gaming-vga-card-gpu-pc-gaming?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/11/d316ba01-6c4b-4fcb-855d-7e654d54b2d8.jpg',
		{ size_GPU: 16 }
	),
	//
	new Component(
		'PALIT JETSTREAM GTX 1080TI BEKAS NORMAL NVIDIA',
		2750000,
		'https://www.tokopedia.com/audiocom/palit-jetstream-gtx-1080ti-bekas-normal-nvidia?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/16/71aa7188-381c-4087-8412-05eafd7e5b9c.jpg',
		{ size_GPU: 11 }
	),
	//
	new Component(
		'JIESHUO RX 6700XT 12GB 6+8PIN Video Card GPU AMD Radeon RX6700XT 12GB',
		11284000,
		'https://www.tokopedia.com/yesoljeong/jieshuo-rx-6700xt-12gb-6-8pin-video-card-gpu-amd-radeon-rx6700xt-12gb?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/24/648c8759-c677-452a-9f71-1b0ea6533090.jpg',
		{ size_GPU: 12 }
	),
	//
	new Component(
		'VGA RADEON RX 6600 XT / RX 6600 8GB DDR6 128BIT AMD RADEON GPU CARD - 6600 CHLLGR D',
		2499000,
		'https://www.tokopedia.com/uoistore/vga-radeon-rx-6600-xt-rx-6600-8gb-ddr6-128bit-amd-radeon-gpu-card-6600-chllgr-d-8449c?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/19/2beeb615-e5ee-40cb-878f-986028ff7e54.jpg',
		{ size_GPU: 8 }
	),
	//
	new Component(
		'VGA AGS VURRION AMD RADEON RX 6500 XT 4GB GDDR6 64 BIT GPU NAVI 24',
		2537000,
		'https://www.tokopedia.com/maxgshop/vga-ags-vurrion-amd-radeon-rx-6500-xt-4gb-gddr6-64-bit-gpu-navi-24?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/8/ae39e8d4-5a5a-45ab-9280-3e49390fcd39.jpg',
		{ size_GPU: 4 }
	),
	//
	new Component(
		'SAPPHIRE AMD Radeon RX 7600 XT PULSE OC 16GB GDDR6 - Gaming GPU',
		5963000,
		'https://www.tokopedia.com/gamingpcstore/sapphire-amd-radeon-rx-7600-xt-pulse-oc-16gb-gddr6-gaming-gpu?extParam=ivf%3Dfalse%26src%3Dsearch',
		'https://images.tokopedia.net/img/cache/900/VqbcmM/2024/2/10/2bb41719-0f7e-4006-b882-ef6900baecf9.jpg',
		{ size_GPU: 16 }
	),
];

// Data komponen
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

// Branch and Bound
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

	console.log(`Waktu durasi BNB: ${durationInSeconds} seconds`);
	document.getElementById('durasi_bnb').textContent = `${durationInSeconds.toString()} seconds`;
}

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
		}
		document.getElementById('total').textContent = `Rp. ${total.toLocaleString()}`;
		document.getElementById('sisa_budget').textContent = `Rp. ${(budget - bestPrice).toLocaleString()}`;

		return bestCombination;
	} else {
		return null;
	}
}

// Bruteforce
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

	document.getElementById('durasi_bruteforce').textContent = `${durationInSeconds.toString()} seconds`;
}

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
		}
		document.getElementById('bruteforce_total').textContent = `Rp. ${total.toLocaleString()}`;
		document.getElementById('bruteforce_sisa_budget').textContent = `Rp. ${(budget - bestPrice).toLocaleString()}`;

		return bestCombination;
	} else {
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
