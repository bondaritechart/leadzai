import styled from "@emotion/styled";
import {Flex} from "src/components/Layout/Flex";

export const ContentWrapper = styled(Flex)`
  gap: 2.4rem;
  align-items: center;
  width: 100%;
  max-width: 120rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;
  }
  * {
    flex: 1 0 0;
  }
`