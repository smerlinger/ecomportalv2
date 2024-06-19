'use client';

import { SearchFieldWordList } from '@/constants/SearchFieldWordList';
import { MagnifyingGlass } from '@phosphor-icons/react';
import * as Form from '@radix-ui/react-form';
import { SearchClient } from 'algoliasearch/lite';
import React, { Dispatch, useEffect, useRef, useState } from 'react';
import { useSearchBox } from 'react-instantsearch';
import styles from './searchField.module.css';

interface SearchFieldProps {
  clearFilter: boolean;
  setClearFilter: Dispatch<React.SetStateAction<boolean>>;
  searchClient: SearchClient;
}

export const SearchField = ({
  clearFilter,
  setClearFilter,
  searchClient,
}: SearchFieldProps) => {
  const { refine, query } = useSearchBox();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState(query);
  const [isFocused, setIsFocused] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    if (!isFocused) {
      const intervalId = setInterval(() => {
        const currentWord = SearchFieldWordList[currentWordIndex];

        if (currentLetterIndex === currentWord.length - 1) {
          setCurrentWordIndex(
            (currentWordIndex + 1) % SearchFieldWordList.length
          );
          setCurrentLetterIndex(0);
        } else {
          setCurrentLetterIndex(currentLetterIndex + 1);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [currentLetterIndex, currentWordIndex, isFocused]);

  const setQuery = (newQuery: string) => {
    setSearchText(newQuery);

    refine(newQuery);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputRef.current) {
      inputRef.current.blur();
    }
    // setQuery(searchText);
  };
  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setQuery('');
  };

  // const handleClear = () => {
  //   setSearchText('');
  // };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setQuery(searchText);
    }
  };

  return (
    <Form.Root
      className={styles.root}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSearch(e)}
      onReset={(e: React.FormEvent<HTMLFormElement>) => handleReset(e)}
    >
      <Form.Field name="Get weekly job alerts..." className={styles.field}>
        <Form.Control asChild>
          <input
            type="text"
            className={styles.control}
            placeholder={
              !isFocused
                ? `${SearchFieldWordList[currentWordIndex].slice(
                    0,
                    currentLetterIndex + 1
                  )}|`
                : ''
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(e)
            }
            onChange={(e) => setSearchText(e.target.value)}
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit className={styles.submit}>
        <MagnifyingGlass weight="bold" />
        <span>Find</span>
      </Form.Submit>
    </Form.Root>
  );
};
