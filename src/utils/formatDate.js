export const formatDate = (isdate) => {
    const date = new Date(isdate); // 내부 변수명을 `parsedDate`로 변경
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  };