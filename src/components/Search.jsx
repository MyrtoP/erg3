/**
 * Importing react library
 * useDebounce, fetch the search data
 * api ,
 * the styles of ui elements
 */
import React, { useState, useEffect, useRef } from "react";
import useDebounce from "../hooks/useDebounce";
import { SUGGEST_ENDPOINT } from "../config/api";
import {
  SearchContainer,
  Flex,
  SearchField,
  SearchList,
  SearchItem,
  Title,
  Button
} from "./styled";

/**
 * function searchbar
 * where if we get a debounce, then return results and state the result into false
 * else keep searching.
 *
 * @audioRef, element where we play it in react audio,  to use react media playback
 * we call the plaryPreview function so when there is a searched element then
 * when clicked stop playing else keep playing
 */
export default function Searchbar({ onSelect }) {
  const [searchTerm, setSearchTerm] = useState("search a song");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      suggestSongs(debouncedSearchTerm).then(results => {
        setResults(results);
        setIsSearching(false);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const audioRef = useRef();
  function playPreview(e, audioLink) {
    e.stopPropagation();
    if (audioRef.current) {
      if (audioRef.current.src === audioLink) {
        audioRef.current.pause();
        return (audioRef.current = undefined);
      }
      audioRef.current.pause();
    }
    audioRef.current = new Audio(audioLink);
    audioRef.current.play();
  }

  /**
   * what it is shown in the app,
   * title,the search bar ad the result, artis title and album cover and the
   * play preview button
   */
  return (
    <SearchContainer>
      <Title>
        <h1>Song Investigator✨</h1>
      </Title>
      <SearchField
        type="text"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
      {isSearching && <div>Loading songs...</div>}
      {results.length > 0 && (
        <SearchList>
          {/* we’re mapping over the data that we’ve pulled. This is basically the same thing as doing a for loop */}
          {results.map(result => (
            <SearchItem key={result.id} onClick={() => onSelect(result)}>
              <Flex>
                <img src={result.album.cover} alt="" />
                {result.title_short} - {result.artist.name}
              </Flex>
              <Button onClick={e => playPreview(e, result.preview)}>
                Play preview
              </Button>
            </SearchItem>
          ))}
        </SearchList>
      )}
    </SearchContainer>
  );
}

/**
 *fetch the api data, before show them wait a few sec
 if error show on developers console the error
 */
async function suggestSongs(searchTerm) {
  try {
    const r = await fetch(`${SUGGEST_ENDPOINT}${searchTerm}`, {
      method: "GET"
    });
    const r_1 = await r.json();
    return r_1.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
