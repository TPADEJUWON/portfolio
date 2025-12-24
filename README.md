# 💼 Personal Portfolio Website

My professional portfolio showcasing my journey as a React and JavaScript developer. Features production-ready projects, from intermediate to advanced complexity.

![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)

## 🌐 Live Demo

**[View Portfolio](https://portfolio-umber-two-42.vercel.app/)**

## ✨ Features

- 📱 **Fully Responsive** - Perfect on all devices
- 🎨 **Modern Design** - Gradient backgrounds, smooth animations
- 🚀 **Featured Projects** - Showcasing skill progression
- 💼 **Project Categories** - Advanced and Intermediate sections
- 🔗 **Direct Links** - Live demos and GitHub repositories
- 📊 **Skills Section** - Organized technology stack
- 📧 **Contact Section** - Multiple ways to get in touch
- ⚡ **Fast Performance** - Optimized React components

## 🛠️ Built With

- **React** - Frontend library
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Smooth Scroll** - Navigation animations

## 📦 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TPADEJUWON/portfolio.git
cd portfolio

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init -p

# Install icons
npm install lucide-react

# Start development server
npm start
```

### Tailwind Configuration

Update `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🎯 Project Sections

### Advanced Projects

- **AI Chat Assistant** - Claude API integration
- **Finance Dashboard** - Data visualization with charts
- **Crypto Tracker** - Real-time cryptocurrency data

### Intermediate Projects

- **Task Manager** - CRUD operations with local storage
- **Weather Dashboard** - API integration
- **E-commerce Gallery** - Complex state management

## 🔧 Customization

### Update Your Information

1. **Personal Details** (Line ~100-120)

   - Name, title, description
   - Social media links (GitHub, LinkedIn, Email)

2. **Projects Array** (Line ~40-80)

   - Update live demo URLs
   - Update GitHub repository links
   - Modify project descriptions

3. **Skills** (Line ~90-100)

   - Add/remove technologies
   - Organize by categories

4. **Contact Info** (Line ~400-450)
   - Email address
   - LinkedIn profile
   - GitHub username

### Color Scheme

Main colors used:

- Primary: `blue-600` to `indigo-800`
- Advanced Projects: `purple-500` to `pink-600`
- Intermediate: `blue-500` to `indigo-600`

Change in Tailwind classes throughout the component.

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js              # Main portfolio component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles + Tailwind
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts and get live URL
```

Or use Vercel's GitHub integration:

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy automatically

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build project
npm run build

# Deploy
netlify deploy --prod --dir=build
```

## 📝 TODO / Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement blog section
- [ ] Add project filtering
- [ ] Include testimonials section
- [ ] Add contact form with backend
- [ ] Implement loading animations
- [ ] Add more projects as completed
- [ ] SEO optimization with React Helmet

## 🤝 Connect With Me

- **GitHub:** [@TPADEJUWON](https://github.com/TPADEJUWON)
- **Email:** tosin0601@gmail.com
- **LinkedIn:** [Tosin Adejuwon](https://www.linkedin.com/in/tosin-adejuwon-08507b110/)
- **Portfolio:** [Portfolio] (https://portfolio-umber-two-42.vercel.app/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Built with [React](https://react.dev)

## 💡 Usage

Feel free to fork this portfolio and customize it for your own use! If you do:

- Update all personal information
- Replace project details with your own
- Modify colors and styling to match your brand
- Don't forget to give credit 😊

---

**Built with 💙 by Tosin Adejuwon** | [View Live](https://portfolio-umber-two-42.vercel.app/)

⭐ **Star this repo if you found it helpful!**
