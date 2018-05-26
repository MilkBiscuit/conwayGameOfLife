import { Platform } from 'react-native';

export const ROW_NUM = (Platform.OS === 'ios') ? 20 : 15;
export const COL_NUM = (Platform.OS === 'ios') ? 40 : 30;
export const INTERVALS = (Platform.OS === 'ios') ? [400, 200, 50] : [1000, 500, 200];

