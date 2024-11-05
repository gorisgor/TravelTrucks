import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Layout from '../../components/Layout/Layout.jsx'
import Loader from '../../components/Loader/Loader.jsx';

import css from "./App.module.css";

const HomePage = lazy(()=>import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(()=>import('../../pages/CatalogPage/CatalogPage.jsx'));
const CamperPage = lazy(()=>import('../../pages/CamperPage/CamperPage.jsx'))
const NotFoundPage = lazy(()=>import('../../pages/NotFoundPage/NotFoundPage.jsx'));


export default function App() {

  return <>
    <Layout>
      <Toaster />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />}/>
          <Route path="/catalog/:id" element={<CamperPage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
    </>
}
