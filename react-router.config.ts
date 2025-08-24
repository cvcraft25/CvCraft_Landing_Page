import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: './src/app',
  // For Netlify static hosting, disable SSR
  ssr: false,
} satisfies Config;
