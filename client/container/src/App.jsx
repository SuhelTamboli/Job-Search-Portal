import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = lazy(() => import("header/Header"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>loading header mfe component...</div>}>
          <Header />
        </Suspense>
        <Routes>
          <Route path="/" element={<div>Welcome to Job Portal</div>} />
          <Route path="/login" element={<div>Sign in form</div>} />
          <Route path="/register" element={<div>register form</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
