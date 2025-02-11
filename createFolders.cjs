const fs = require('fs');
const path = require('path');

// 폴더 구조 정의
const folders = [
  'src/api',
  'src/components',
  'src/features/auth/components',
  'src/features/cart/components',
  'src/features/products/components',
  'src/hooks',
  'src/layouts',
  'src/pages/Home/components',
  'src/pages/Login/components',
  'src/pages/Signup/components',
  'src/pages/Cart/components',
  'src/pages/ProductDetail/components',
  'src/pages/NotFound',
  'src/stores',
  'src/styles',
  'src/utils',
];

// 파일 구조 정의
const files = {
  'src/api/firebase.js': `import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();`,
  'src/pages/Home/index.jsx': `import React from "react";

const Home = () => {
  return <div>Welcome to the Home Page</div>;
};

export default Home;`,
  'src/pages/Login/index.jsx': `import React from "react";

const Login = () => {
  return <div>Login Page</div>;
};

export default Login;`,
  'src/pages/Signup/index.jsx': `import React from "react";

const Signup = () => {
  return <div>Signup Page</div>;
};

export default Signup;`,
  'src/pages/Cart/index.jsx': `import React from "react";

const Cart = () => {
  return <div>Cart Page</div>;
};

export default Cart;`,
  'src/pages/ProductDetail/index.jsx': `import React from "react";

const ProductDetail = () => {
  return <div>Product Detail Page</div>;
};

export default ProductDetail;`,
  'src/pages/NotFound/index.jsx': `import React from "react";

const NotFound = () => {
  return <div>404 - Page Not Found</div>;
};

export default NotFound;`,
  'src/pages/AppRouter.jsx': `import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;`,
  'src/stores/useCartStore.js': `import create from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));

export default useCartStore;`,
  'src/styles/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Global Styles */
body {
  @apply bg-gray-100 text-gray-800;
}`,
};

// 폴더 및 파일 생성 함수
const createStructure = () => {
  // 폴더 생성
  folders.forEach((folder) => {
    const folderPath = path.join(__dirname, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      //console.log(`📁 Created folder: ${folderPath}`);
    }
  });

  // 파일 생성
  Object.entries(files).forEach(([filePath, content]) => {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, content, 'utf8');
      //console.log(`📄 Created file: ${fullPath}`);
    }
  });
};

createStructure();
