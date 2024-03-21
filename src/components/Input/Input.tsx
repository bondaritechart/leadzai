import React, {useContext, useEffect, useRef, useState} from "react";
import {ClearButton, InputWrapper, SearchIcon, SearchLoadingIcon, StyledInput} from "src/components/Input/Input.styles";
import {RecentResults} from "src/components/Input/RecentResults";
import {AppContext} from "src/context/AppContext";

export const Input = () => {
  const {search, setSearch, loading} = useContext(AppContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    timer.current = setTimeout(() => {
      setIsFocused(false)
    } , 200)
  }

  const handleClear = () => {
    setSearch("");
    clearTimeout(timer.current as ReturnType<typeof setTimeout>)
    inputRef.current?.focus();
  }

  useEffect(() => {
    if (loading) {
      setIsFocused(false);
    }
  } , [loading])

  return <InputWrapper>
    {loading ? <SearchLoadingIcon /> : <SearchIcon/>}
    <StyledInput
      value={search}
      ref={inputRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Search for a city"
      onChange={(e) => setSearch(e.target.value)}
    />
    {search && <ClearButton onClick={handleClear}>X</ClearButton>}
    {isFocused && <RecentResults />}
  </InputWrapper>
}