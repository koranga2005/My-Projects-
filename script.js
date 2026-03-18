

let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i>successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please Fix the Error';
let InvalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';



function showToast(Msg) {
    let Toast = document.createElement('div');
    Toast.classList.add('Toast');
    Toast.innerHTML = Msg;
    toastBox.appendChild(Toast);

    if (Msg.includes('Error')) {
        Toast.classList.add('Error');
    }
    if (Msg.includes('Invalid')) {
        Toast.classList.add('Invalid');
    }

    setTimeout(() => {
        Toast.remove();
    }, 6000);
}