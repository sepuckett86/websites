import data from '../data/example-data.js';
import sortSymposia from './sort-symposia.js';
import filterSymposia from './filter-symposia.js';

const input = document.getElementById('filter-input');
const order = document.getElementById('order-input');

sortAndFilter(data);

input.addEventListener('input', () => {
    sortAndFilter(data);
});

order.addEventListener('input', () => {
    sortAndFilter(data);
});

function sortAndFilter(data) {
    const sorted = sortSymposia(data, {
        property: 'YEAR',
        direction: order.value
    });
    const filtered = filterSymposia(sorted, {
        text: input.value
    });
    renderTableRows(filtered);
}

function renderTableRows(data) {
    const tableBody = document.getElementById('table-body');
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    data.forEach(row => {
        const tr = document.createElement('tr');
        const columnHeaders = Object.keys(row);
        columnHeaders.forEach(column => {
            const td = document.createElement('td');
            td.textContent = row[column];
            tr.appendChild(td);
        })
        tableBody.appendChild(tr);
    });
}


