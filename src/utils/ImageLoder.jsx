import supabase from '../api/supabaseClient';
export const ImageLoader = ({ imagePath, altText, buckit }) => {
  
  // getPublicUrl로 동기적으로 URL 생성
  const { data } = supabase.storage.from(buckit).getPublicUrl(imagePath);
  const publicUrl = data?.publicUrl;

  if (!publicUrl) {
    return <p>이미지를 불러올 수 없습니다.</p>;
  }

  // console.log("publicUrl",publicUrl);
  return <img src={publicUrl} alt={altText} />;
};


