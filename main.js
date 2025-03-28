document.getElementById('loadDataBtn').addEventListener('click', loadData);
document.getElementById('clearTableBtn').addEventListener('click', clearTable);

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#dataTable tbody');
            tableBody.innerHTML = ''; 
            data.slice(0, 10).forEach(item => {  
                const row = `<tr>
                                <td>${item.id}</td>
                                <td>${item.title}</td>
                                <td>${item.completed ? '✔️' : '❌'}</td>
                             </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function clearTable() {
    document.querySelector('#dataTable tbody').innerHTML = '';
}
