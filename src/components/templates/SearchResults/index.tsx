'use client';

import { SearchField } from '@/components/molecules/SearchField';
import { JobItem } from '@/components/organisms/JobItem';
import algoliasearch from 'algoliasearch/lite';
import { useState } from 'react';
import { Configure, InfiniteHits } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import styles from './searchResults.module.css';

interface SearchResultsProps {
  useFilter: boolean;
}

export const SearchResults = ({ useFilter }: SearchResultsProps) => {
  const [clearFilter, setClearFilter] = useState(false);
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID!,
    process.env.ALGOLIA_API_KEY!
  );

  return (
    <div className={styles.container}>
      <InstantSearchNext searchClient={searchClient} indexName="ecomjobs_index">
        <Configure hitsPerPage={12} />
        <SearchField
          clearFilter={clearFilter}
          setClearFilter={setClearFilter}
          searchClient={searchClient}
        />
        <InfiniteHits
          classNames={{ list: styles.hit }}
          // hitComponent={(hit) => <JobItem hit={hit} />}
          hitComponent={JobItem}
          // hitComponent={(hit) => console.log(hit)}
          showPrevious={false}
        />
      </InstantSearchNext>
    </div>
  );
};
