# Environment Variables Setup Guide

## 🔧 How to Get Each Environment Variable

### 1. MongoDB URI (Database)

**What it is:** Connection string to your database where all data is stored (users, products, orders)

**How to get it:**
1. Go to https://cloud.mongodb.com
2. Sign up for a FREE account
3. Click "Build a Database" → Choose FREE tier (M0)
4. Choose a cloud provider (AWS recommended) and region (closest to you)
5. Click "Create"
6. Create a database user:
   - Username: `admin`
   - Password: (create a strong password and SAVE IT)
7. Click "Choose a connection method" → "Drivers"
8. Copy the connection string (looks like: `mongodb+srv://admin:password@cluster0.xxxxx.mongodb.net/`)
9. Replace `<password>` with your actual password
10. Add `/ecommerce` at the end

**Example:**
```
MONGODB_URI=mongodb+srv://admin:mypassword123@cluster0.abcde.mongodb.net/ecommerce
```

---

### 2. Cloudinary (Image Storage)

**What it is:** Service to store and manage product images

**How to get it:**
1. Go to https://cloudinary.com
2. Sign up for FREE account
3. After login, you'll see your Dashboard
4. Copy these three values:
   - **Cloud Name** (shown at top)
   - **API Key** (shown in dashboard)
   - **API Secret** (click "eye" icon to reveal)

**Example:**
```
CLOUDINARY_NAME=dxyz1234
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_SECRET_KEY=abcdefghijklmnop-qrstuvwxyz
```

---

### 3. JWT Secret (Authentication Security)

**What it is:** A secret key to secure user login tokens

**How to get it:**
1. Go to https://randomkeygen.com/
2. Copy any "CodeIgniter Encryption Keys" (256-bit key)
3. Or just use any long random string

**Example:**
```
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
```

---

### 4. Payment Gateways (OPTIONAL - Only if you want real payments)

#### Razorpay (Indian Payment Gateway)
1. Go to https://razorpay.com
2. Sign up for account
3. Go to Settings → API Keys
4. Generate Test/Live keys

#### Stripe (International Payment Gateway)
1. Go to https://stripe.com
2. Sign up for account
3. Go to Developers → API Keys
4. Copy Secret Key

**For now, you can leave payment gateways as default values since COD (Cash on Delivery) works without them**

---

## 📝 Quick Setup Instructions

### For Local Development:

1. Update `config/.env` file with your values:
```bash
MONGODB_URI=your_mongodb_connection_string_here
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
JWT_SECRET=your_long_random_string_here
PORT=4000
```

2. Keep payment gateway keys as they are (optional)

### For Deployment (Render/Vercel):

When deploying, you'll add these same values in the hosting platform's environment variables section (I'll guide you through that).

---

## ⚠️ IMPORTANT SECURITY NOTES

1. **NEVER** share your `.env` file or commit it to GitHub
2. **NEVER** share your API keys publicly
3. The `.env` file is already in `.gitignore` so it won't be uploaded to GitHub
4. Each deployment platform will have its own environment variables section

---

## 🚀 Ready to Deploy?

Once you have:
- ✅ MongoDB URI
- ✅ Cloudinary credentials  
- ✅ JWT Secret

You're ready to deploy! Let me know when you have these values and I'll help you deploy.

---

## 💡 Pro Tips

- Use the FREE tiers - they're sufficient for learning and small projects
- Save all your credentials in a secure note (password manager)
- For MongoDB, remember to whitelist IP `0.0.0.0/0` for deployment
- Cloudinary free tier gives 25GB storage - more than enough to start
