# Pardeep Baboria - Portfolio Website

A clean, professional, and responsive portfolio website built with HTML, CSS, and JavaScript. Designed to showcase projects, skills, and professional experience.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Dynamic Content**: Projects loaded dynamically from JSON data
- **Smooth Navigation**: Smooth scrolling and active section highlighting
- **Mobile Menu**: Hamburger menu for mobile devices
- **Easy Customization**: Simple structure for easy content updates

## 🚀 Live Demo

Visit the live site: [https://pardeepbaboria.github.io](https://pardeepbaboria.github.io)

## 📁 Project Structure

```
pardeepbaboria.github.io/
├── index.html              # Main HTML file
├── styles.css              # Stylesheet
├── script.js               # JavaScript functionality
├── README.md               # This file
├── data/                   # Data and assets folder
│   ├── README.md          # Data folder documentation
│   ├── projects.json      # Projects data
│   ├── images/            # Project images
│   └── videos/            # Project demo videos
└── docs/                   # Legacy files (can be removed)
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6+)**: Dynamic content and interactivity
- **GitHub Pages**: Hosting

## 📝 Customization Guide

### 1. Update Personal Information

Edit [`index.html`](index.html) to update:
- Name and title in the hero section
- About me text
- Skills and technologies
- Contact information and social links

### 2. Add Your Projects

Edit [`data/projects.json`](data/projects.json):

```json
{
    "title": "Your Project Name",
    "description": "Project description",
    "tags": ["Tech1", "Tech2"],
    "image": "🎨",
    "imageUrl": "./data/images/your-image.jpg",
    "videoUrl": "./data/videos/your-video.mp4",
    "demoLink": "https://your-demo.com",
    "githubLink": "https://github.com/username/repo"
}
```

### 3. Add Project Assets

- Place project screenshots in [`data/images/`](data/images/)
- Place demo videos in [`data/videos/`](data/videos/)
- Update the paths in `projects.json`

### 4. Customize Colors

Edit [`styles.css`](styles.css) CSS variables:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... other colors */
}
```

### 5. Update Contact Links

In [`index.html`](index.html), find the contact section and update:
- Email address
- GitHub profile URL
- LinkedIn profile URL
- Add more social links as needed

## 🚀 Deployment

### GitHub Pages Setup

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch as source
   - Click Save

3. **Access Your Site**:
   - Your site will be available at: `https://yourusername.github.io`

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pardeepbaboria/pardeepbaboria.github.io.git
   cd pardeepbaboria.github.io
   ```

2. **Open in browser**:
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **View the site**:
   - Navigate to `http://localhost:8000`

## 📱 Sections

1. **Home/Hero**: Introduction and call-to-action buttons
2. **About**: Professional summary and statistics
3. **Skills**: Technical skills organized by category
4. **Projects**: Portfolio of work with descriptions and links
5. **Contact**: Ways to get in touch

## 🎨 Color Scheme

The portfolio uses a professional blue color scheme:
- Primary: `#2563eb` (Blue)
- Secondary: `#1e40af` (Dark Blue)
- Accent: `#3b82f6` (Light Blue)
- Background: `#ffffff` (White) / `#f9fafb` (Light Gray)

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📧 Contact

- **Email**: your.email@example.com
- **GitHub**: [@pardeepbaboria](https://github.com/pardeepbaboria)
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons: Emoji (built-in)
- Fonts: System fonts for optimal performance

---

**Made with ❤️ by Pardeep Baboria**
