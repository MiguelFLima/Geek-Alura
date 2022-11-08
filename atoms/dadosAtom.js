import { atom } from 'recoil';
import dados from '../Dados/dados';

export const dadosListState = atom({
    key: 'dados',
    default: dados,
})