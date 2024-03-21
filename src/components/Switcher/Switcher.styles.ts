import styled from "@emotion/styled";

export const StyledSwitcher = styled.span`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  margin: 20px 0;

  input {
    appearance: none;
    position: relative;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    background-color: var(--primary);
    outline: none;
    font-family: 'Oswald', sans-serif;
    &:before, &:after {
      z-index: 2;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text);
    }
    &:before {
      content: 'Fahrenheit';
      left: 20px;
    }
    &:after {
      content: 'Celsius';
      right: 20px;
    }
  }

  label {
    z-index: 1;
    position: absolute;
    top: 10px;
    bottom: 10px;
    border-radius: 20px;
  }
  input {
    transition: .25s -.1s;
    &:checked {
      background-color: var(--text);
      &:before {
        color: var(--text);
        transition: color .5s .2s;
      }

      &:after {
        color: var(--accent);
        transition: color .5s;
      }

      & + label {
        left: 10px;
        right: 100px;
        background: var(--primary);
        transition: left .5s, right .4s .2s;
      }
    }

    &:not(:checked) {
      background: var(--primary);
      transition: background .5s -.1s;

      &:before {
        color: var(--accent);
        transition: color .5s;
      }

      &:after {
        color: var(--primary);
        transition: color .5s .2s;
      }

      & + label {
        left: 100px;
        right: 10px;
        background: var(--text);
        transition: left .4s .2s, right .5s, background .35s -.1s;
      }
    }
  }
`
