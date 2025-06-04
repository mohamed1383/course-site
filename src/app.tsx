import { createContext } from 'react';
import { ThemeContextType } from './types/context';

export const myContex = createContext<ThemeContextType>(['light', () => {}]); 