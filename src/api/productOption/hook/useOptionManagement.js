import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchOptions, addOption, deleteOption } from '../option';

export const useOptionManagement = (productId) => {
  const queryClient = useQueryClient();

  // 옵션 가져오기
  const {
    data: options,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['options', productId],
    queryFn: () => fetchOptions(productId),
    enabled: !!productId,
  });

  // 옵션 추가 Mutation
  const addOptionMutation = useMutation({
    mutationFn: addOption,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['options', productId] }),
  });

  // 옵션 삭제 Mutation
  const deleteOptionMutation = useMutation({
    mutationFn: deleteOption,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['options', productId] }),
  });

  // 옵션 추가 핸들러
  const handleAddOption = (newOption) => {
    if (options?.length >= 10) {
      alert('최대 10개의 옵션만 추가할 수 있습니다.');
      return;
    }
    addOptionMutation.mutate({
      ...newOption,
      add_price: 0,
      stock: 0,
      product_id: productId,
    });
  };

  // 옵션 삭제 핸들러
  const handleRemoveOption = (optionId) => {
    deleteOptionMutation.mutate(optionId);
  };

  return { options, isLoading, error, handleAddOption, handleRemoveOption };
};

export const handleInputChange = (e) => {
  setOptionName(e.target.value); // 입력값 업데이트
};
