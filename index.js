const weapons = document.querySelectorAll('weapons')
const result = document.getElementById('result')
let userChoice

weapons.forEach(weapon => weapon.addEventListener('click', (e) => {
    userChoice = e.target.id
    result.innerHTML = userChoice
}))

