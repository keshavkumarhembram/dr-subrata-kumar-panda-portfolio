import coursesHandled from './../../data/courseHandled.json';
import styles from './CoursesHandled.module.css';

const CoursesHandled = () => {
    return (
        <div className={styles['courses-handled']}>
            <h2>Courses Handled</h2>
            <ul>

        {coursesHandled.courses_handled.map(course => <li key={course}>{course}</li>)}
            </ul>
        </div>
    )
}

export default CoursesHandled;