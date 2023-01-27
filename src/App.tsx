import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainProductList from "./MainProductList";
import NewPageDetail from "./NewPageDetail";
import { Routes, Route } from "react-router-dom";
import NoData from "./NoData";
import Contact from "./Contact";
import Login from "./Login";
import SignUp from "./SignUp";
import Forgot from "./Forgot";
import { GiHamburgerMenu } from "react-icons/gi";
import Mobilemenu from "./Mobilemenu";
import CartPage from "./CartPage";
import UserLoggedIn from "./UserLoggedIn";
import UserNotLoggedIn from "./UserNotLoggedIn";
import Alert from "./Alert";
import UserProvider from "./providers/UserProvider";
import AlertProvider from "./providers/AlertProvider";
import CartProvider from "./providers/CartProvider";
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <div className="flex flex-col h-screen overflow-y-auto ">
              <Alert />
              <div className="sticky top-0">
                <Navbar />
              </div>
              <div className="absolute flex flex-col items-start justify-start md:hidden left-16">
                <GiHamburgerMenu
                  onClick={handleMenuOpen}
                  className="text-4xl font-black text-black"
                />
                {isMenuOpen && (
                  <div>
                    <Mobilemenu />
                  </div>
                )}
              </div>

              <div className="grow">
                <Routes>
                  <Route
                    index
                    element={
                      <UserNotLoggedIn>
                        <MainProductList />
                      </UserNotLoggedIn>
                    }
                  ></Route>

                  <Route
                    path="/products/:id"
                    element={
                      <UserNotLoggedIn>
                        <NewPageDetail />
                      </UserNotLoggedIn>
                    }
                  ></Route>

                  <Route
                    path="//"
                    element={
                      <UserNotLoggedIn>
                        <MainProductList />
                      </UserNotLoggedIn>
                    }
                  ></Route>

                  <Route
                    path="/"
                    element={
                      <UserNotLoggedIn>
                        <MainProductList />
                      </UserNotLoggedIn>
                    }
                  ></Route>

                  <Route
                    path="/cart"
                    element={
                      <UserNotLoggedIn>
                        <CartPage />
                      </UserNotLoggedIn>
                    }
                  ></Route>
                  <Route path="/ContactUs" element={<Contact />}></Route>
                  <Route
                    path="/LoginPage"
                    element={
                      <UserLoggedIn>
                        <Login />
                      </UserLoggedIn>
                    }
                  ></Route>

                  <Route
                    path="/SignUp"
                    element={
                      <UserLoggedIn>
                        <SignUp />
                      </UserLoggedIn>
                    }
                  ></Route>

                  <Route path="/Forgot" element={<Forgot />}></Route>

                  <Route path="*" element={<NoData />}></Route>
                </Routes>
              </div>
              <div className="sticky bottom-0">
                <Footer />
              </div>
            </div>
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
