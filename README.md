# 🌾 AgriConnect Hub

An AI-powered agriculture platform designed to assist farmers with crop disease detection, government schemes, marketplace access, and agricultural knowledge — all in one place.

---

## 🚀 Features

### 🤖 Multilingual Chatbot
- Supports **English, Hindi, and Marathi**
- Helps users navigate the platform easily
- Provides quick assistance for farmers

### 🌿 Crop Disease Detection
- Upload plant leaf image
- AI predicts disease using **Hugging Face ViT model**
- Returns:
  - Disease name
  - Confidence score
  - Suggested solution

### 🛒 Marketplace
- Farmers can explore and connect for:
  - Buying/Selling products
  - Agricultural goods

### 🏛️ Government Schemes
- Displays schemes like:
  - PM-KISAN
  - PMFBY
  - Kisan Credit Card
- Includes:
  - Benefits
  - Eligibility
  - Apply links

### 🚜 Labour & Machinery
- Connect farmers with:
  - Labour workers
  - Equipment providers

### 📍 Krushi Kendra (Map-based)
- Locate nearby agriculture centers
- Helps farmers access local support

### 📚 Knowledge Base
- Agricultural tips & best practices
- Crop care guidance

---

## 🧠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- ShadCN UI
- Lucide Icons

### Backend
- Flask (Python)
- REST APIs

### AI / ML
- Hugging Face API
- Vision Transformer (ViT)
- Image Classification

### Other Tools
- LocalStorage (for history)
- Git & GitHub

---

## 🔍 How Disease Detection Works

1. User uploads plant image
2. Image is sent to backend API
3. Backend calls Hugging Face model:
   - `google/vit-base-patch16-224`
4. Model returns classification
5. System maps result to disease + solution
6. Output shown to user

---

## 📁 Project Structure
```
agriconnect-hub/
│
├── frontend/ # React frontend
│
├── backend/ # Flask backend
│ ├── app.py
│ └── utils/
│
├── models/ # ML models (optional)
│
├── dataset/ # Training data (optional)
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/agriconnect-hub.git
cd agriconnect-hub
```
### 2️⃣ Backend Setup
```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### 2️⃣ Backend Setup
```
cd frontend
npm install
npm run dev
```
## 🎯 Use Cases
Smart farming assistance
Crop disease identification
Government scheme awareness
Digital agriculture ecosystem

## 💡 Future Improvements
More accurate custom ML model
Mobile app integration
Real-time camera detection
Weather-based suggestions
Farmer community features

## 👨‍💻 Team
Developed during Hackathon
Built as an end-to-end agriculture solution

## ⭐ Acknowledgment

This project was built during a hackathon sponsored by:
Katalyst India
Salesforce
MathWorks
