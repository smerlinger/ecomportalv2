import styles from './FilteredIntro.module.css';

interface FilteredIntroProps {
    role: string;
}

export const FilteredIntro = (props: FilteredIntroProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.heading}>
                    {props.role} Jobs
                </h1>
                <div className={styles.subHeading}>
                    <p>Browse our curated list of eCommerce brands hiring <span className={styles.role}>{props.role}s</span></p>
                </div>
            </div>
        </div>
    );
};
