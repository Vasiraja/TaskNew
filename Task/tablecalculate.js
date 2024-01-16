const Employees = [
    {
        Emp_id: 23419,
        Emp_Name: 'Siva',
        Emp_Task: 'Property-Automation',
        Status: 'Intermediate'
    },
    {
        Emp_id: 23513,
        Emp_Name: 'Anitha',
        Emp_Task: 'Documents-Implementation',
        Status: 'Intermediate'
    },
    {
        Emp_id: 23200,
        Emp_Name: 'Michale',
        Emp_Task: 'Project-Automation',
        Status: 'Complete'
    },
    {
        Emp_id: 23304,
        Emp_Name: 'Rajesh',
        Emp_Task: 'Testing',
        Status: 'Started'
    },
    {
        Emp_id: 23119,
        Emp_Name: 'Guru',
        Emp_Task: 'Script-Writing',
        Status: 'Complete'
    },
    {
        Emp_id: 23404,
        Emp_Name: 'Nivetha',
        Emp_Task: 'Documents-Analyse',
        Status: 'Started'
    },
    {
        Emp_id: 23411,
        Emp_Name: 'Abitha',
        Emp_Task: 'Webpage-Content Development',
        Status: 'Completed'
    },

];

document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById("tableData");
    const tbody = document.createElement("tbody");

    const rowDatas = Employees.map(function (Employee) {
        const tableRow = document.createElement('tr');

        Object.values(Employee).forEach(function (values) {
            const cells = document.createElement('td');
            cells.textContent = values;
            tableRow.appendChild(cells);
        });

        return tableRow;
    });

    tbody.append(...rowDatas);
    table.appendChild(tbody);

    const arrowDirections = document.getElementsByClassName('arrow-button');

    for (let i = 0; i < arrowDirections.length; i++) {
        arrowDirections[i].addEventListener('click', function () {
            changeDirection(i);
            sortTable(i);
        });
    }

    function changeDirection(index) {
        const arrowDirection = arrowDirections[index];
        if (arrowDirection.innerHTML === '^') {
            arrowDirection.innerHTML = 'v';
        } else {
            arrowDirection.innerHTML = '^';
        }
    }

    function sortTable(column) {
        const isAscending = arrowDirections[column].innerHTML === '^';
        const sortedData = Employees.sort((a, b) => {
            const aValue = Object.values(a)[column];
            const bValue = Object.values(b)[column];

            if (column === 0) {
                return isAscending ? aValue - bValue : bValue - aValue;
            } else {
                // For other columns, use localeCompare
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            }
        });

        tbody.innerHTML = '';
        const sortedRows = sortedData.map(function (Employee) {
            const tableRow = document.createElement('tr');

            Object.values(Employee).forEach(function (values) {
                const cells = document.createElement('td');
                cells.textContent = values;
                tableRow.appendChild(cells);
            });

            return tableRow;
        });

        tbody.append(...sortedRows);
    }
        const pageContainer = document.querySelector('.page-container');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    prevButton.addEventListener('click', () => {
        pageContainer.style.transform = 'translateX(0)';
    });

    nextButton.addEventListener('click', () => {
        pageContainer.style.transform = 'translateX(-50%)';
    });
    
});