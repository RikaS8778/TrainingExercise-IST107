function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getMachineName() {
    return new Promise((resolve, reject) => {
        // Simulate fetching machine name (replace with actual fetching logic if necessary)
        setTimeout(() => {
            
resolve(window.location.hostname);
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    changeBackgroundColor();
    setInterval(changeBackgroundColor, 3000); // Change background color every 3 seconds

    getMachineName().then(machineName => {
        document.getElementById('machine-name').textContent = machineName;
    });
});



function openModal(){
    let number = false;
    while(!number) {
        number = prompt('Type a number!');
        if(number) {
            if (isNaN(number)){
                alert('Data type only allows as number!');
                number = false;
            } else if (!(number >= 21 && number <= 99 )) {
                alert('Valid number is between 21 to 99');
                number = false;
            } 
        }
    }
    const ul = document.createElement('ul');
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';
    

    for(i=1;i<=number;i++){
        const li = document.createElement('li');
        li.textContent = `item ${i}`;
        li.style.backgroundColor = getRandomColor();
        ul.appendChild(li);
    }
    listContainer.appendChild(ul);

    

}

// Once a valid number is provided, create an unordered list (<ul>) with the same number of list items (<li>) as the number entered by the user.
// Each list item should have a unique text, such as "Item 1", "Item 2", etc.
