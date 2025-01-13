import { Inter } from 'next/font/google'; //primary font
import { Lusitana } from 'next/font/google'; //secondary font

export const inter = Inter({ subsets: ['latin'] }); //specify what subset of the font to load
export const lusitana = Lusitana({weight: ['400', '700'], subsets: ['latin']});

