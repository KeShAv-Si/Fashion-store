# Deployment Guide for UrbanZila E-Commerce Application

## Prerequisites
- Node.js installed
- MongoDB Atlas account (for database)
- Cloudinary account (for image storage)
- Vercel/Netlify account (for frontend)
- Render/Railway account (for backend)

## Backend Deployment (Using Render/Railway)

### Step 1: Prepare Backend
1. Create a `.gitignore` file in the root if not exists:
```
node_modules/
config/.env
.env
```

2. Update `package.json` to ensure proper scripts:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### Step 2: Environment Variables for Backend
Set these on your hosting platform (Render/Railway):
```
MONGODB_URI=your_mongodb_atlas_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret_key_here
PORT=4000
```

### Step 3: Deploy Backend
**For Render:**
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variables from Step 2
5. Click "Create Web Service"

**For Railway:**
1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables from Step 2
5. Railway will auto-deploy

### Step 4: Note Your Backend URL
Save the deployed backend URL (e.g., `https://your-app.onrender.com`)

## Frontend Deployment (Using Vercel/Netlify)

### Step 1: Update API URLs
Before deploying frontend, update all API endpoint URLs in your code.

1. Create a `.env` file in the root:
```
VITE_API_URL=https://your-backend-url.onrender.com
```

2. Update API calls to use environment variable (in Login.jsx, Profile.jsx, etc.)

### Step 2: Build Frontend
Run: `npm run build`

This creates a `dist` folder with optimized production files.

### Step 3: Deploy to Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel login`
3. Run: `vercel`
4. Follow the prompts
5. Your app will be deployed!

**Or using Vercel Website:**
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variable: `VITE_API_URL=your_backend_url`
6. Click "Deploy"

### Step 4: Deploy to Netlify (Alternative)
1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variable: `VITE_API_URL=your_backend_url`
6. Click "Deploy site"

## Post-Deployment Steps

### 1. Update CORS Settings
In `server.js`, update CORS to allow your frontend domain:
```javascript
app.use(cors({
  origin: ['https://your-frontend-domain.vercel.app', 'http://localhost:5173'],
  credentials: true
}));
```

### 2. Update Frontend API URLs
Replace all `http://localhost:4000` with your deployed backend URL.

### 3. Test Everything
- Test user registration and login
- Test adding products to cart
- Test placing orders
- Test profile page
- Test all navigation

## Quick Deployment Commands

### Backend (if using Git)
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Frontend Build
```bash
npm run build
```

## MongoDB Atlas Setup
1. Go to https://cloud.mongodb.com
2. Create a cluster (free tier available)
3. Create a database user
4. Whitelist IP addresses (or allow from anywhere: 0.0.0.0/0)
5. Get connection string and add to backend environment variables

## Cloudinary Setup
1. Go to https://cloudinary.com
2. Sign up for free account
3. Get your cloud name, API key, and API secret
4. Add to backend environment variables

## Troubleshooting

### Backend Issues
- Check logs in Render/Railway dashboard
- Verify all environment variables are set
- Ensure MongoDB connection string is correct

### Frontend Issues
- Check browser console for errors
- Verify API URL is correct
- Check CORS settings on backend

### CORS Errors
Update backend `server.js`:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
```

## Production Checklist
- [ ] Backend deployed and running
- [ ] Frontend deployed and running
- [ ] MongoDB Atlas configured
- [ ] Cloudinary configured
- [ ] Environment variables set correctly
- [ ] CORS configured properly
- [ ] API endpoints updated
- [ ] Test user registration
- [ ] Test login
- [ ] Test cart functionality
- [ ] Test order placement
- [ ] Test profile page

## Support
For issues:
- Backend: Check Render/Railway logs
- Frontend: Check Vercel/Netlify logs
- Database: Check MongoDB Atlas metrics
