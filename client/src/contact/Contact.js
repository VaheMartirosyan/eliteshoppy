import React, { useState, useEffect } from 'react';

export default function Example() {
    const [count, setCount] = useState(0);

    // Аналогично componentDidMount и componentDidUpdate:
    useEffect(() => {
      // Обновляем заголовок документа с помощью API браузера
      document.title = `Вы нажали ${count} раз`;
    });
  
    return (
      <div>
        <p>Вы нажали {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Нажми на меня
        </button>
      </div>
    );
}