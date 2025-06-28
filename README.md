# AI Whimsy Gallery

一个基于Next.js的创意AI艺术画廊应用，用户可以根据AI生成的奇思妙想提示词来创作艺术作品。

## 功能特点

- 🎨 AI生成创意提示词
- 🖼️ 交互式画布绘画
- 📱 响应式设计
- 🚀 Next.js 14 + TypeScript
- 💨 Tailwind CSS样式
- 📊 SEO优化

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel
- **SEO**: next-sitemap

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 项目结构

```
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   └── globals.css     # 全局样式
├── components/         # React组件
│   ├── Header.tsx      # 头部导航
│   ├── HeroSection.tsx # 英雄区域
│   ├── GameEmbed.tsx   # 游戏嵌入
│   ├── HowItWorks.tsx  # 工作原理
│   ├── WhyYoullLove.tsx# 特色功能
│   └── Footer.tsx      # 页脚
├── public/             # 静态资源
└── next-sitemap.config.js # 站点地图配置
```

## 部署

项目配置为静态导出，可以部署到任何静态托管服务：

```bash
npm run build
```

## TODO

- [ ] 实现实际的游戏功能
- [ ] 添加用户认证
- [ ] 集成AI提示词生成API
- [ ] 添加作品画廊
- [ ] 实现社交分享功能