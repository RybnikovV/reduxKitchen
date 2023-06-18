import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from './store/bankAccaunt';
import { addUserAction, addUsersActionSaga } from './store/users';
import { useEffect, useRef } from 'react';
import { fetchUsers } from './asyncAction/users';
import { sagaFetchUsersAction } from './store/usersSaga';

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
    dispatch(addCashAction(1));
  };

  const getCash = () => {
    dispatch(getCashAction(1));
  };

  const addUser = (name) => {
    dispatch(addUserAction(name))
  }

  const sagaAddUsers = () => {
    dispatch(sagaFetchUsersAction())
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
      <h2>Asynx wich redux-saga</h2>
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
    </>
  )
}

export default App;
