import { useDispatch, useSelector } from 'react-redux';
import { addCashCreator,
   getCashCreator,
   getCashAsyncCreator,
   addCashAsyncCreator } from './store/bankAccaunt';
import { addUserCreator } from './store/users';
import { useEffect, useRef } from 'react';
import { fetchUsers } from './asyncAction/users';
import { sagaFetchUsersCreator } from './store/usersSaga';

function App() {
  const dispatch = useDispatch();
  const bankAccaunt = useSelector(state => state.bankAccaunt);
  const bankUsers = useSelector(state => state.bankUsers);
  const refComponentCalled = useRef(false);
  const sagaBankUsers = useSelector(state => state.sagaBankUsers);

  useEffect(()=> {
    refComponentCalled.current || dispatch(fetchUsers());
    refComponentCalled.current = true;
  }, []);

  const addCash = () => {
    dispatch(addCashCreator(1));
  };

  const getCash = () => {
    dispatch(getCashCreator(1));
  };

  const addUser = (name) => {
    dispatch(addUserCreator(name))
  }

  const sagaAddUsers = () => {
    dispatch(sagaFetchUsersCreator())
  }

  const asyncIncrementCounter = () => {
    dispatch(addCashAsyncCreator(Number(prompt('Введите число'))))
  }

  const asyncDecrementCounter = () => {
    dispatch(getCashAsyncCreator(Number(prompt('Введите число'))))
  }

  return (
    <>
      <div>
        {bankAccaunt ? 
          bankAccaunt.cash :
          "Банковский счет отсутствует" }
      </div>
      <button
        onClick={addCash}>
        Добавить
      </button>
      <button
        onClick={getCash}>
        Снять
      </button>
      <hr/>
      <button
        onClick={() => addUser(prompt())}>
        Добавить пользователя
      </button>
      <div>
        {bankUsers.map(i => <div key={i.id}>{i.name}</div>)}
      </div>
      <hr/>
      <h2>Async wich redux-saga</h2>
      <h3>Async call of users</h3>
      <button
        onClick={sagaAddUsers}>
        Добавить пользователей
      </button>
      <div>
        {
          sagaBankUsers.length ?
          sagaBankUsers.map(i => <div key={i.id}>{i.name}</div>) :
            <div>Пользователи отсутствуют</div>
        }
      </div>
      <h3>Async counter = {bankAccaunt.cash}</h3>
      <button onClick={asyncIncrementCounter}>
        increment
      </button>
      <button onClick={asyncDecrementCounter}>
        decrement
      </button>
    </>
  )
}

export default App;
