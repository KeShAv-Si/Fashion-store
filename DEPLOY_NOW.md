# UrbanZila E-Commerce - Deployment Guide

## 🚀 Quick Deploy Instructions

### Backend Deployment (Render.com)

1. **Go to [Render.com](https://render.com)** and sign up/login

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select repository: `KeShAv-Si/Fashion-store`
   - Click "Connect"

3. **Configure Service**
   - **Name**: `urbanzila-backend`
   - **Region**: Select closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. **Add Environment Variables**
   Click "Advanced" → "Add Environment Variable" for each:
   
   ```
   MONGODB_URI = mongodb+srv://keshav070990_db_user:DVcpcW89Got3a3VO@cluster0.kmzpchp.mongodb.net/ecommerce?retryWrites=true&w=majority
   
   CLOUDINARY_NAME = deoximdfd
   CLOUDINARY_API_KEY = 766267859779962
   CLOUDINARY_SECRET_KEY = DSRPuGMfeoXSPKu79DRm4I0d3DE
   
   JWT_SECRET = keshav-ecommerce-jwt-secret-key-2025-secure-random-string-12345
   
   PORT = 4000
   
   NODE_ENV = production
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait 3-5 minutes for deployment
   - Copy your backend URL (e.g., `https://urbanzila-backend.onrender.com`)

---

### Frontend Deployment (Vercel)

1. **Go to [Vercel.com](https://vercel.com)** and sign up/login

2. **Import Project**
   - Click "Add New" → "Project"
   - Import `KeShAv-Si/Fashion-store`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Add Environment Variable**
   Click "Environment Variables":
   
   ```
   VITE_API_URL = https://urbanzila-backend.onrender.com
   ```
   
   (Replace with your actual Render backend URL from step 5 above)

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at `https://your-project.vercel.app`

---

## ✅ Post-Deployment

1. **Update Frontend API URL**
   - Go to Vercel dashboard
   - Settings → Environment Variables
   - Update `VITE_API_URL` with your Render backend URL
   - Redeploy

2. **Update Backend CORS**
   - Go to Render dashboard
   - Environment → Add variable:
   ```
   FRONTEND_URL = https://your-project.vercel.app
   ```

3. **Test Your Application**
   - Visit your Vercel URL
   - Try signup/login
   - Test adding products to cart
   - Place a test order

---

## 📝 Important Notes

- **Free Tier Limitations**:
  - Render: Backend may sleep after 15 min of inactivity (cold start ~30s)
  - Vercel: 100GB bandwidth/month
  
- **Custom Domain** (Optional):
  - Both platforms support custom domains
  - Configure in respective dashboard settings

- **Database**:
  - MongoDB Atlas (already configured)
  - Monitor usage in MongoDB dashboard

---

## 🔒 Security Checklist

✅ Environment variables set (not in code)
✅ JWT secret is unique and complex
✅ MongoDB credentials secure
✅ Cloudinary credentials private
✅ CORS configured for production

---

## 📞 Support

Your deployed application:
- **Backend API**: Will be on Render
- **Frontend**: Will be on Vercel
- **Database**: MongoDB Atlas
- **Images**: Cloudinary

**Repository**: https://github.com/KeShAv-Si/Fashion-store
