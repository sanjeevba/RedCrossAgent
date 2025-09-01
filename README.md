# Red Cross Agent React App

This is a React conversion of the original HTML chat interface for the Red Cross Volunteer Program.

## Features

- Collapsible chat bot interface in the bottom right corner
- Red Cross themed design with reddish gradient background
- Responsive design for mobile and desktop
- Integration with Microsoft Power Virtual Agents chat

## Setup

1. Make sure you have Node.js installed on your system
2. Copy the `crc.jpg` image file to the `src/` directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Build for Production

To create a production build:

```bash
npm run build
```

## File Structure

- `src/App.js` - Main React component
- `src/App.css` - Styles for the application
- `src/index.js` - React app entry point
- `src/crc.jpg` - Red Cross logo (you need to add this file)
- `public/index.html` - HTML template

## Functionality

The app maintains all the original functionality:

- Click the chat bubble to open the chat window
- Click the header or toggle button to close the chat
- Click outside the chat window to close it
- Responsive design that adapts to different screen sizes
