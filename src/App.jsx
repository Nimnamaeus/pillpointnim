import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './page/Auth/signin.jsx';
import SignUp from './page/Auth/signup.jsx';
import SignUpRole from './page/Auth/sign-up-role.jsx';
import Home from './page/Client/home-page/home.jsx';
import GeneralHealth from './page/Client/product-page/general-health/gen-health';
import ProductDetail from './page/Client/_components/product-detail/productdetail';
import MedicalSupplies from './page/Client/product-page/medical-supplies/medsup.jsx';
import PersonalCare from './page/Client/product-page/personal-care/pc.jsx';
import Supplements from './page/Client/product-page/supplements/supple.jsx';
import { CartProvider } from './page/Client/_components/context/CartContext.jsx';
import Cart from './page/Client/cart-page/cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './page/Client/checkout-page/checkout.jsx';
import OrderConfirmation from './page/Client/order-check/check';
import ContactPage from './page/Client/contact-us/contact-page';
import Dashboard from './page/Seller/home-page/dashboard.jsx';
import HeroPage from './page/heropage.jsx';
import Sales from './page/Seller/sales/sales.jsx';
import ProductManagement from './page/Seller/product-management/product-management.jsx';
import Stores from './page/Client/stores-page/stores.jsx';
import { OrderProvider } from './page/Client/_components/context/OrderContext';
import UserProfile from './page/Client/user-profile/user-profile.jsx';
import ChatbotPage from './page/Client/chatbot-page/chatbot-page.jsx';
import { SearchProvider } from './page/Client/_components/context/SearchContext';
import SearchResults from './page/Client/product-page/search-overview/SearchResults';
import InventoryProductDetail from './page/Seller/product-management/inv-prodetail';
import AdvancedProductEdit from './page/Seller/product-management/AdvancedProductEdit';

function App() {
  return (
    <SearchProvider>
      <OrderProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HeroPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/sign-up-role" element={<SignUpRole />} />

              {/* Buyer's route */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/general-health" element={<GeneralHealth />} />
              <Route path="/general-health/product/:id" element={<ProductDetail />} />
              <Route path="/medical-supplies" element={<MedicalSupplies />} />
              <Route path="/medical-supplies/product/:id" element={<ProductDetail />} />
              <Route path="/personal-care" element={<PersonalCare />} />
              <Route path="/personal-care/product/:id" element={<ProductDetail />} />
              <Route path="/supplements" element={<Supplements />} />
              <Route path="/supplements/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
              
              {/* Seller's route */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/product-management" element={<ProductManagement />} />
              <Route path="/sales" element={<Sales />} />
              
              <Route path="/search-results" element={<SearchResults />} />
              <Route path="/product-management/product/:id" element={<InventoryProductDetail />} />
              <Route path="/product-management/edit-advanced/:id" element={<AdvancedProductEdit />} />
              <Route path="/product-management/inventory/:id" element={<InventoryProductDetail />} />
            </Routes>
          </Router>
          <ToastContainer position="top-right" autoClose={2000} />
        </CartProvider>
      </OrderProvider>
    </SearchProvider>
  );
}

export default App;
