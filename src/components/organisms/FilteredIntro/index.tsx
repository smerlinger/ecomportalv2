import styles from './FilteredIntro.module.css';

interface FilteredIntroProps {
    query: string;
    isLocation?: boolean;
}

export const FilteredIntro = ({ query, isLocation }: FilteredIntroProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.heading}>
                    {isLocation ? `Jobs in ${query}` : `${query} Jobs`}
                </h1>
                <div className={styles.subHeading}>
                    <p>Browse our curated list of eCommerce brands hiring <span className={styles.role}>{isLocation ? `in ${query}` : `${query}s`}</span></p>
                </div>
            </div>
        </div>
    );
};
