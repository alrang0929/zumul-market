export const validateForm = (data) => {
    const errors = {};
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{10,}$/;
  
    const validations = [
      { condition: () => !data.email.includes('@'), field: 'email', message: '유효한 이메일 주소를 입력해주세요' },
      { condition: () => !passwordRegex.test(data.password), field: 'password', message: '비밀번호는 최소 10자 이상이며, 대문자, 숫자, 특수문자를 포함해야 합니다.' },
      { condition: () => data.name.length < 2 || data.name.length > 10, field: 'name', message: '닉네임은 2자 이상 10자 이하만 가능합니다' },
      { condition: () => !['fan', 'creator'].includes(data.type), field: 'type', message: '창작자 여부를 선택해주세요' },
      { condition: () => !data.profile_image, field: 'profile_image', message: '프로필 이미지를 등록해주세요' },
    ];
  
    // 조건을 만족하는 경우 errors 객체에 추가
    validations.forEach(({ condition, field, message }) => {
      if (condition()) errors[field] = message;
    });
  
    return errors;
  };
  