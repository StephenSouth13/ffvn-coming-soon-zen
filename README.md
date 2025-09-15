# FFVN - Future Fund Vietnam

## Mô tả dự án

Trang web "Coming Soon" cho quỹ đầu tư FFVN (Future Fund Vietnam) - một quỹ đầu tư hàng đầu tại Việt Nam.

## Công nghệ sử dụng

Dự án được xây dựng với:

- **Vite** - Build tool
- **TypeScript** - Type safety
- **React** - UI framework
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Dark mode support** - Theme switching

## Tính năng

✨ **Giao diện đẹp mắt**
- Hero section với gradient backgrounds
- Animations mượt mà
- Responsive design hoàn hảo
- Dark/Light mode toggle

📧 **Email Subscription**
- Form đăng ký nhận thông tin
- Validation và UX tối ưu

📱 **Responsive Design**
- Tối ưu cho tất cả thiết bị
- Mobile-first approach

## Cài đặt và Chạy

```bash
# Clone repository
git clone <YOUR_REPO_URL>
cd ffvn-coming-soon

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## Deploy

Dự án có thể deploy lên:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**

### Deploy lên Vercel

1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Deploy tự động

## Cấu trúc thư mục

```
src/
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   ├── ComingSoonHero.tsx
│   ├── EmailSubscription.tsx
│   └── ThemeToggle.tsx
├── assets/             # Images và static files
├── pages/              # Page components
├── hooks/              # Custom hooks
└── lib/                # Utilities

```

## License

© 2024 FFVN - Future Fund Vietnam. All rights reserved.