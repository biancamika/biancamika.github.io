import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import HomePage from './page'; // Home page
import WorkPage from './work/page'; // Work page
import AboutPage from './about/page'; // About page
import Project from './work/[slug]/page'; // Work detail page

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route 
                    path="/" 
                    element={
                        <PageWrapper>
                            <HomePage />
                        </PageWrapper>
                    } 
                />
                <Route
                    path="/work" 
                    element={
                        <PageWrapper>
                            <WorkPage />
                        </PageWrapper>
                    } 
                />
                <Route
                    path="/about"
                    element={
                        <PageWrapper>
                            <AboutPage />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/work/:slug"
                    element={
                        <PageWrapper>
                            <Project />
                        </PageWrapper>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

function Example() {
    return (
        <BrowserRouter>
            <Nav />
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

export default Example;