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

## How to Use

### Adding Project Images

1. Place your project screenshots in the `images/` folder
2. Update the `imageUrl` field in `projects.json` to reference your image
3. Recommended image size: 1200x800px or 16:9 aspect ratio

### Adding Project Videos

1. Place your demo videos in the `videos/` folder
2. Update the `videoUrl` field in `projects.json` to reference your video
3. Recommended format: MP4, WebM for best browser compatibility
4. Keep video file sizes reasonable (< 10MB) for faster loading

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

## Tips

- Use optimized images (compressed JPG/PNG or WebP format)
- Keep video files small for better performance
- Use descriptive filenames for easy management
- Update links to point to actual project URLs
- Consider using a CDN for large media files

## GitHub Pages Hosting

When hosting on GitHub Pages:
- All files in this folder will be publicly accessible
- Keep file sizes reasonable to stay within GitHub's limits
- Consider using external hosting (like YouTube) for large videos
- Use relative paths in your JSON file for portability