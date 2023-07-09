import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootReducer } from '../store/index';

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;