import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from './store/bankAccaunt';
import { addUserAction } from './store/users';
import { useEffect, useRef } from 'react';
import { fetchUsers } from './asyncAction/users';

function App() {
  const dispatch = useDispatch();
  const bankAccaunt = useSelector(state => state.bankAccaunt);
  const bankUsers = useSelector(state => state.bankUsers);
  const refComponentCalled = useRef(false);

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
    </>
  )
}

export default App;
