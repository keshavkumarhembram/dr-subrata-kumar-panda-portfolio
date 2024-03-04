import Navbar from "../components/Navigation/Navbar";
import Patents from "../components/Patents/Patents";
import Publications from "../components/Publications/Publications";
import ArticleTable from "../components/ArticleTable/ArticleTable";

import articlesData from './../data/bookReview.json';
import BooksEdited from "../components/BookEdited/BooksEdited";
import CoursesHandled from "../components/CoursesHandled/CoursesHandled";
import Footer from "../components/Footer/Footer";

const Work = () => {
    return (
        <div>
            <header>
            <Navbar />
            </header>
            <Patents />
            <CoursesHandled />
            <ArticleTable articles={articlesData.articles} />
            <BooksEdited />
            <Publications />   
            <Footer />
        </div>
    )
}

export default Work;