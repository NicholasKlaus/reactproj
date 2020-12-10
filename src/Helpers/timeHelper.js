import React from 'react';
import { format } from 'date-fns';

const dateFormat = 'MM/dd/yyyy';
const dateNameFormat = 'eeee';

export const formattedDate = (date) => format(new Date(date * 1000, dateFormat));
export const formattedDateName = (date) => format(new Date(date * 1000, dateNameFormat));