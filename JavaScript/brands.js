const brands = [
    {
        id: 1,
        brand: 'VW',
        model: 'Vento Highline 1.6',
        color: 'Twister Red',
        year:  2018,
        price: '$ 189,900.00 M.N.',
    },
    {
        id: 2,
        brand: 'Mazda',
        model: 'CX-5 Grand Touring',
        color: 'White Pearl',
        year:  2014,
        price: '$ 223,000.00 M.N.',
    },
    {
        id: 3,
        brand: 'Nissan',
        model: 'Sentra 1.8 Sense MT',
        color: 'Red',
        year:  2018,
        price: '$ 200,000.00 M.N.',
    },
    {
        id: 4,
        brand: 'VW',
        model: 'Jetta A7 Comfortline 1.4',
        color: 'Black',
        year:  2019,
        price: '$ 269,000.00 M.N.',
    },
    {
        id: 5,
        brand: 'Honda',
        model: 'CR-V 2.4 EXL',
        color: 'Rat Grey',
        year:  2018,
        price: '$ 310,000.00 M.N.',
    },
    {
        id: 6,
        brand: 'Seat',
        model: 'Ibiza 1.2 Turbo',
        color: 'Green Globlin',
        year:  2014,
        price: '$ 149,900.00 M.N.',
    },
    {
        id: 7,
        brand: 'Renault',
        model: 'Clio 1.6 RS 200',
        color: 'Spark Blue',
        year:  2015,
        price: '$ 210,000.00 M.N.',
    },
    {
        id: 8,
        brand: 'KIA',
        model: 'Sportage 2.4 SXL',
        color: 'Black',
        year:  2017,
        price: '$ 329,800.00 M.N.',
    },
    {
        id: 9,
        brand: 'Hyundai',
        model: 'Santa Fe 3.4 Limited Tech',
        color: 'Drak Blue',
        year:  2019,
        price: '$ 569,000.00 M.N.',
    },
    {
        id: 10,
        brand: 'Volvo',
        model: 'XC-60 R-Desing 4x4 2.0 Turbo',
        color: 'Red Brick',
        year:  2017,
        price: '$ 399,000.00 M.N.',
    },
    {
        id: 11,
        brand: 'Audi',
        model: 'TT 2.0 Coupe',
        color: 'Black',
        year:  2007,
        price: '$ 220,000.00 M.N.',
    },
    {
        id: 12,
        brand: 'VW',
        model: 'Golf GTI OETTINGER',
        color: 'Blue',
        year:  2020,
        price: '$ 675,900.00 M.N.',
    },
];

let editingCars = false;

function printCars() {
    const container = document.getElementById('container-brands');
    let html = ''; 
    brands.forEach((brands) => {
        html += `<tr>
                    <td>${brands.brand}</td>
                    <td>${brands.model}</td>
                    <td>${brands.color}</td>
                    <td>${brands.year}</td>
                    <td>${brands.price}</td>
                    <td>
                      <button onclick="deleteCars(${brands.id})" class="btn-yellow">Erase</button>
                      <button onclick="editCars(${brands.id})" class="btn-yellow">edit</button>
                    </td> 
                </tr>`; 
    });
    container.innerHTML = html;     
}

function submitCars() {
    if(editingCars) {
      editOld();
    } else {
      addCars();
    }
  }

function deleteCars(id) {
    const index = brands.findIndex((brands) => brands.id === id)
    brands.splice(index, 1);
    printCars();
}

  
function editCars(id) {
    const edit = brands.find((brands) => brands.id === id);
    document.getElementById('brand').value = edit.brand;
    document.getElementById('model').value = edit.model;
    document.getElementById('year').value = edit.year;
    document.getElementById('price').value = edit.price;
    document.getElementById('color').value = edit.color;
    editingCars = edit;
  }

  
function addCars() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const id = brands[brands.length-1].id + 1;

    const newCar = {
        brand,
        model,
        color,
        year,
        price,
        id,
    }


    brands.push(newCar);
    
    printCars();

    document.getElementById('form-user').reset();

}

printCars()


