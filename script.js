document.getElementById('budgetForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Mencegah form dari pengiriman default

	// Ambil nilai dari input budget
	const budget = document.getElementById('budget').value;

	// Ambil nilai dari radio button yang dipilih
	const algorithm = document.querySelector('input[name="algoritma"]:checked').value;

	// Tampilkan nilai di console
	console.log('Budget:', budget);
	console.log('Algorithm:', algorithm);

	// Lakukan sesuatu dengan nilai budget dan algorithm, misalnya kirim ke server atau tampilkan di halaman
});

document.addEventListener('DOMContentLoaded', () => {
	// Mendapatkan semua elemen tombol close
	const closeButtons = document.querySelectorAll('[data-dismiss-target]');

	closeButtons.forEach((button) => {
		button.addEventListener('click', function () {
			const target = document.querySelector(this.getAttribute('data-dismiss-target'));
			if (target) {
				target.remove();
			}
		});
	});
});
