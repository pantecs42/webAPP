import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Введенная информация:', inputValue);
    setInputValue(''); // Очищаем поле после ввода
  };

  return (
    <div className="App" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-end', 
      height: '100vh', 
      padding: '20px', 
      position: 'relative', 
    }}>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Здесь можно разместить другой контент */}
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        width: 'calc(80% - 20px)', // Уменьшено до 80%
        position: 'fixed', 
        bottom: '20px', 
        left: '50%', // Центрируем элемент по горизонтали
        transform: 'translateX(-50%)', // Сдвигаем на 50% влево для центрирования
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите информацию"
          style={{
            width: '100%', // Поле ввода занимает всю ширину контейнера
            height: '44px', 
            paddingLeft: '20px', 
            paddingRight: '20px', 
            background: 'linear-gradient(0deg, rgba(208, 208, 208, 0.50) 0%, rgba(208, 208, 208, 0.50) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)',
            boxShadow: '1px 1.5px 4px rgba(0, 0, 0, 0.10) inset',
            borderRadius: '12px', 
            color: '#545454', 
            fontSize: '17px', 
            fontFamily: 'SF Pro', 
            fontWeight: '510', 
            lineHeight: '22px', 
            wordWrap: 'break-word', 
            marginRight: '10px', // Отступ справа от поля ввода
          }}
        />
        
        <div 
          onClick={handleSubmit}
          style={{
            width: '44px', 
            height: '44px', 
            borderRadius: '50%', 
            backgroundColor: '#61dafb', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '24px', color: 'white' }}>↑</span>
        </div>
      </div>
    </div>
  );
}

export default App;
