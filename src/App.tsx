import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CartDrawer } from './components/CartDrawer'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { blogPosts, getBlogPostBySlug, getPromotionBySlug, promotionPosts } from './data/content'
import { getLocale } from './lib/routes'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { ProductsPage } from './pages/ProductsPage'
import { TimelineDetailPage } from './pages/TimelineDetailPage'
import { TimelineListPage } from './pages/TimelineListPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App() {
  const location = useLocation()
  const locale = getLocale(location.pathname)
  const [isCartOpen, setCartOpen] = useState(false)

  const openCart = () => setCartOpen(true)
  const closeCart = () => setCartOpen(false)

  return (
    <>
      <ScrollToTop />
      <Header locale={locale} onCartOpen={openCart} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage locale={locale} onAddToCart={openCart} />} />
          <Route path="/en" element={<HomePage locale={locale} onAddToCart={openCart} />} />
          <Route
            path="/san-pham"
            element={<ProductsPage locale={locale} onAddToCart={openCart} />}
          />
          <Route
            path="/en/products"
            element={<ProductsPage locale={locale} onAddToCart={openCart} />}
          />
          <Route
            path="/san-pham/:slug"
            element={<ProductDetailPage locale={locale} onAddToCart={openCart} />}
          />
          <Route
            path="/en/products/:slug"
            element={<ProductDetailPage locale={locale} onAddToCart={openCart} />}
          />
          <Route
            path="/hoat-dong"
            element={<TimelineListPage kind="blog" locale={locale} items={blogPosts} />}
          />
          <Route
            path="/en/blog"
            element={<TimelineListPage kind="blog" locale={locale} items={blogPosts} />}
          />
          <Route
            path="/hoat-dong/:slug"
            element={<TimelineDetailPage kind="blog" locale={locale} getItem={getBlogPostBySlug} />}
          />
          <Route
            path="/en/blog/:slug"
            element={<TimelineDetailPage kind="blog" locale={locale} getItem={getBlogPostBySlug} />}
          />
          <Route
            path="/uu-dai"
            element={<TimelineListPage kind="promotion" locale={locale} items={promotionPosts} />}
          />
          <Route
            path="/en/promotions"
            element={<TimelineListPage kind="promotion" locale={locale} items={promotionPosts} />}
          />
          <Route
            path="/uu-dai/:slug"
            element={<TimelineDetailPage kind="promotion" locale={locale} getItem={getPromotionBySlug} />}
          />
          <Route
            path="/en/promotions/:slug"
            element={<TimelineDetailPage kind="promotion" locale={locale} getItem={getPromotionBySlug} />}
          />
          <Route path="/contact" element={<ContactPage locale={locale} />} />
          <Route path="/en/contact" element={<ContactPage locale={locale} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer locale={locale} />
      <CartDrawer isOpen={isCartOpen} locale={locale} onClose={closeCart} />
    </>
  )
}

export default App
