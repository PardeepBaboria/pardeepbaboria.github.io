# Data Folder Structure

This folder contains all the assets and data files for the portfolio website.

## Folder Structure

```
data/
├── README.md           # This file
├── projects.json       # Project data configuration
├── images/            # Project screenshots and images
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
├── videos/            # Project demo videos
│   ├── project1-demo.mp4
│   ├── project2-demo.mp4
│   └── ...
└── documents/         # Additional documents (optional)
    ├── resume.pdf
    └── ...
```

### Updating Projects Data

Edit `projects.json` to add, remove, or modify projects. Each project should have:

```json
{
    "title": "Project Name",
    "description": "Brief description of the project",
    "tags": ["Tech1", "Tech2", "Tech3"],
    "image": "🎨",  // Emoji fallback if no image
    "imageUrl": "./data/images/project-name.jpg",
    "videoUrl": "./data/videos/project-demo.mp4",
    "demoLink": "https://your-demo-link.com",
    "githubLink": "https://github.com/username/repo"
}
```