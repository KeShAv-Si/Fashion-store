# 🚨 CRITICAL FIX FOR RENDER BACKEND

## The Error: `Operation users.findOne() buffering timed out after 10000ms`

This means Render **cannot connect to MongoDB Atlas**.

---

## ✅ SOLUTION - Update MongoDB URI on Render:

### Step 1: Go to Render Dashboard
https://dashboard.render.com/ → Click `urbanzila-backend`

### Step 2: Click "Environment" tab

### Step 3: Find `MONGODB_URI` and UPDATE it to:

**OPTION A - Add connection options:**
```
mongodb+srv://keshav070990_db_user:DVcpcW89Got3a3VO@cluster0.kmzpchp.mongodb.net/ecommerce?retryWrites=true&w=majority&serverSelectionTimeoutMS=30000
```

**OPTION B - If that doesn't work, check MongoDB Atlas:**

1. Go to: https://cloud.mongodb.com/
2. Click **"Database Access"** on left menu
3. Click **"Add New Database User"**
4. Create user: `render_user` with password: `RenderPass2025`
5. Grant **"Read and write to any database"** role
6. Save

Then update Render URI to:
```
mongodb+srv://render_user:RenderPass2025@cluster0.kmzpchp.mongodb.net/ecommerce?retryWrites=true&w=majority
```

### Step 4: Check Network Access in MongoDB Atlas

1. In MongoDB Atlas, click **"Network Access"**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Confirm

### Step 5: Save and Redeploy

1. Click **"Save Changes"** in Render
2. Wait 3-5 minutes for deployment
3. Check **"Logs"** tab for success message: "DB Connected"

---

## 🧪 Test After Fix:

Visit: https://urbanzila-backend.onrender.com

Should see: `{"success":true,"message":"UrbanZila API is running"}`

Then test your site: https://fashion-store-theta-one.vercel.app

---

## 📌 Important:

The timeout error means **MongoDB Atlas is blocking Render's IP**. 
You MUST add **0.0.0.0/0** to Network Access in MongoDB Atlas!
