# 罗安民个人主页

一个使用原生 HTML、CSS、JavaScript 构建的响应式个人作品集，内容来自个人简历与已完成项目材料。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址即可。

## 构建发布版本

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`，可部署到 GitHub Pages、Cloudflare Pages、Vercel 或任意静态网站服务器。

## 发布到 GitHub Pages（推荐）

项目已包含自动部署文件 `.github/workflows/deploy.yml`。本项目使用 GitHub
用户主页仓库，仓库名为 `lam-shcm.github.io`。

1. 在 GitHub 新建一个公开仓库，不勾选自动创建 README。
2. 在本项目目录执行：

```bash
git add .
git commit -m "Publish portfolio"
git remote add origin https://github.com/lam-shcm/lam-shcm.github.io.git
git push -u origin main
```

3. 打开仓库的 `Settings → Pages`。
4. 在 `Build and deployment → Source` 中选择 `GitHub Actions`。
5. 等待 `Actions` 中的部署任务完成，公开地址通常为：

```text
https://lam-shcm.github.io/
```

以后每次向 `main` 分支推送代码，网页都会自动重新构建和发布。

## CodePen 备选方案

CodePen 适合展示独立的 HTML、CSS、JavaScript 小案例。当前主页包含多张图片、
项目封面和完整构建流程；免费 CodePen 不提供文件资源托管，因此需要额外寻找图片
托管服务并修改全部资源链接。提交本作业时建议将 GitHub Pages 作为主链接，
CodePen 可用于额外展示某个交互模块。

## 主要内容

- 个人定位：音乐科技、音频工程、心理与认知、AI 音乐产品
- 代表项目：非线性失真感知实验、华为“音悦家”、“声栖”
- 华为“音悦家”项目图片与产品信息来源：[华为“音悦家”官网](https://consumer.huawei.com/cn/mobileservices/yinyuejia/)
- 实习与教育经历
- 技术工具箱与研究能力

## 隐私处理

公开页面保留姓名与联系邮箱，未写入手机号、出生日期、家庭地址等信息。涉及保密合作的内容只保留概括性描述。
