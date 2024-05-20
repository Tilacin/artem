import Menu from "./Menu"
import { useState } from 'react';
import { propertiesForRent } from '../data.js';

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(propertiesForRent); // Используем состояние для отфильтрованных объектов

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Функция для фильтрации объектов по категории
  const filterPropertiesByCategory = category => {
    if (category === 'all') {
      setFilteredProperties(propertiesForRent); // При выборе "Все" показываем все объекты
    } else {
      const filtered = propertiesForRent.filter(property => property.category === category);
      setFilteredProperties(filtered); // Фильтруем и показываем объекты только выбранной категории
    }
    setIsOpen(false); // Закрываем выпадающее меню после выбора категории
  };

  return (
    <div className="flex flex-col content-center min-h-screen min-w-full">
      <Menu />
      <h1 className="my-10">Подберём за вас</h1>
      <div className="flex gap-10 border-solid border-2 border-blue-200 rounded-lg">
        <button>Купить</button>
        <button>Снять</button>
      </div>
      <div className="flex flex-col mt-5 gap-10 bg-white p-5 border-solid border-2 border-gray-200 rounded-lg">
        <div className="relative">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Тип <span className="ml-2">&#9660;</span>
          </button>
          {isOpen && (
            <div
            className="absolute w-full mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <button onClick={() => filterPropertiesByCategory('flat')} className="block w-full text-left px-4 py-2 text-sm text-gray-700" role="menuitem">
                Квартира
              </button>
              <button onClick={() => filterPropertiesByCategory('house')} className="block w-full text-left px-4 py-2 text-sm text-gray-700" role="menuitem">
                Дом
              </button>
              <button onClick={() => filterPropertiesByCategory('commerce')} className="block w-full text-left px-4 py-2 text-sm text-gray-700" role="menuitem">
                Коммерция
              </button>
            </div>
          </div>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-5 mt-5 justify-center " >
      {filteredProperties.map((property) => (
          <div key={property.id} className="flex flex-col gap-2 border-2 p-2 rounded-xl">
             <img src={property.img} alt="arrow"/>
            <p>цена: {property.price} руб.</p>
            <p>адрес: {property.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;


