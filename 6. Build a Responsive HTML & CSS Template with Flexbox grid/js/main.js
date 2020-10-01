const navItems = document.querySelectorAll('.nav-item');
console.log(navItems);
const navContentItems = document.querySelectorAll('.items');

function selectItem(e) {
	removeBorder();
	this.classList.add('current');
	const navContentItem = document.querySelector(`#${this.id}-content`);
	navContentItem.classList.add('show');
}

function removeBorder() {
	navItems.forEach(item => item.classList.remove('current'));
	navContentItems.forEach(item => item.classList.remove('show'));
}

navItems.forEach(item => item.addEventListener('click', selectItem));