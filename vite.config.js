import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // 빌드 후 분석 결과를 브라우저에서 자동으로 엽니다.
      filename: 'bundle-analysis.html', // 분석 결과 파일 이름 설정
      template: 'treemap', // 시각화 형태 (sunburst, treemap, network 중 선택 가능)
      gzipSize: true, // gzip 압축 크기 표시
      brotliSize: true, // brotli 압축 크기 표시
    }),
  ],
  optimizeDeps: {
    include: ['jwt-decode'],
  },
});
