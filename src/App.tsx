import { useTypedDispatch } from './hooks/useTypedDispatch';
import { addCashCreator,
   getCashCreator,
   getCashAsyncCreator,
   addCashAsyncCreator } from './store/bankAccaunt';
import { addUserCreator } from './store/users';
import { useEffect, useRef } from 'react';
import { fetchUsers } from './asyncAction/users';
import { sagaFetchUsersCreator } from './store/usersSaga';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const dispatch = useTypedDispatch();
  const bankAccaunt = useTypedSelector(state => state.bankAccaunt);
  const bankUsers = useTypedSelector(state => state.bankUsers.users);
  const bankUsersErr = useTypedSelector(state => state.bankUsers.err);
  const bankUsersLoading = useTypedSelector(state => state.bankUsers.loading);
  // const { users, err, loading } = useTypedSelector(state => state.bankUsers);
  const sagaBankUsers = useTypedSelector(state => state.sagaBankUsers);
  const refComponentCalled = useRef(false);

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

  const addUser = (name: string) => {
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
        onClick={() => addUser(prompt("Введите имя", "Николай") || "")}>
        Добавить пользователя
      </button>
      <div>
        {
          !bankUsersLoading ? 
            bankUsers.map(i => <div key={i.id}>{i.name}</div>) : <div>Загрузка!</div>
        }
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
