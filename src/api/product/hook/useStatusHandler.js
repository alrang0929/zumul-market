import { useState } from 'react';

export const useStatusHandler = (setValue) => {
  const [sellStatus, setSellStatus] = useState(false);

  const handleStatusChange = (status) => {
    setSellStatus(status);
    setValue('sellStatus', status); // React Hook Form 상태와 동기화
  };

  return { sellStatus, handleStatusChange };
};
