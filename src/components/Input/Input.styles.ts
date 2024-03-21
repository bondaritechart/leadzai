import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {CgSearchLoading} from "react-icons/cg";
import {FiSearch} from "react-icons/fi";

export const StyledInput = styled.input`
  border: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  height: 6rem;
  padding: 0 6rem;
  font-size: 2.4rem;
  color: var(--text);

  &:before {
    content: "";
    height: 3px;
    width: 0;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(120deg, var(--accent), var(--primary));
  }

  &:focus {
    outline: none;

    &:before {
      width: 100%;
    }
  }
`

export const InputWrapper = styled.div`
  position: relative;
  max-width: 50rem;
`

const icon = css`
  position: absolute;
  color: var(--text);
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;
  width: 2.5rem;
  height: 2.5rem;
`

export const SearchIcon = styled(FiSearch)`
  ${icon}
`

export const SearchLoadingIcon = styled(CgSearchLoading)`
  ${icon}`

export const RecentResultsWrapper = styled.div`
  background: white;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const RecentResult = styled.button`
  cursor: pointer;
  display: block;
  background: transparent;
  border: 0;
  color: var(--primary);
  padding: 0.8rem 1.6rem;
  width: 100%;
  text-align: left;
  font-size: 1.6rem;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

export const PopularTitle = styled.div`
  padding: 0.8rem 1.6rem;
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 1rem;
`

export const ClearButton = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--text);
`